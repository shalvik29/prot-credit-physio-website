import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, preferredDate, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // TODO: Implement your email sending logic here
        // Options:
        // 1. Send email using a service like SendGrid, Resend, or Nodemailer
        // 2. Save to database
        // 3. Send to a CRM system
        // 4. Use a form service like Formspree

        console.log('Contact form submission:', {
            name,
            email,
            phone,
            service,
            preferredDate,
            message,
            timestamp: new Date().toISOString(),
        });

        // For now, we'll just log it and return success
        // In production, you'd send an actual email here

        return NextResponse.json(
            { 
                success: true,
                message: 'Form submitted successfully' 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
