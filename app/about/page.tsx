import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-white-shade min-h-screen pt-32">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Port Credit Physio & Rehab</h1>
                    <p className="text-xl text-gray-300">
                        Your trusted partner in health and recovery
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To be the heartbeat of health in Port Credit, where personalized care meets active recovery. We envision a community where every neighbor has the strength to move freely, the knowledge to stay pain-free, and the independence to enjoy life by the lake.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To provide an all-encompassing rehab sanctuary in the heart of the Village. Through expert education, advanced manual therapy, and a partnership-based approach, we empower our patients to conquer pain, restore balance, and reclaim their physical freedom.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy-dark mb-4">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white-shade p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-navy-dark mb-4">Active Partnership</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We don&apos;t just treat you; we coach you. Your effort is the engine of your recovery. You&apos;re not a passive patient—you&apos;re an active partner in your own healing.
                            </p>
                        </div>

                        <div className="bg-white-shade p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-navy-dark mb-4">Clinical Excellence</h3>
                            <p className="text-gray-700 leading-relaxed">
                                From Graston Technique to Shockwave Therapy, from McKenzie Method to Acupuncture, we use the best tools science has to offer. Continuous learning keeps us at the cutting edge.
                            </p>
                        </div>

                        <div className="bg-white-shade p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-navy-dark mb-4">Total Independence</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our goal isn&apos;t just &apos;less pain&apos;—it&apos;s giving you the confidence to move without help. You&apos;ll leave our clinic with a &apos;User Manual&apos; for your body and the tools to stay pain-free.
                            </p>
                        </div>

                        <div className="bg-white-shade p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-navy-dark mb-4">Community First</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Whether in our clinic or through in-home assessments, we meet you where you are. Port Credit is our home, and we&apos;re committed to the health of our neighbors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Methods */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-navy-dark mb-4">Our Treatment Approach</h2>
                        <p className="text-navy-medium max-w-2xl mx-auto text-lg">
                            We use a range of evidence-based techniques tailored to your individual needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Manual Therapy</h3>
                                <p className="text-gray-600 leading-relaxed">Hands-on techniques to improve mobility, reduce pain, and restore function through skilled manipulation and mobilization.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Exercise Prescription</h3>
                                <p className="text-gray-600 leading-relaxed">Customized exercise programs for in-clinic or at-home rehabilitation, designed to strengthen and restore function.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Therapeutic Modalities</h3>
                                <p className="text-gray-600 leading-relaxed">Advanced treatments including ultrasound, electrical stimulation, and heat/cold therapy for optimal healing.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Education & Prevention</h3>
                                <p className="text-gray-600 leading-relaxed">Empowering you with knowledge to prevent future injuries and maintain optimal health for the long term.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Shockwave Therapy</h3>
                                <p className="text-gray-600 leading-relaxed">Advanced acoustic wave treatment for chronic pain conditions and tissue regeneration.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white-shade p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    ✓
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3">Kinesio Taping</h3>
                                <p className="text-gray-600 leading-relaxed">Therapeutic taping technique to support muscles and joints while allowing full range of motion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance & Direct Billing */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-medium to-navy-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-steel-blue opacity-10 rounded-full -ml-32 -mb-32"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Insurance & Direct Billing</h2>
                    <p className="text-xl mb-10 text-gray-200">
                        We offer direct billing to make your treatment as convenient as possible. We are registered with all major insurance companies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Direct Billing Available</h3>
                            <p className="text-gray-200 leading-relaxed">Submit your claims directly to your insurance provider for faster processing and hassle-free experience.</p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">All Insurance Accepted</h3>
                            <p className="text-gray-200 leading-relaxed">We work with all major insurance providers to ensure you get the coverage you deserve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        Our team consists of registered physiotherapists, massage therapists, chiropractors, and acupuncturists who are passionate about what they do. We stay up-to-date with the latest research and techniques to provide you with the best possible care.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Ready to Start Your Recovery?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Contact us today to schedule your appointment and experience the difference personalized care can make.
                    </p>
                    <Button href="/contact" variant="secondary" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
                        Contact Us Today
                    </Button>
                </div>
            </section>
        </div>
    )
}
