# Setup Guide for Non-Technical Users

Welcome! This guide will help you set up and deploy A+ Digital step-by-step. Don't worry if you're not a programmer — we'll break it down into simple steps.

## What Do You Need?

1. A computer with Windows, Mac, or Linux
2. Internet connection
3. About 15 minutes
4. Accounts on (free):
   - **Telegram** (for receiving form notifications)
   - One of: **Vercel**, **Netlify**, or **Cloudflare Pages** (for hosting)

## Step 1: Prepare the Project

### Option A: You Already Have the Project Files

If someone gave you a ZIP file or folder:

1. **Extract the ZIP** (if applicable)
   - Windows: Right-click → "Extract All"
   - Mac: Double-click
   - Linux: `unzip AplusDigital.zip`

2. **Open a terminal/command prompt** in that folder
   - Windows: Shift + Right-click → "Open PowerShell here"
   - Mac/Linux: Open Terminal, then `cd /path/to/AplusDigital`

### Option B: Clone from GitHub

If the project is on GitHub:

```bash
git clone https://github.com/yourusername/AplusDigital.git
cd AplusDigital
```

## Step 2: Install Node.js

You need Node.js (a tool to run the website backend).

1. Go to https://nodejs.org/
2. Download **LTS version** (left button)
3. Run the installer and follow the instructions
4. Restart your computer

**Verify installation:**
```bash
node --version
npm --version
```

Both should show version numbers like `v18.17.0`.

## Step 3: Install Project Dependencies

In your terminal (in the project folder):

```bash
npm install
```

This will download and install all necessary code libraries. It may take a few minutes.

## Step 4: Set Up Telegram Integration

### Get Your Telegram Bot Token

1. Open Telegram
2. Search for **@BotFather**
3. Start the chat and select `/newbot`
4. Give your bot a name (e.g., "A+ Digital Bot")
5. Give it a username (e.g., "APlus_Digital_Bot")
6. **Copy the token** that BotFather gives you (looks like: `123456789:ABCDefGHIJKlmnoPQRstUVWxyz`)

### Get Your Telegram Chat ID

1. In Telegram, search for **@userinfobot**
2. Start the chat
3. It will show you your **numeric ID** (e.g., `987654321`)

### Add to Environment File

1. In the project folder, find `.env.example`
2. Rename it to `.env` (Windows users: right-click → "Rename")
3. Open `.env` with a text editor (Notepad, VS Code, etc.)
4. Fill in:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NODE_ENV=production
PORT=3000
```

**Example:**
```
TELEGRAM_BOT_TOKEN=123456789:ABCDefGHIJKlmnoPQRstUVWxyz
TELEGRAM_CHAT_ID=987654321
NODE_ENV=production
PORT=3000
```

5. **Save the file**
6. ⚠️ **NEVER commit `.env` to GitHub** — it's secret!

## Step 5: Test Locally

Before uploading, test that everything works:

```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
```

1. Open your browser
2. Go to `http://localhost:3000`
3. Check:
   - All text loads
   - Language switcher works (RU | SR | EN buttons)
   - Currency switcher works (EUR | RUB | USDT buttons)
   - Mobile view works (resize browser window)
   - Form loads

### Test the Form

1. Fill out the contact form
2. Click "Send request"
3. Check your Telegram — you should receive the notification

**If it doesn't work:**

- Check `.env` file — are bot token and chat ID correct?
- Restart the server: Ctrl+C and run `npm start` again
- Open browser console (F12) and check for errors

## Step 6: Deploy to the Internet

Now you need to upload the project to a hosting service so it's accessible online.

### Option 1: Deploy to Vercel (Easiest)

**What you need:** GitHub account (free at github.com)

**Steps:**

1. Create a folder called `AplusDigital` on GitHub
2. Upload your project files
3. Go to **vercel.com** and sign up with GitHub
4. Click "New Project" → Select your repository
5. In "Environment Variables", add:
   - `TELEGRAM_BOT_TOKEN` = your_token
   - `TELEGRAM_CHAT_ID` = your_id
