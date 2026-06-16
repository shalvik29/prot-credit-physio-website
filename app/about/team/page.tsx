import type { Metadata } from 'next'
import Button from "@/components/ui/Button"
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Meet Our Team | Physiotherapist & RMT Port Credit, Mississauga',
        description:
            'Meet our expert team of physiotherapists and registered massage therapists at Port Credit Physio And Rehab serving Port Credit, Lakeshore Rd East, and all of Mississauga.',
        alternates: { canonical: 'https://www.portcreditphysio.ca/about/team' },
        openGraph: {
            title: 'Meet Our Team | Physiotherapist & RMT Port Credit, Mississauga',
            description:
                'Meet our expert team of physiotherapists and registered massage therapists at Port Credit Physio And Rehab serving Port Credit, Lakeshore Rd East, and all of Mississauga.',
            url: 'https://www.portcreditphysio.ca/about/team',
        },
    }
}

export default function Team() {
    const teamMembers = [
        {
            name: 'Simoni Bhagat',
            role: 'Registered Physiotherapist | Vestibular Therapist',
            credentials: 'PT',
            tagline: 'Restore, Rebuild, and Reclaim Your Movement',
            image: '/simoni-bhagat-physiotherapist.jpg',
            pronoun: 'her',
            bio: `Simoni is a dedicated physiotherapist who is passionate about helping individuals move better, feel stronger, and return to the activities they enjoy. She believes that successful rehabilitation follows three essential steps: Restore, Rebuild, and Reclaim.

Her treatment approach combines evidence-based physiotherapy, personalized exercise programs, and patient education to address the root cause of pain and dysfunction. As a trusted physiotherapist in Port Credit and Mississauga, Simoni works closely with each patient to develop a treatment plan that supports long-term recovery, independence, and confidence.`,
            education: 'Bachelor of Physiotherapy (BPT), Charotar University of Science and Technology (CHARUSAT), India',
            registration: 'Registered Physiotherapist, College of Physiotherapists of Ontario (CPO) — practicing in good standing since 2021',
            clinicalInterest: [
                'Vestibular Rehabilitation for dizziness, vertigo, and balance disorders',
                'Neck, mid-back, and low back pain',
                'Shoulder pain and adhesive capsulitis (frozen shoulder)',
                'Postural dysfunction and movement-related pain',
                'Functional rehabilitation and injury recovery',
                'Workplace and Functional Capacity Evaluations (FCEs)',
            ],
            treatmentTechniques: [
                'McKenzie Method® (MDT) – Lumbar, Cervical & Thoracic Spine',
                'Vestibular Rehabilitation Therapy',
                'Therapeutic Exercise & Movement Retraining',
                'Soft Tissue Release Techniques',
                'Kinesiology Taping',
                'Acupuncture & Dry Needling Approaches',
                'Patient Education & Self-Management Strategies',
            ],
            certifications: [
                'McKenzie Method® MDT – Part A (Lumbar Spine)',
                'McKenzie Method® MDT – Part B (Cervical & Thoracic Spine)',
                'Certified Vestibular Specialist',
                'Shoulder Sensitivity & Adhesive Capsulitis Certification (APTEI)',
                'FMT Kinesio Taping Certification',
                'Upper Extremity Acupuncture Certification (APTEI)',
                'Introductory Acupuncture Certification (APTEI)',
                'Soft Tissue Release Level 1',
                'WorkWell Functional Capacity Evaluation (FCE) Training',
            ],
            whyPatients: `Patients in Port Credit and Mississauga choose Simoni because she doesn't just treat symptoms — she builds independence. Her goal is to help you understand your condition, regain confidence in movement, and return to the activities that matter most to you. Whether you're recovering from a vestibular disorder, managing chronic back pain, or rehabilitating after surgery, Simoni's evidence-based approach and compassionate care ensure you receive the highest quality physiotherapy in Mississauga.`,
            philosophy: 'My goal is to help you understand your condition, regain confidence in movement, and return to the activities that matter most to you.',
            specialties: [
                'Vestibular Rehabilitation & Dizziness',
                'McKenzie Method® for Back & Neck Pain',
                'Frozen Shoulder & Adhesive Capsulitis',
                'Postural Dysfunction & Movement Retraining',
                'WSIB & Workplace Injury Rehab',
                'Functional Capacity Evaluations (FCE)',
                'Acupuncture & Dry Needling',
                'Kinesiology Taping',
            ],
        },
        {
            name: 'Rajesh Verma',
            role: 'Registered Massage Therapist',
            credentials: 'RMT',
            tagline: 'Helping You Feel and Move Your Best',
            image: '/rajesh-verma-rmt.jpg',
            pronoun: 'him',
            bio: `Rajesh Verma is a Registered Massage Therapist passionate about helping patients reduce pain, improve mobility, and achieve optimal wellness through personalized massage therapy treatments. At Port Credit Physio & Rehab, he provides massage therapy services in Mississauga, including deep tissue massage, relaxation massage, cupping therapy, headache relief treatment, sports recovery massage, and wellness-focused care.

His approach combines hands-on therapeutic techniques with individualized treatment plans designed to address the root cause of pain and muscle dysfunction. Whether you are recovering from an injury, managing chronic pain, dealing with stress-related tension, or looking to enhance athletic recovery, he is committed to helping you feel and move your best.`,
            education: 'Registered Massage Therapist',
            registration: 'Registered and in good standing with the College of Massage Therapists of Ontario (CMTO)',
            clinicalInterest: [
                'Deep Tissue Massage for chronic muscle tension',
                'Relaxation Massage for stress relief',
                'Cupping Therapy for pain and inflammation',
                'Head, Neck & Scalp Massage for headache relief',
                'Sports Recovery Massage for athletes',
                'Myofascial Release for restricted movement',
                'Stress Reduction & Wellness Care',
            ],
            treatmentTechniques: [
                'Deep Tissue Massage',
                'Swedish Relaxation Massage',
                'Cupping Therapy',
                'Myofascial Release',
                'Sports Massage',
                'Trigger Point Therapy',
                'Stretching & Range of Motion',
            ],
            certifications: [
                'Registered Massage Therapist (RMT) — CMTO',
                'Cupping Therapy Certified',
                'Sports Massage Certification',
            ],
            whyPatients: `Patients in Port Credit and Mississauga choose Rajesh because he takes the time to understand their unique needs and crafts personalized treatment plans that deliver real results. Whether you're an athlete looking to optimize recovery, someone dealing with chronic tension, or simply in need of deep relaxation, Rajesh's skilled hands and compassionate approach make every session effective and restorative.`,
            philosophy: 'I am committed to helping you feel and move your best through personalized, hands-on care.',
            specialties: [
                'Deep Tissue Massage',
                'Cupping Therapy',
                'Sports Recovery Massage',
                'Headache & Tension Relief',
                'Relaxation & Wellness Massage',
                'Myofascial Release',
                'Stress Reduction',
                'Injury Recovery Massage',
            ],
        },
    ]

    return (
        <div className="bg-white-shade min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Experienced professionals dedicated to your health and wellness
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                                {/* Header with photo and basic info */}
                                <div className="bg-navy-dark text-white p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full ring-4 ring-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden bg-navy-800">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={`${member.name} — ${member.role} in Port Credit, Mississauga`}
                                                width={160}
                                                height={160}
                                                className="object-cover w-full h-full"
                                                style={{ objectPosition: '50% 20%' }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-steel-blue">
                                                <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold">{member.name}</h2>
                                        <p className="text-teal-300 font-semibold text-base mt-1">{member.role} — {member.credentials}</p>
                                        <p className="text-gray-300 italic mt-2">&ldquo;{member.tagline}&rdquo;</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 lg:p-10">
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">{member.bio}</p>

                                    {/* Education & Registration */}
                                    <div className="mb-7">
                                        <h3 className="text-lg font-bold text-navy-dark mb-2">Education & Professional Registration</h3>
                                        <p className="text-gray-600">{member.education}</p>
                                        <p className="text-gray-600 mt-1">{member.registration}</p>
                                    </div>

                                    {/* Two column for lists */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                        {/* Clinical Interest */}
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-3">Areas of Clinical Interest</h3>
                                            <ul className="space-y-2.5">
                                                {member.clinicalInterest.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-gray-600">
                                                        <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2"></span>
                                                        <span className="text-sm leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Treatment Techniques */}
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-3">Treatment Techniques</h3>
                                            <ul className="space-y-2.5">
                                                {member.treatmentTechniques.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-gray-600">
                                                        <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2"></span>
                                                        <span className="text-sm leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-navy-dark mb-3">Professional Development & Certifications</h3>
                                        <ul className="space-y-2.5">
                                            {member.certifications.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-gray-600">
                                                    <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2"></span>
                                                    <span className="text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Why Patients Love */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-navy-dark mb-2">Why Patients Love {member.pronoun === 'her' ? 'Her' : 'Him'}</h3>
                                        <p className="text-gray-600 leading-relaxed">{member.whyPatients}</p>
                                    </div>

                                    {/* Philosophy */}
                                    <div className="bg-white-shade rounded-lg p-5 border-l-4 border-teal-500 mb-8">
                                        <p className="text-navy-dark font-semibold italic">&ldquo;{member.philosophy}&rdquo;</p>
                                    </div>

                                    {/* Specialties */}
                                    <div className="border-t border-gray-200 pt-6">
                                        <h3 className="text-lg font-bold text-navy-dark mb-4">Specialties</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {member.specialties.map((specialty, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center gap-2 bg-white-shade border border-teal-200 rounded-full px-4 py-2 text-sm font-medium text-navy-dark"
                                                >
                                                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
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

            {/* CTA Section */}
            <section className="bg-steel-blue text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Meet Our Team?</h2>
                    <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
                        Book an appointment today and experience personalized care from our expert professionals.
                    </p>
                    <Button
                        href="https://portcreditphysioandrehab.janeapp.com"
                        variant="primary"
                        target="_blank"
                        className="text-lg px-12 py-4 shadow-lg hover:shadow-xl transition-shadow"
                        style={{ backgroundColor: '#14B8A6', color: 'white' }}
                    >
                        Book Appointment
                    </Button>
                </div>
            </section>
        </div>
    )
}