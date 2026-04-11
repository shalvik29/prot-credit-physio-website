import Button from '@/components/ui/Button'
import Image from 'next/image'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About | Physiotherapist Port Credit, Mississauga',
    description:
      'Meet the expert physio team at Port Credit Physio And Rehab. Experienced physiotherapists serving Port Credit, Lakeshore Rd East, and all of Mississauga.',
    alternates: { canonical: 'https://www.portcreditphysio.ca/about' },
    openGraph: {
      title: 'About | Physiotherapist Port Credit, Mississauga',
      description:
        'Meet the expert physio team at Port Credit Physio And Rehab. Experienced physiotherapists serving Port Credit, Lakeshore Rd East, and all of Mississauga.',
      url: 'https://www.portcreditphysio.ca/about',
    },
  }
}

export default function About() {
    return (
        <div className="bg-white-shade min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Port Credit Physio & Rehab</h1>
                    <p className="text-xl text-gray-300">
                        Your trusted partner in health and recovery
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To be the heartbeat of health in Port Credit, where personalized care meets active recovery. We envision a community where every neighbor has the strength to move freely, the knowledge to stay pain-free, and the independence to enjoy life by the lake.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-6xl mx-auto text-center">
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

            {/* Meet Our Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        Our team consists of registered physiotherapists, and registered massage therapists who are passionate about what they do. We stay up-to-date with the latest research and techniques to provide you with the best possible care.
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
