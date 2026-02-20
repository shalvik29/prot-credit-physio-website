import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/ui/Button'

export default function Services() {
    const services = [
        { 
            title: 'Physiotherapy', 
            description: 'Comprehensive assessment and treatment for musculoskeletal injuries, post-operative rehab, and chronic pain management.',
            imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80'
        },
        { 
            title: 'Massage Therapy', 
            description: 'Therapeutic massage to relieve muscle tension, improve circulation, and promote relaxation.',
            imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&q=80'
        },
        { 
            title: 'Chiropractic Care', 
            description: 'Manual adjustments and therapies to treat spine, joint, and nervous system disorders.',
            imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80'
        },
        { 
            title: 'Acupuncture', 
            description: 'Traditional Chinese Medicine technique to alleviate pain, reduce inflammation, and restore balance.',
            imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&q=80'
        },
        { 
            title: 'Pelvic Floor Physiotherapy', 
            description: 'Specialized treatment for pelvic health issues including incontinence, prolapse, and pelvic pain.',
            imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80'
        },
        { 
            title: 'Sports Rehabilitation', 
            description: 'Targeted rehabilitation programs for athletes to return to sport safely and prevent future injuries.',
            imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&q=80'
        },
    ]

    return (
        <div className="bg-white-shade min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Our Services</h1>
                    <p className="text-navy-medium max-w-2xl mx-auto text-lg">
                        We provide a comprehensive range of therapies to support your health and well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            href="#"
                            className="h-full"
                        />
                    ))}
                </div>

                <div className="mt-16 text-center p-8 rounded-lg shadow-sm bg-white-shade">
                    <h2 className="text-2xl font-bold text-navy-dark mb-4">Unsure which service is right for you?</h2>
                    <p className="text-gray-600 mb-8">
                        Contact us for a consultation and we&apos;ll help you determine the best treatment plan for your needs.
                    </p>
                    <Button href="/contact" variant="secondary">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </div>
    )
}
