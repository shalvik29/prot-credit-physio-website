import GoogleMap from '@/components/GoogleMap'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <div style={{ backgroundColor: '#F4F8F8' }} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-navy-dark mb-8 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-navy-medium mb-6">Get in Touch</h2>
                            <div className="space-y-6 text-gray-600">
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Address</h3>
                                    <p>123 Example Street</p>
                                    <p>Port Credit, Mississauga, ON L5G 123</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Phone</h3>
                                    <p>(555) 123-4567</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Email</h3>
                                    <p>info@portcreditphysio.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Hours</h3>
                                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-80 rounded-lg overflow-hidden">
                            <GoogleMap 
                                address="123 Example Street, Port Credit, Mississauga, ON L5G 123"
                                className="h-full"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-lg p-8 shadow-sm" style={{ backgroundColor: '#F4F8F8' }}>
                        <h2 className="text-2xl font-bold text-navy-medium mb-6">Send Us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
