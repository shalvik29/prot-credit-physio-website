import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Team() {
    const teamMembers = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Lead Physiotherapist',
            credentials: 'PT, DPT, OCS',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&q=80',
            bio: 'With over 15 years of experience, Dr. Johnson specializes in sports rehabilitation and orthopedic physiotherapy.',
            specialties: ['Sports Injuries', 'Post-Surgical Rehab', 'Manual Therapy']
        },
        {
            name: 'Michael Chen',
            role: 'Registered Massage Therapist',
            credentials: 'RMT',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&q=80',
            bio: 'Michael brings a holistic approach to massage therapy, combining traditional techniques with modern practices.',
            specialties: ['Deep Tissue', 'Sports Massage', 'Trigger Point Therapy']
        },
        {
            name: 'Dr. Emily Rodriguez',
            role: 'Chiropractor',
            credentials: 'DC',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&q=80',
            bio: 'Dr. Rodriguez focuses on spinal health and wellness, helping patients achieve optimal function and pain relief.',
            specialties: ['Spinal Adjustments', 'Posture Correction', 'Headache Treatment']
        },
        {
            name: 'James Wilson',
            role: 'Physiotherapist',
            credentials: 'PT, MSc',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
            bio: 'James specializes in chronic pain management and vestibular rehabilitation with a patient-centered approach.',
            specialties: ['Chronic Pain', 'Vestibular Rehab', 'Geriatric Care']
        },
        {
            name: 'Dr. Lisa Patel',
            role: 'Acupuncturist',
            credentials: 'R.Ac, TCM',
            image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=400&fit=crop&q=80',
            bio: 'Dr. Patel integrates traditional Chinese medicine with modern healthcare to provide comprehensive treatment.',
            specialties: ['Pain Management', 'Stress Relief', 'Traditional Chinese Medicine']
        },
        {
            name: 'Amanda Foster',
            role: 'Pelvic Floor Physiotherapist',
            credentials: 'PT, DPT',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
            bio: 'Amanda provides specialized care for pelvic health issues with compassion and expertise.',
            specialties: ['Pelvic Floor Dysfunction', 'Pre/Post-natal Care', 'Incontinence']
        }
    ]

    return (
        <div className="bg-white-shade min-h-screen pt-32">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-300">
                        Experienced professionals dedicated to your health and wellness
                    </p>
                </div>
            </section>

            {/* Team Introduction */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Our Expert Team</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our multidisciplinary team consists of highly trained and experienced healthcare professionals who are passionate about helping you achieve your health goals. Each team member brings unique expertise and a commitment to providing personalized, evidence-based care.
                    </p>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-80">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-navy-dark mb-1">{member.name}</h3>
                                    <p className="text-steel-blue font-semibold mb-1">{member.role}</p>
                                    <p className="text-sm text-gray-500 mb-4">{member.credentials}</p>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                                    
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="text-sm font-semibold text-navy-dark mb-2">Specialties:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialties.map((specialty, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="text-xs bg-steel-blue/10 text-steel-blue px-3 py-1 rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">Why Choose Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-steel-blue rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-3">Highly Qualified</h3>
                            <p className="text-gray-600">All team members are registered professionals with advanced certifications and ongoing education.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-steel-blue rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-3">Collaborative Care</h3>
                            <p className="text-gray-600">Our team works together to provide comprehensive, integrated treatment plans.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-steel-blue rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-3">Patient-Centered</h3>
                            <p className="text-gray-600">We prioritize your comfort, goals, and individual needs in every treatment session.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-steel-blue text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Our Team?</h2>
                    <p className="text-xl mb-10 text-gray-100">
                        Book an appointment today and experience personalized care from our expert professionals.
                    </p>
                    <Button 
                        href="/contact" 
                        variant="primary" 
                        className="text-lg px-10 py-4" 
                        style={{ backgroundColor: '#14B8A6', color: 'white' }}
                    >
                        Book Appointment
                    </Button>
                </div>
            </section>
        </div>
    )
}