6. Click "Deploy"
7. Wait ~1 minute
8. Your site is live at the URL Vercel gives you

**Connect your domain:**
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel project settings → Domains
3. Add your domain
4. Update nameservers at your registrar (Vercel will show instructions)

### Option 2: Deploy to Netlify

**What you need:** GitHub account

**Steps:**

1. Push your project to GitHub
2. Go to **netlify.com** and sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm install`
6. Add environment variables (same as above)
7. Deploy

### Option 3: Deploy to Cloudflare Pages

**What you need:** Cloudflare account (free)

**Steps:**

1. Push to GitHub
2. Go to **dash.cloudflare.com**
3. Workers & Pages → Pages → Connect to Git
4. Select your repository
5. Build command: `npm install`
6. Add environment variables
7. Deploy

## Step 7: Connect Your Domain

After deployment, you need to point your domain (e.g., `AplusDigital.rs`) to your hosted site.

### If You Already Have the Domain

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find "DNS Settings" or "Nameservers"
3. Your hosting service (Vercel/Netlify) will provide nameserver addresses
4. Update them
5. Wait 24-48 hours for changes to propagate

### If You Need a Domain

1. Go to **namecheap.com** or **godaddy.com**
2. Search for your desired domain (e.g., `yourbusiness.rs`)
3. Buy it
4. Once purchased, update nameservers (see above)

## Step 8: Customize Content

Now it's time to make it your own.

### Edit Text

Open `public/scripts/app.js` and look for the `translations` object. Change:
- Email, Telegram, Viber contacts
- Any descriptions
- Prices (keep them in EUR)

### Change Colors

Open `public/styles/main.css` and look for `:root`. Modify the colors:

```css
--accent-green: #34d399;  /* Green highlights */
--accent-blue: #3b82f6;   /* Blue highlights */
--accent-purple: #a78bfa; /* Purple accents */
```

### Update Services

In `public/scripts/app.js`, find the `solutions` array and edit services to match your offerings.

## Step 9: Monitor Form Submissions

All form submissions come to your Telegram chat. You don't need to set up a database — they're delivered instantly to Telegram.

## Maintenance & Updates

### Regular Backups

Keep a backup of your `.env` file (securely) in case you need to redeploy.

### Update Content

To update any text:
1. Edit the files locally
2. Push changes to GitHub
3. Your hosting service auto-deploys

### Monitor Performance

1. Vercel/Netlify have built-in analytics
2. Check Telegram regularly for new inquiries
3. Respond to customers within 24 hours

## Troubleshooting

### "Port 3000 is already in use"

Another app is using that port. Either:
- Close other apps
- Change PORT in `.env` to 3001, 3002, etc.

### Form doesn't send notifications

1. Is Telegram bot token correct? Recheck `@BotFather`
2. Is chat ID numeric? Check `@userinfobot`
3. Did you save `.env`?
4. Restart server: Ctrl+C then `npm start`

### Site not loading after deployment

1. Check build logs on your hosting service
2. Verify `.env` has correct values
3. Wait a few minutes for deployment to finish

### Language switcher doesn't work

- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check browser console for errors (F12)

### Domain shows wrong website

1. Check DNS propagation: **dnschecker.org**
2. Clear browser cache
3. Wait 48 hours for full propagation
4. Contact your hosting support if still broken

## Support

If you get stuck:

1. **Check the README.md** — more technical details
2. **Search Google** — your error message might be common
3. **Contact your hosting provider** — they have live support
4. **Email**: Andrew.makarov.work@gmail.com

## Next Steps

1. ✅ Set up locally and test
2. ✅ Deploy to Vercel/Netlify/Cloudflare
3. ✅ Connect your domain
4. ✅ Share your new website!

---

**Congratulations!** Your A+ Digital website is ready. Keep responding to customer inquiries and watch your business grow! 🚀
