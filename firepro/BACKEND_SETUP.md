# FirePro Backend Setup Guide

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

### Option 1: Gmail (Free)
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@firepro.com
```

**Gmail Setup:**
1. Enable 2-Factor Authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an "App Password" for Mail
4. Use that password in `EMAIL_PASSWORD`

### Option 2: SendGrid (Professional)
```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-sendgrid-api-key
ADMIN_EMAIL=admin@firepro.com
```

### Option 3: Custom SMTP (Any Email Provider)
```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@firepro.com
```

## Form Submission Flow

1. User fills contact form and clicks "Send Message"
2. Frontend sends POST request to `/api/contact`
3. Backend validates the data
4. Sends two emails:
   - **Admin email**: Full submission details
   - **User email**: Confirmation message
5. Returns success/error response to frontend

## Testing the Form

1. **Development**: Use a Gmail account with app password
2. **Production**: Use a professional email service (SendGrid, SendinBlue, etc.)

## Optional: Database Storage

To store submissions in a database (MongoDB, PostgreSQL, etc.):

### With Prisma + PostgreSQL:

1. Install Prisma:
```bash
npm install @prisma/client
npx prisma init
```

2. Update `.env.local`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/firepro
```

3. Define schema in `prisma/schema.prisma`:
```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  service   String
  message   String
  createdAt DateTime @default(now())
}
```

4. Run migrations:
```bash
npx prisma migrate dev --name init
```

5. Update API route to save to database:
```typescript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// In your POST handler, add:
await prisma.contactSubmission.create({
  data: { name, email, phone, service, message },
});
```

## Production Deployment

### Vercel (Recommended for Next.js):
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel Settings
4. Deploy

### Other Platforms:
- Set up environment variables in your hosting platform
- Ensure SMTP/API keys are kept secure
- Use HTTPS only

## Monitoring

- Check email delivery logs in your email service
- Monitor API errors in `/api/contact` logs
- Set up error alerts (Sentry, LogRocket, etc.)

## Security Best Practices

- ✅ Validate all input on server-side
- ✅ Use HTTPS only
- ✅ Rate limit form submissions
- ✅ Add CSRF protection
- ✅ Never expose API keys in frontend code
- ✅ Sanitize email content to prevent injection
