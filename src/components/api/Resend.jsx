import axios from 'axios';

export async function sendEmail(formData) {
  try {
    const res = await axios.post('/api/send-email', formData);
    return res.data;
  } catch (error) {
    console.error('Resend email error:', error);
    throw error;
  }
}
