import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    { title: 'Physiotherapy', description: 'Restore movement and function when you are affected by injury, illness or disability.' },
    { title: 'Massage Therapy', description: 'Relieve pain, reduce stress, and improve physical function.' },
    { title: 'Chiropractic', description: 'Diagnosis and treatment of mechanical disorders of the musculoskeletal system.' },
    { title: 'Acupuncture', description: 'Stimulate specific points on the body to relieve pain and improve health.' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Move Better. Feel Better. Live Better.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
            Comprehensive physiotherapy and rehabilitation services tailored to your unique needs in Port Credit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#" variant="secondary" className="text-lg px-8 py-4">
              Book Appointment
            </Button>
            <Button href="/services" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-dark ring-white focus:ring-white">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-dark mb-4">Our Services</h2>
            <p className="text-navy-medium max-w-2xl mx-auto text-lg">
              We offer a wide range of treatments to help you recover and maintain optimal health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-steel-blue font-semibold hover:text-navy-dark transition-colors inline-flex items-center text-lg">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro/About Section Snippet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Why Choose Port Credit Physio?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Port Credit Physio, we believe in a patient-centered approach. Our team of experienced therapists works together to create personalized treatment plans that address the root cause of your outcome.
              </p>
              <p>
                Whether you are recovering from surgery, managing chronic pain, or looking to improve your athletic performance, we are here to support your journey to recovery.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-80 w-full flex items-center justify-center text-gray-400">
            {/* Placeholder for an image */}
            <span>Clinic Interior Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-blue py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your recovery?</h2>
          <p className="text-xl mb-10 text-gray-100">
            Book your appointment online today and take the first step towards better health.
          </p>
          <Button href="#" variant="primary" className="bg-white text-steel-blue hover:bg-gray-100 hover:text-navy-dark font-bold text-lg px-10 py-4 shadow-lg">
            Book Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}
