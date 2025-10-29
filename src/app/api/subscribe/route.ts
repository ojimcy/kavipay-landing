import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service provider
    // Example integrations:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Mailchimp: https://mailchimp.com
    // - ConvertKit: https://convertkit.com

    // Example with Resend (uncomment when ready):
    /*
    const response = await fetch('https://api.resend.com/audiences/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        audience_id: process.env.RESEND_AUDIENCE_ID
      })
    });

    if (!response.ok) {
      throw new Error('Failed to add to email list');
    }
    */

    // For now, just log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Email Captured]:', email);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to waitlist',
    });
  } catch (error) {
    console.error('[Subscribe API Error]:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
