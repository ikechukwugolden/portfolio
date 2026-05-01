# Email Setup - Formspree Configuration

## Quick Start (5 minutes)

Your contact form is now using **Formspree** for email delivery. Follow these steps:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (it's free!)
3. Enter your email: **ikechukwuv074@gmail.com**
4. Create a password and verify your email

### Step 2: Create a New Form
1. After signing in, click "Create" or "New Form"
2. Name it: `Portfolio Contact Form`
3. Set the email to: `ikechukwuv074@gmail.com`
4. Click "Create Form"

### Step 3: Get Your Form ID
1. After creating the form, you'll see a unique ID (looks like: `xyzwqpor`)
2. Copy this ID

### Step 4: Update Your Portfolio
1. Open `.env.local` in your project
2. Find the line: `VITE_FORMSPREE_ID=xyzwqpor`
3. Replace `xyzwqpor` with your actual Formspree ID
4. Save the file

### Step 5: Test It!
1. Run: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. ✅ Check your email inbox (ikechukwuv074@gmail.com)

## How It Works

- **No backend needed** - Formspree handles everything
- **Free tier** - Unlimited form submissions
- **Instant emails** - Messages arrive within seconds
- **Secure** - Your email is protected
- **Fallback** - If Formspree fails, it opens your email client

## Troubleshooting

**Form not sending?**
- ✓ Check your Formspree ID in `.env.local`
- ✓ Make sure you verified your email on Formspree
- ✓ Check browser console for errors (F12)
- ✓ Make sure you have internet connection

**Can't find my Formspree ID?**
- Log in to formspree.io
- Go to "Projects" or your dashboard
- Click your form
- The ID is in the URL: `formspree.io/f/YOUR_ID_HERE`

**Emails going to spam?**
- Check your spam/junk folder first
- Add Formspree to your contacts
- Formspree automatically signs emails so they're authentic

## Advanced (Optional)

You can customize emails through Formspree dashboard:
- Change email notifications
- Set auto-reply messages
- View submission analytics
- Export responses to CSV

---

**Your contact form will now send emails automatically when visitors submit the form!** 🎉
