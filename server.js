import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting (simple in-memory)
const requestLog = new Map();

function checkRateLimit(ip, maxRequests = 5, windowMs = 3600000) {
  const now = Date.now();
  const userLog = requestLog.get(ip) || [];
  const recentRequests = userLog.filter(time => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return true;
}

// Validation
function validateForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name is required';
  }
  if (!data.contact || data.contact.trim().length < 3) {
    errors.contact = 'Contact is required';
  }
  if (!data.task || data.task.trim().length < 10) {
    errors.task = 'Task description must be at least 10 characters';
  }

  // Basic email/telegram validation
  if (data.contact && !(/^[\w\-_.]+@[\w\-_.]+\.\w+$/.test(data.contact) || data.contact.startsWith('@'))) {
    errors.contact = 'Invalid contact format';
  }

  return errors;
}

// Sanitize
function sanitize(str) {
  if (!str) return '';
  return str
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
}

// Telegram notification
async function sendToTelegram(formData) {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.log('Telegram credentials not configured');
    return true;
  }

  const message = `🆕 Новая заявка APL Pages Development

👤 Имя: ${sanitize(formData.name)}

📱 Контакт: ${sanitize(formData.contact)}

☎️ Телефон: ${sanitize(formData.phone) || 'N/A'}

💰 Бюджет: ${sanitize(formData.budget) || 'N/A'}

🛠 Задача: ${sanitize(formData.task)}

💬 Дополнительно: ${sanitize(formData.info) || 'N/A'}

📅 Дата/время: ${new Date().toLocaleString()}

🌐 Язык: ${sanitize(formData.lang) || 'N/A'}
💱 Валюта: ${sanitize(formData.currency) || 'N/A'}`;

  try {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!res.ok) {
      console.error('Telegram API error:', res.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

// API endpoint
app.post('/api/submit-form', async (req, res) => {
  const ip = req.ip || 'unknown';

  // Rate limiting
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.'
    });
  }

  const errors = validateForm(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  // Sanitize all inputs
  const sanitizedData = {
    name: sanitize(req.body.name),
    contact: sanitize(req.body.contact),
    phone: sanitize(req.body.phone),
    task: sanitize(req.body.task),
    budget: sanitize(req.body.budget),
    info: sanitize(req.body.info),
    lang: sanitize(req.body.lang),
    currency: sanitize(req.body.currency)
  };

  // Send to Telegram (don't block response if it fails)
  const telegramSent = await sendToTelegram(sanitizedData);

  if (!telegramSent) {
    console.warn('Telegram notification failed for:', sanitizedData.contact);
  }

  // Always return success to avoid frontend errors
  res.json({
    success: true,
    message: 'Form submitted successfully'
  });
});

// Serve HTML for all routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
