import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});

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

        console.log('Contact form submission:', {
            name,
            email,
            phone,
            service,
            preferredDate,
            message
        });
        // Send email using Nodemailer
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: ["info@portcreditphysio.ca"],
            subject: `New Contact Form Submission: ${service}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr />
                <p>This email was sent from the Port Credit Physio website contact form.</p>
            `,
        });

        console.log('Contact form submission sent, messageId:', info.messageId);

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

