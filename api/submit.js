import fs from 'fs';
import { google } from 'googleapis';
import { Resend } from 'resend';
import { formConfigs } from './formConfig.js';

// ---------- SETUP RESEND ----------
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- SETUP GOOGLE SHEETS AUTH (via local creds file) ----------
let creds;
try {
  const raw = fs.readFileSync('./google-creds.json', 'utf8');
  creds = JSON.parse(raw);
  console.log('✅ Google credentials loaded successfully');
} catch (err) {
  console.error('❌ Failed to load google-creds.json:', err.message);
  creds = null;
}

const auth = creds
  ? new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  : null;

const sheets = auth ? google.sheets({ version: 'v4', auth }) : null;

// ---------- MAIN HANDLER ----------
export default async function handler(req, res) {
  console.log('=== 🟢 API ENTRY ===');
  console.log('Incoming method:', req.method);
  console.log('Environment check:', {
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasGoogleJSON: fs.existsSync('./google-creds.json'),
    hasSheetID: !!process.env.GOOGLE_SHEET_ID,
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('📩 Incoming Request Body:', req.body);
    const { formType, formData } = req.body;

    if (!formType || !formData) {
      return res.status(400).json({ success: false, message: 'Missing formType or formData' });
    }

    // ----- Load Config -----
    const config = formConfigs[formType];
    if (!config) {
      return res.status(400).json({ success: false, message: `Unknown form type: ${formType}` });
    }
    console.log('✅ Loaded config for:', formType);

    // ----- Google Sheets Integration -----
    try {
      console.log('📄 Connecting to Google Sheets...');
      const { GoogleSpreadsheet } = await import('google-spreadsheet');
      const { JWT } = await import('google-auth-library');

      const jwtClient = new JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, jwtClient);
      await doc.loadInfo();

      console.log('✅ Sheet loaded:', doc.title);

      const sheet = doc.sheetsByTitle[config.sheetName];
      if (!sheet) {
        throw new Error(`Sheet "${config.sheetName}" not found`);
      }

      // Flatten any non-primitive values before writing to Sheets
      const rowData = { ...formData };
      for (const key in rowData) {
        const val = rowData[key];
        if (Array.isArray(val)) {
          rowData[key] = val.join(', ');
        } else if (typeof val === 'object' && val !== null) {
          rowData[key] = JSON.stringify(val);
        } else if (val === undefined || val === null) {
          rowData[key] = '';
        }
      }

      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        FormType: formType,
        ...rowData,
      });

      console.log('✅ Data added to Google Sheets successfully');
    } catch (err) {
      console.error('❌ Google Sheets Error:', err.message);
      console.error('🧱 Stack Trace:', err.stack);
      return res.status(500).json({
        success: false,
        message: 'Google Sheets Error',
        error: err.message,
      });
    }

    // ----- Resend Email Integration -----
    try {
      console.log('📧 Sending email via Resend...');
      await resend.emails.send({
        from: 'Website Enquiry <onboarding@resend.dev>',
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
      return res.status(500).json({
        success: false,
        message: 'Resend Mail Error',
        error: err.message,
      });
    }

    console.log('✅ ALL OPERATIONS SUCCESSFUL ✅');
    return res.status(200).json({ success: true, message: 'Submission successful' });
  } catch (err) {
    console.error('❌ Unexpected Server Error:', err.message);
    console.error('🧱 Stack Trace:', err.stack);
    return res.status(500).json({
      success: false,
      message: 'Unexpected Server Error',
      error: err.message,
    });
  }
}
