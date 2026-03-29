import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { servicesData } from '@/lib/servicesData'

export default function Services() {
    return (
        <div className="bg-white-shade min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-wider mb-4">Helping You Move Better, Faster</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg text-gray-300 mb-4">
                        At Port Credit Physio & Rehab, we provide personalized, evidence-based care to help you recover from pain, injury, and mobility challenges. Our goal is to restore movement, reduce discomfort, and help you return to the activities you enjoy with confidence.
                    </p>
                    <p className="text-lg text-gray-300">
                        Serving Port Credit, Mississauga, Lakeview, and Lorne Park, We offer specialized rehabilitation for sports injuries, dizziness and balance issues, post-surgical recovery, and workplace injuries, with direct billing available for most insurance providers.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <Link
                                key={index}
                                href={`/services/${service.id}`}
                                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-navy-dark mb-4">{service.title}</h3>
                                    <span className="inline-flex items-center text-steel-blue font-semibold group-hover:gap-2 transition-all">
                                        Learn More
                                        <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto text-center p-8 rounded-lg shadow-sm bg-white-shade">
                    <h2 className="text-2xl font-bold text-navy-dark mb-4">Unsure which service is right for you?</h2>
                    <p className="text-gray-600 mb-8">
                        Contact us for a consultation and we&apos;ll help you determine the best treatment plan for your needs.
                    </p>
                    <Button href="/contact" variant="secondary" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
                        Get in Touch
                    </Button>
                </div>
            </section>
        </div>
    )
}
