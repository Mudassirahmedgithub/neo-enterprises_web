import dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // load env first

import express from 'express';
import cors from 'cors'; // import cors

const app = express(); // ✅ must come before using app

app.use(cors()); // now it's safe
app.use(express.json());

// Lazy-load handler for /api/submit
let handler;
app.post('/api/submit', async (req, res, next) => {
  if (!handler) {
    const module = await import('./api/submit.js');
    handler = module.default;
  }
  return handler(req, res, next);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('RESEND key available:', !!process.env.RESEND_API_KEY);
});
