import axios from 'axios';

const SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/your-script-id/exec';

export async function addToSheet(formData) {
  try {
    const res = await axios.post(SHEET_WEBHOOK_URL, formData);
    return res.data;
  } catch (error) {
    console.error('Google Sheets backup error:', error);
    throw error;
  }
}
