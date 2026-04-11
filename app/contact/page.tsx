import GoogleMap from '@/components/GoogleMap'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import { FaqJsonLd } from '@/components/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book Physio Appointment | Port Credit Physio',
    description:
      'Book your physiotherapy appointment at Port Credit Physio And Rehab. Located at 268 Lakeshore Rd East, Mississauga. Call (289) 497-8334.',
    alternates: { canonical: 'https://www.portcreditphysio.ca/contact' },
    openGraph: {
      title: 'Book Physio Appointment | Port Credit Physio',
      description:
        'Book your physiotherapy appointment at Port Credit Physio And Rehab. Located at 268 Lakeshore Rd East, Mississauga. Call (289) 497-8334.',
      url: 'https://www.portcreditphysio.ca/contact',
    },
  }
}

export default function Contact() {
    return (
        <div className="bg-white-shade min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-navy-dark mb-8 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact info */}
                        <div>
                            <h2 className="text-2xl font-bold text-navy-medium mb-6">Get in Touch</h2>
                            <div className="space-y-6 text-gray-600">
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Address</h3>
                                    <p>300 - 268 Lakeshore Rd East</p>
                                    <p>Mississauga, ON L5G 1H1</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Phone</h3>
                                    <a href="tel:+12894978334" className="text-steel-blue hover:underline">(289) 497-8334</a>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Fax</h3>
                                    <p>(289) 536-3004</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Email</h3>
                                    <a href="mailto:info@portcreditphysio.ca" className="text-steel-blue hover:underline">info@portcreditphysio.ca</a>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Hours</h3>
                                    <p>Monday - Thursday: 10:00 AM - 8:00 PM</p>
                                    <p>Friday - Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="w-full h-80 rounded-lg overflow-hidden">
                            <GoogleMap
                                address="300-268 Lakeshore Rd East, Mississauga, ON L5G 1H1"
                                className="h-full"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-lg p-8 shadow-sm bg-white-shade">
                        <h2 className="text-2xl font-bold text-navy-medium mb-6">Send Us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <FaqJsonLd faqs={[
              { question: 'What happens during my first visit?', answer: 'Your initial 60-minute appointment includes an in-depth discussion of your medical history and symptoms, followed by a physical exam to evaluate mobility, strength, and function. We provide both assessment and initial treatment during this time.' },
              { question: 'How long are follow-up appointments?', answer: 'Follow-up sessions are personalized one-on-one with your therapist. We recommend 30 minutes for a single injury area, or 45-60 minutes for multiple areas or complex rehabilitation.' },
              { question: "What's your cancellation policy?", answer: 'We require 24 hours notice for cancellations or rescheduling. Less than 24 hours notice incurs a $50 fee. Less than 12 hours or no-show results in the full session fee being charged.' },
              { question: "Do I need a doctor's referral?", answer: 'No. In Ontario, physiotherapists are primary healthcare providers. You can book an assessment and start treatment immediately — no doctor referral needed.' },
              { question: 'Is treatment covered by insurance?', answer: 'Yes. All services are provided by registered professionals and covered under most extended health plans. We offer direct billing with major providers and handle MVA and WSIB claims directly.' },
              { question: 'What payment methods do you accept?', answer: 'We accept Debit, Visa, and Mastercard. You will receive an itemized receipt via email immediately after your session.' },
              { question: 'How do I find the clinic?', answer: 'We are located at Suite 300 - 268 Lakeshore Rd East, Mississauga, ON L5G 1H1. At the entrance buzzer, enter 30 and press the ring button.' },
            ]} />
        </div>
    )
}
