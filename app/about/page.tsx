import Button from '@/components/ui/Button'

export default function About() {
    return (
        <div style={{ backgroundColor: '#F4F8F8' }} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-navy-dark mb-8 text-center">About Port Credit Physio</h1>

                <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
                    <p>
                        At Port Credit Physio, our mission is to empower you to live a pain-free, active life. We are a multidisciplinary team of dedicated healthcare professionals committed to providing evidence-based, personalized care.
                    </p>
                    <p>
                        Located in the heart of Port Credit, Mississauga, our clinic offers a welcoming and supportive environment where your recovery is our top priority. Whether you are dealing with a sports injury, chronic pain, or post-surgical rehabilitation, we have the expertise to help you achieve your goals.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-medium mt-8 mb-4">Our Philosophy</h2>
                    <p>
                        We believe in treating the whole person, not just the symptoms. Our approach combines manual therapy, exercise prescription, and education to ensure long-term results. We work collaboratively with you to develop a treatment plan that fits your lifestyle and needs.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-medium mt-8 mb-4">Meet Our Team</h2>
                    <p>
                        Our team consists of registered physiotherapists, massage therapists, chiropractors, and acupuncturists who are passionate about what they do. We stay up-to-date with the latest research and techniques to provide you with the best possible care.
                    </p>
                    {/* Placeholder for team photos/bios could go here */}
                </div>

                <div className="mt-12 text-center">
                    <Button href="/contact" variant="primary">
                        Contact Us Today
                    </Button>
                </div>
            </div>
        </div>
    )
}
