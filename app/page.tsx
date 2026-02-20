import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    { 
      title: 'Physiotherapy', 
      description: 'Restore movement and function when you are affected by injury, illness or disability.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80'
    },
    { 
      title: 'Massage Therapy', 
      description: 'Relieve pain, reduce stress, and improve physical function.',
      imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&q=80'
    },
    { 
      title: 'Chiropractic', 
      description: 'Diagnosis and treatment of mechanical disorders of the musculoskeletal system.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80'
    },
    { 
      title: 'Acupuncture', 
      description: 'Stimulate specific points on the body to relieve pain and improve health.',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&q=80'
    },
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
            <Button href="#" variant="secondary" className="text-lg px-8 py-4" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
              Book Appointment
            </Button>
            <Button href="/services" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-dark ring-white focus:ring-white">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F4F8F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-dark mb-4">Our Services</h2>
            <p className="text-navy-medium max-w-2xl mx-auto text-lg">
              We offer a wide range of treatments to help you recover and maintain optimal health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description}
                imageUrl={service.imageUrl}
              />
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

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white-shade">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-dark mb-4">Conditions We Treat</h2>
            <p className="text-navy-medium max-w-2xl mx-auto text-lg">
              Our experienced team specializes in treating a wide range of common physiotherapy conditions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Chronic Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
              { name: 'Back Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
              { name: 'Shoulder Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg> },
              { name: 'Neck Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { name: 'Knee Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { name: 'Ankle Pain', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> },
              { name: 'Sports Injuries', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { name: 'Arthritis', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { name: 'Sprains & Strains', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
              { name: 'Post-Surgery Recovery', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
              { name: 'Mobility Issues', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
              { name: 'Work Injuries', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
            ].map((condition, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-steel-blue cursor-pointer group"
              >
                <div className="text-steel-blue mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {condition.icon}
                </div>
                <p className="text-navy-dark font-semibold group-hover:text-steel-blue transition-colors">{condition.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Numbered Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-steel-blue opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-medium opacity-5 rounded-full -ml-48 -mb-48"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-dark mb-4">What We Offer</h2>
            <p className="text-navy-medium max-w-2xl mx-auto text-lg">
              Exceptional physiotherapy care for your wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-steel-blue">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium text-white rounded-2xl text-3xl font-bold mb-6 shadow-lg">
                01
              </div>
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Post-Surgery Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive rehabilitation programs designed to help you recover safely and effectively after surgical procedures, restoring strength and mobility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-steel-blue">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium text-white rounded-2xl text-3xl font-bold mb-6 shadow-lg">
                02
              </div>
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Chronic Pain Relief</h3>
              <p className="text-gray-600 leading-relaxed">
                Evidence-based treatments targeting the root cause of chronic pain, helping you manage discomfort and improve your quality of life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-steel-blue">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-steel-blue to-navy-medium text-white rounded-2xl text-3xl font-bold mb-6 shadow-lg">
                03
              </div>
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Mobility Restoration</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized exercise programs and manual therapy techniques to restore your range of motion and help you move with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white-shade">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-dark mb-4">Our Treatment Approach</h2>
            <p className="text-navy-medium max-w-2xl mx-auto text-lg">
              We use a range of evidence-based techniques tailored to your individual needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            <div className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            <div className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            <div className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Direct Billing Available</h3>
              <p className="text-gray-200 leading-relaxed">Submit your claims directly to your insurance provider for faster processing and hassle-free experience.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
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

      {/* Intro/About Section Snippet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
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
          <div className="relative rounded-lg h-80 w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80"
              alt="Modern physiotherapy clinic interior with treatment tables and equipment"
              className="w-full h-full object-cover"
            />
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
          <Button href="#" variant="primary" className="!font-bold text-lg px-10 py-4 shadow-lg" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
            Book Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}
