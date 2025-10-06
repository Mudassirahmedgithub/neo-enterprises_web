// /api/submit.js
import { google } from 'googleapis';
import { Resend } from 'resend';
import { formConfigs } from './formConfig.js';

// ---------- SETUP RESEND ----------
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- SETUP GOOGLE SHEETS ----------
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// ---------- MAIN HANDLER ----------
export default async function handler(req, res) {
  console.log('=== 🟢 API ENTRY ===');
  console.log('Incoming method:', req.method);
  console.log('Environment check:', {
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasGoogleJSON: !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
    hasSheetID: !!process.env.GOOGLE_SHEET_ID,
  });

  if (req.method !== 'POST') {
    console.error('❌ Invalid request method:', req.method);
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('📩 Incoming Request Body:', req.body);

    const { formType, formData } = req.body;

    if (!formType || !formData) {
      console.error('❌ Missing formType or formData');
      return res
        .status(400)
        .json({ success: false, message: 'Missing formType or formData' });
    }

    // ----- Load Config -----
    console.log('🧩 Loading formConfig...');
    const { default: formConfig } = await import('./formConfig.js');
    const config = formConfig[formType];

    if (!config) {
      console.error('❌ Config not found for form type:', formType);
      return res
        .status(400)
        .json({ success: false, message: `Unknown form type: ${formType}` });
    }

    console.log('✅ Loaded config for:', formType);

    // ----- Google Sheets Integration -----
    try {
      console.log('📄 Connecting to Google Sheets...');
      const { GoogleSpreadsheet } = await import('google-spreadsheet');
      const { JWT } = await import('google-auth-library');
      const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

      const client = new JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, client);
      await doc.loadInfo();

      console.log('✅ Sheet loaded:', doc.title);

      const sheet = doc.sheetsByTitle[config.sheetName];
      if (!sheet) {
        console.error('❌ Sheet not found:', config.sheetName);
        return res
          .status(500)
          .json({ success: false, message: 'Sheet not found' });
      }

      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        FormType: formType,
        ...formData,
      });

      console.log('✅ Data added to Google Sheets successfully');
    } catch (err) {
      console.error('❌ Google Sheets Error:', err.message);
      console.error('🧱 Stack Trace:', err.stack);
      return res.status(500).json({
        success: false,
        message: 'Google Sheets Error',
        error: err.message,
        stack: err.stack,
      });
    }

    // ----- Resend Mail -----
    try {
      console.log('📧 Sending email via Resend...');
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Website Enquiry <no-reply@yourdomain.com>',
        to: config.mailTo,
        subject: config.subject,
        html: `
          <h3>New ${formType} submission</h3>
          <pre>${JSON.stringify(formData, null, 2)}</pre>
        `,
      });

      console.log('✅ Email sent successfully');
    } catch (err) {
      console.error('❌ Resend Mail Error:', err.message);
      console.error('🧱 Stack Trace:', err.stack);
      return res.status(500).json({
        success: false,
        message: 'Resend Mail Error',
        error: err.message,
        stack: err.stack,
      });
    }

    console.log('✅ ALL OPERATIONS SUCCESSFUL ✅');
    return res
      .status(200)
      .json({ success: true, message: 'Submission successful' });
  } catch (err) {
    console.error('❌ Unexpected Server Error:', err.message);
    console.error('🧱 Stack Trace:', err.stack);
    return res.status(500).json({
      success: false,
      message: 'Unexpected Server Error',
      error: err.message,
      stack: err.stack,
    });
  }
}
