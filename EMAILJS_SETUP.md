# EmailJS Configuration Setup

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended for business)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

**For Testing:** You can use any email address initially (even your personal Gmail). You can change this later without affecting your Service ID, Template ID, or Public Key.

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Inquiry from {{from_name}} - {{service_interest}}

**Body:**

```
New Contact Form Submission from Resolute Solutions Website

Client Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}
- Job Title: {{job_title}}
- Industry: {{industry}}
- Company Size: {{company_size}}

Project Details:
- Service Interest: {{service_interest}}
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}
- Timeline: {{timeline}}
- Urgency: {{urgency}}

Business Context:
- Previous Consulting Experience: {{worked_with_consultants}}
- Referral Source: {{referral_source}}
- Preferred Contact Method: {{preferred_contact_method}}
- Best Contact Time: {{best_contact_time}}

Current Challenges:
{{current_challenges}}

Expected Outcomes:
{{expected_outcomes}}

Additional Information:
{{message}}

---
Submitted from: {{website_url}}
Contact Email: {{to_email}}
Timestamp: {{current_time}}
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Integration" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Set Up Environment Variables (Recommended)

**For Security:** Instead of hardcoding your EmailJS credentials, use environment variables.

1. **Create `.env` file** in your project root:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_bjtql8y
VITE_EMAILJS_TEMPLATE_ID=template_nqkz24p
VITE_EMAILJS_PUBLIC_KEY=y44jGUHQnuTrO-l1W

# Website Configuration
VITE_WEBSITE_URL=https://resolutesolutions.github.io
VITE_CONTACT_EMAIL=resolutesolutions@hotmail.com
```

2. **Add `.env` to `.gitignore`** (if not already there):

```
.env
```

3. **The ContactModal is already configured** to use these environment variables automatically!

### Alternative: Direct Code Update

If you prefer not to use environment variables, update `src/components/ContactModal.jsx`:

```javascript
const serviceId = "???????"; // From Step 2
const templateId = "??????"; // From Step 3
const publicKey = "??????"; // From Step 4
```

## Testing

1. Fill out a form on your website
2. Check your email for the formatted message
3. If issues occur, check browser console for errors

**Testing Tips:**

- **Environment variables:** Make sure your `.env` file has the correct values
- Start with a personal email (Gmail, Yahoo, etc.) for initial testing
- Test with different form combinations to ensure all fields work
- Check spam folder if emails don't arrive
- Use browser dev tools to check for console errors
- **Check console:** If emails don't send, look for "EmailJS configuration missing" error

## Changing Email Address Later

**Good News:** You can change the receiving email address anytime without breaking your implementation!

### Method 1: Change Service Email (Recommended)

1. Go to "Email Services" in EmailJS dashboard
2. Click on your service
3. Update the email credentials
4. Your Service ID, Template ID, and Public Key remain the same
5. No code changes needed!

### Method 2: Add Multiple Services

1. Create additional email services for different addresses
2. Update the `serviceId` in your code to switch between them
3. Useful for having separate emails for different purposes

### Method 3: Template-Based Routing

You can send to different emails based on the service type:

- Update your template to use `{{to_email}}` variable
- Set different `to_email` values in your code based on `serviceType`

## Email Provider Setup Tips

### Gmail Setup:

- Enable 2-factor authentication
- Use App Password (not your regular password)
- Allow less secure apps if needed

### Outlook/Hotmail Setup:

- Enable 2-factor authentication
- Use App Password
- Check SMTP settings

## Rate Limits

- Free plan: 200 emails/month
- Paid plans available for higher volume
- Perfect for testing and small business needs

## Quick Start for Testing

**Fastest way to test:**

1. Use your personal Gmail for initial setup
2. Create basic template with key fields
3. Get your 3 IDs (Service, Template, Public Key)
4. **Update `.env` file** with these IDs (or update ContactModal.jsx directly)
5. Test the form immediately
6. Change to business email later when ready

**Environment Variables Benefits:**

- ✅ **Secure:** Keep credentials out of your code
- ✅ **Flexible:** Easy to change values without code changes
- ✅ **Professional:** Best practice for production apps

## Security Notes

- EmailJS public key is safe to expose in frontend
- Private key should never be used in frontend code
- Consider adding reCAPTCHA for production to prevent spam
- Email addresses can be changed anytime without affecting security
