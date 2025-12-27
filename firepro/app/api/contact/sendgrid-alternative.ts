/**
 * ALTERNATIVE: SendGrid Implementation
 * Use this instead of nodemailer for production
 * 
 * Install: npm install @sendgrid/mail
 * Set SENDGRID_API_KEY in .env.local
 */

import { NextRequest, NextResponse } from 'next/server';

// Uncomment to use SendGrid instead of nodemailer
/*
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const adminEmail = {
      to: process.env.ADMIN_EMAIL || 'admin@firepro.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@firepro.com',
      subject: `New FirePro Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const userEmail = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@firepro.com',
      subject: 'FirePro - We Received Your Request',
      html: `
        <h2>Thank you for contacting FirePro!</h2>
        <p>Hi ${name},</p>
        <p>We've received your inquiry about <strong>${service}</strong>.</p>
        <p>Our team will review your request and get back to you within 24 hours.</p>
        <p><strong>FirePro Emergency Hotline:</strong> +1 (234) 567-8900 (24/7)</p>
      `,
    };

    await Promise.all([
      sgMail.send(adminEmail),
      sgMail.send(userEmail),
    ]);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
*/
