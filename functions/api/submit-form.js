// ============================================================
// Cloudflare Pages Function — обработка формы заявки
// Путь в проекте: functions/api/submit-form.js
// Отвечает на адрес: /api/submit-form
// ============================================================

function sanitize(str, maxLength = 1000) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().slice(0, maxLength);
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}

function validateForm(data) {
  const errors = {};

  if (!data.name || String(data.name).trim().length < 2) {
    errors.name = 'Name is required';
  }
  if (!data.contact || String(data.contact).trim().length < 3) {
    errors.contact = 'Contact is required';
  }
  if (!data.task || String(data.task).trim().length < 10) {
    errors.task = 'Task description must be at least 10 characters';
  }
  if (data.contact && !(/^[\w\-_.]+@[\w\-_.]+\.\w+$/.test(String(data.contact)) ||
      String(data.contact).startsWith('@'))) {
    errors.contact = 'Invalid contact format';
  }

  return errors;
}

// Простое ограничение частоты запросов (живёт в пределах одного инстанса)
const requestLog = new Map();

function checkRateLimit(ip, maxRequests = 5, windowMs = 3600000) {
  const now = Date.now();
  const userLog = (requestLog.get(ip) || []).filter(function (t) { return now - t < windowMs; });

  if (userLog.length >= maxRequests) return false;

  userLog.push(now);
  requestLog.set(ip, userLog);
  return true;
}

async function sendToTelegram(formData, env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured');
    return true;
  }

  const message = `🆕 Новая заявка APL Pages Development

👤 Имя: ${sanitize(formData.name)}

📱 Контакт: ${sanitize(formData.contact)}

☎️ Телефон: ${sanitize(formData.phone) || 'N/A'}

💰 Бюджет: ${sanitize(formData.budget) || 'N/A'}

🛠 Задача: ${sanitize(formData.task)}

💬 Дополнительно: ${sanitize(formData.info) || 'N/A'}

📅 Дата/время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Belgrade' })}

🌐 Язык: ${sanitize(formData.lang) || 'N/A'}
💱 Валюта: ${sanitize(formData.currency) || 'N/A'}`;

  const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: message,
      disable_web_page_preview: true
    })
  });

  if (!res.ok) {
    console.error('Telegram API error:', res.status, await res.text());
    return false;
  }

  return true;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  if (!checkRateLimit(ip)) {
    return jsonResponse({
      success: false,
      error: 'Too many requests. Please try again later.'
    }, 429);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ success: false, error: 'Invalid request body' }, 400);
  }

  const errors = validateForm(body);
  if (Object.keys(errors).length > 0) {
    return jsonResponse({ success: false, errors }, 400);
  }

  const sanitizedData = {
    name: sanitize(body.name),
    contact: sanitize(body.contact),
    phone: sanitize(body.phone),
    task: sanitize(body.task),
    budget: sanitize(body.budget),
    info: sanitize(body.info),
    lang: sanitize(body.lang, 10),
    currency: sanitize(body.currency, 10)
  };

  const telegramSent = await sendToTelegram(sanitizedData, env);

  if (!telegramSent) {
    console.warn('Telegram notification failed for:', sanitizedData.contact);
  }

  return jsonResponse({
    success: true,
    message: 'Form submitted successfully'
  });
}
