import Button from '@/components/ui/Button'

export default function Contact() {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-navy-dark mb-8 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
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

                    {/* Map Placeholder or Form */}
                    <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center text-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-navy-medium mb-4">Book Online</h2>
                            <p className="text-gray-600 mb-6">
                                The easiest way to schedule an appointment is through our online booking system.
                            </p>
                            <Button href="#" variant="primary" className="w-full sm:w-auto">
                                Book Appointment
                            </Button>
                        </div>

                        <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center mt-6">
                            <span className="text-gray-500">Map Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
