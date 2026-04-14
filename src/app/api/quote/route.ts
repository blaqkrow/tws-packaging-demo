import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, product, quantity, notes } = body;

    // Validate required fields
    if (!name || !phone || !email || !product) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Build the email body
    const emailBody = [
      `New Quote Request from Megapac Website`,
      ``,
      `Name: ${name}`,
      company ? `Company: ${company}` : '',
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Product: ${product}`,
      quantity ? `Estimated Quantity: ${quantity}` : '',
      notes ? `Notes: ${notes}` : '',
      ``,
      `---`,
      `Sent from megapac.sg website`,
    ].filter(Boolean).join('\n');

    // Use mailto link approach — construct the data to return for client-side email
    // If SMTP credentials are configured, send via nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      // Server-side email via SMTP
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Megapac Website" <${smtpUser}>`,
        to: 'sales@megapac.sg',
        replyTo: email,
        subject: `Quote Request: ${product} — ${name}${company ? ` (${company})` : ''}`,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #1e3a5f;">New Quote Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              ${company ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ''}
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Product</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${product}</td></tr>
              ${quantity ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Quantity</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${quantity}</td></tr>` : ''}
              ${notes ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Notes</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${notes}</td></tr>` : ''}
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from megapac.sg website</p>
          </div>
        `,
      });

      return NextResponse.json({ success: true, method: 'smtp' });
    }

    // Fallback: return mailto link for client to open
    const subject = encodeURIComponent(`Quote Request: ${product} — ${name}`);
    const mailtoBody = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:sales@megapac.sg?subject=${subject}&body=${mailtoBody}`;

    return NextResponse.json({ success: true, method: 'mailto', mailtoLink });
  } catch (error) {
    console.error('Quote request error:', error);
    return NextResponse.json({ error: 'Failed to process quote request' }, { status: 500 });
  }
}
