import GoogleMap from '@/components/GoogleMap'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <div className="bg-white-shade min-h-screen pt-32 py-12 px-4 sm:px-6 lg:px-8">
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
                                    <p>Suite 300 - 268 Lakeshore Rd East</p>
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
                                    <a href="mailto:info@portcreditphysio.com" className="text-steel-blue hover:underline">info@portcreditphysio.com</a>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-dark">Hours</h3>
                                    <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                                    <p>Saturday: 10:00 AM - 3:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="w-full h-80 rounded-lg overflow-hidden">
                            <GoogleMap
                                address="268 Lakeshore Rd East, Mississauga, ON L5G 1H1"
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
        </div>
    )
}
