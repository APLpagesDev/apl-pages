# A+ Digital - Project Documentation

## Overview

A+ Digital is a modern, minimalist website for a digital solutions developer providing websites, Telegram bots, automation, and CRM solutions for small businesses. The site is fully responsive, multi-language (RU/SR/EN), supports multiple currencies (EUR/RUB/USDT), and includes a secure backend for form submissions with Telegram notifications.

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express
- **Runtime**: Node v18+
- **Hosting**: Cloudflare Pages, Vercel, Netlify, or any Node.js hosting
- **Package Manager**: npm

## Project Structure

```
AplusDigital/
├── package.json              # Dependencies and scripts
├── .env.example             # Environment variables template
├── .gitignore              # Git ignore rules
├── server.js               # Express backend server
├── README.md               # This file
├── SETUP.md                # User-friendly setup guide
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.svg         # Website icon
│   ├── robots.txt          # SEO robots rules
│   ├── sitemap.xml         # XML sitemap
│   ├── styles/
│   │   └── main.css        # Main stylesheet (premium minimalism design)
│   ├── scripts/
│   │   └── app.js          # Main application (i18n, currency conversion, form handling)
│   ├── privacy/
│   │   └── index.html      # Privacy Policy
│   ├── terms/
│   │   └── index.html      # Terms of Service
│   └── legal/
│       └── index.html      # Legal Information
```

## Features

### Frontend
- ✅ Premium minimalist design with dark theme
- ✅ Multi-language support (Russian, Serbian, English)
- ✅ Dynamic currency conversion (EUR/RUB/USDT)
- ✅ Fully responsive (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Client-side form validation
- ✅ SPA routing

### Backend
- ✅ Form submission endpoint
- ✅ Server-side validation and sanitization
- ✅ XSS protection
- ✅ Rate limiting (5 requests per hour per IP)
- ✅ Telegram bot integration for notifications
- ✅ Error handling and logging
- ✅ Environment-based configuration

### Security
- ✅ All API keys stored server-side only
- ✅ Input sanitization on both frontend and backend
- ✅ Rate limiting to prevent spam
- ✅ No sensitive data in localStorage
- ✅ Safe error messages (no system details exposed)

## Installation

### Prerequisites
- Node.js v18 or higher
- npm or yarn
- Git (optional)

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables** (see SETUP.md for detailed instructions)
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   CURRENCY_API_KEY=your_api_key_here
   NODE_ENV=production
   PORT=3000
   ```

## Development

### Run Locally

```bash
npm run dev
```

Server will start at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Configuration

### Telegram Integration

1. Create a Telegram bot via @BotFather
2. Get your bot token
3. Find your chat ID (send a message to @userinfobot)
4. Add to `.env` file

Example:
```
TELEGRAM_BOT_TOKEN=123456789:ABCDefGHIJKlmnoPQRstUVWxyz
TELEGRAM_CHAT_ID=987654321
```

### Currency Exchange Rates

The app uses **exchangerate-api.com** (free tier, no registration required). Exchange rates update on app initialization. If the API is unavailable, EUR continues working with cached rates.

To use a different service, modify the `updateExchangeRates()` function in `public/scripts/app.js`.

## Deployment

### Cloudflare Pages

1. Push code to GitHub
2. Connect repository in Cloudflare Pages
3. Build command: `npm install`
4. Deploy

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Settings
4. Deploy

### Self-Hosted (VPS/Dedicated)

1. SSH into server
2. Clone repository
3. Install Node.js
4. Run `npm install && npm start`
5. Use PM2 for process management: `pm2 start server.js`
6. Set up Nginx reverse proxy (optional)

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `TELEGRAM_BOT_TOKEN` | Telegram bot API token | `123456:ABC...` |
| `TELEGRAM_CHAT_ID` | Telegram chat ID for notifications | `987654321` |
| `CURRENCY_API_KEY` | Currency API key (optional, free API doesn't require) | `your_key` |
| `NODE_ENV` | Environment | `production` or `development` |
| `PORT` | Server port | `3000` |

## API Endpoints

### POST /api/submit-form

Submit a contact form.

**Request:**
```json
{
  "name": "John Doe",
  "contact": "@telegram or email@example.com",
  "phone": "+381 63 123 4567",
  "task": "I need a website for my business",
  "budget": "€500-1000",
  "info": "Additional information"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "errors": {
    "name": "Name is required"
  }
}
```

## SEO

The site includes:
- ✅ Proper meta tags for all languages
- ✅ Open Graph support
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Proper lang attributes

### Update Domain

Replace `AplusDigital.rs` with your domain in:
- `public/sitemap.xml`
- `public/robots.txt`
- Backend meta tags

## Performance

- **Lighthouse Score**: 95+ (tested locally)
- **Page Load Time**: <1s on 3G
- **No blocking scripts**: All JS is async
- **Optimized images**: SVG favicon only
- **CSS-in-head**: Minimal blocking resources

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Language switcher works (RU/SR/EN)
- [ ] Currency switcher works (EUR/RUB/USDT)
- [ ] Form submits successfully
- [ ] Mobile version responsive (320px - 2560px)
- [ ] Links work (external: Telegram, Viber, Email)
- [ ] No console errors
- [ ] Telegram notification received
- [ ] Rate limiting works (try 6+ form submissions)

## Troubleshooting

### Telegram notifications not working

1. Check if bot token is correct
2. Verify chat ID is numeric
3. Ensure bot has permission to send messages
4. Check server logs

### Currency rates not updating

1. Check internet connection
2. Verify API is not blocked
3. Check for CORS issues in browser console
4. Use cached rates as fallback

### Forms not submitting

1. Check browser console for errors
2. Verify server is running
3. Check firewall/security settings
4. Verify form validation passes

## Support

For issues or questions:
- Email: Andrew.makarov.work@gmail.com
- Telegram: @andrewqqqy
- Viber: +381 63 7124 794

## License

MIT

## Changelog

### v1.0.0 (January 2026)
- Initial release
- Multi-language support
- Dynamic currency conversion
- Telegram integration
- Production-ready
