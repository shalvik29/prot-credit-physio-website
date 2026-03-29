import Button from "@/components/ui/Button"

export default function Team() {
    const teamMembers = [
        {
            name: 'Simoni',
            role: 'Registered Physiotherapist',
            credentials: 'PT',
            tagline: 'The Heart of Your Recovery',
            bio: `Simoni's approach to physiotherapy is rooted in a single, powerful belief: Don't wait for pain to become your 'new normal.'

Since launching her private practice in 2021, Simoni has dedicated herself to helping patients reclaim their lives through a blend of skilled manual therapy and active, movement-based rehabilitation. She believes recovery is a partnership—your effort + her expertise = transformation.`,
            education: 'Bachelor of Physiotherapy, CHARUSAT University (India)',
            specializations: [
                'The Spine & Joints: Trained in the McKenzie Method® (Part A) for specialized back pain, herniated discs, sciatica, and chronic back pain. And Part B for neck and thoracic spine.',
                'Certified in advanced soft tissue level I',
                'Shoulder Mastery: Specialist training in shoulder sensitivity and Adhesive Capsulitis (Frozen Shoulder)—one of her signature areas.',
                'Advanced Modalities: Certified in Acupuncture (Basic & Upper Limb), Shockwave Therapy, and Kinesio Taping (FMT).',
                'Return-to-Work & Surgical Recovery: As a Certified Functional Capacity Evaluator (FCE), she\'s an expert at helping WSIB clients navigate the path back to employment. She has special interest in Total Knee and Hip Replacement rehab, guiding patients through both pre- and post-operative phases.',
            ],
            whyPatients: `Simoni doesn't just treat symptoms; she builds independence. Her goal is to work manually and actively alongside you to reach your optimum health. Whether you're recovering from surgery or a workplace injury, Simoni's mission is to see you walk out of our doors with a stronger body and a much brighter smile.`,
            philosophy: 'Move today so you can flourish tomorrow.',
            specialties: [
                'Frozen Shoulder & Adhesive Capsulitis',
                'Chronic Back Pain & Sciatica',
                'Vestibular Rehabilitation & Dizziness',
                'Post-Op Joint Recovery (Knee, Hip, Shoulder)',
                'WSIB & Workplace Injury Rehab',
                'Kinesio Taping',
            ],
        },
    ]

    return (
        <div className="bg-white-shade min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-300">
                        Experienced professionals dedicated to your health and wellness
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                            {/* Header */}
                            <div className="bg-navy-dark text-white p-8 flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-steel-blue flex items-center justify-center flex-shrink-0">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{member.name}</h2>
                                    <p className="text-steel-blue font-semibold">{member.role} — {member.credentials}</p>
                                    <p className="text-gray-300 italic mt-1">&ldquo;{member.tagline}&rdquo;</p>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col gap-8">
                                {/* Bio */}
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{member.bio}</p>

                                {/* Education */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-dark mb-2">Education</h3>
                                    <p className="text-gray-600">{member.education}</p>
                                </div>

                                {/* Specializations */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-dark mb-3">Advanced Clinical Specializations</h3>
                                    <ul className="flex flex-col gap-3">
                                        {member.specializations.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-gray-600">
                                                <div className="w-2 h-2 bg-steel-blue rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Patients Love Her */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-dark mb-2">Why Patients Love Her</h3>
                                    <p className="text-gray-600 leading-relaxed">{member.whyPatients}</p>
                                </div>

                                {/* Philosophy */}
                                <div className="bg-white-shade rounded-lg p-5 border-l-4 border-steel-blue">
                                    <p className="text-navy-dark font-semibold italic">Philosophy: &ldquo;{member.philosophy}&rdquo;</p>
                                </div>

                                {/* Specialties */}
                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="text-lg font-bold text-navy-dark mb-4">Specialties</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {member.specialties.map((specialty, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 bg-white-shade border border-steel-blue/20 rounded-lg px-4 py-3"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-steel-blue flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-medium text-navy-dark">{specialty}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-steel-blue text-white text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Our Team?</h2>
                    <p className="text-xl mb-10 text-gray-100">
                        Book an appointment today and experience personalized care from our expert professionals.
                    </p>
                    <Button
                        href="https://portcreditphysioandrehab.janeapp.com"
                        variant="primary"
                        target="_blank"
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
