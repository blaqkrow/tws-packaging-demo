import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, product, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const subject = `Contact Enquiry — ${name}${company ? ` (${company})` : ''}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e3a5f; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">✉️ New Contact Enquiry</h2>
          <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">from megapac.sg website</p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 160px; vertical-align: top;">Name</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827;">${name}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; vertical-align: top;">Company</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; vertical-align: top;">Phone</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; vertical-align: top;">Email</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            ${product ? `<tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; vertical-align: top;">Product of Interest</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827;">${product}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; color: #111827; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border-radius: 6px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 13px; color: #1e40af;">
              💡 <strong>Quick reply:</strong> You can reply directly to this email to reach the customer at <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 11px; margin-top: 20px; text-align: center;">
            This enquiry was submitted via the contact form on megapac.sg
          </p>
        </div>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const fromEmail = process.env.RESEND_FROM_EMAIL || 'Megapac Website <noreply@megapac.sg>';
      const toEmail = process.env.RESEND_TO_EMAIL || 'sales@megapac.sg';

      const { error: resendError } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject,
        html: htmlContent,
      });

      if (resendError) {
        console.error('Resend error:', JSON.stringify(resendError, null, 2));
        return NextResponse.json({
          error: `Email failed: ${resendError.message || 'Unknown error'}`,
          details: resendError,
        }, { status: 500 });
      }

      return NextResponse.json({ success: true, method: 'resend' });
    }

    console.error('RESEND_API_KEY is not set — cannot send contact email');
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  } catch (error) {
    console.error('Contact request error:', error);
    return NextResponse.json({ error: 'Failed to process contact request' }, { status: 500 });
  }
}
