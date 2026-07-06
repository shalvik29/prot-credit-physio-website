import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FaqJsonLd } from '@/components/JsonLd'
import ReviewsSection from '@/components/ReviewsSection'
import BlogCard from '@/components/BlogCard'
import { getRecentBlogPosts } from '@/lib/blogData'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Physiotherapy Port Credit | Port Credit Physio And Rehab',
    description:
      'Top-rated physiotherapy and rehab clinic in Port Credit, Mississauga. Sports injuries, back pain, pelvic floor, MVA rehab & more. Call (289) 497-8334.',
    alternates: { canonical: 'https://www.portcreditphysio.ca' },
    openGraph: {
      title: 'Physiotherapy Port Credit | Port Credit Physio And Rehab',
      description:
        'Top-rated physiotherapy and rehab clinic in Port Credit, Mississauga. Sports injuries, back pain, pelvic floor, MVA rehab & more. Call (289) 497-8334.',
      url: 'https://www.portcreditphysio.ca',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: 'Port Credit Physio And Rehab — Physiotherapy Mississauga',
        },
      ],
    },
  }
}

export default function Home() {
  const conditions = [
    'Back & Spine Conditions',
    'Neck & Head Pain',
    'Shoulder & Upper Body Injuries',
    'Lower Body & Joint Injuries',
    'Post- Op Rehabilitation',
    'Sports Injuries',
    'Fibromyalgia and Chronic pain',
    'Chronic Pain & Health Conditions',
    'Balance & Vestibular Conditions',
    'Rehabilitation & Recovery'
  ]

  const services = [
    {
      id: 'physiotherapy',
      title: 'Physiotherapy',
      image: '/Physiotherapy.jpg'
    },
    {
      id: 'vestibular-rehabilitation',
      title: 'Vestibular Rehabilitation',
      image: '/vestibular.jpeg'
    },
    {
      id: 'sports-injury-rehabilitation',
      title: 'Sports Injury Rehabilitation',
      image: '/SportsInjury.jpeg'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex flex-col justify-end">
        <Image
          src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=1920&h=1080&fit=crop&q=80"
          alt="Physiotherapy clinic Port Credit Mississauga — Port Credit Physio And Rehab"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Bottom Section - Content, Button and Text */}
        <div className="relative z-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Heading and Subheading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Restore Balance, Rebuild<br />
                Strength &<br />
                Reclaim your life
              </h1>
              {/* <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                Stop managing pain and start reclaiming your independence at Port Credit&apos;s premier physiotherapy clinic.
              </p> */}
            </div>

            {/* Button and Tagline */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
              {/* Button on Left */}
              <Link
                href="https://portcreditphysioandrehab.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
                style={{ backgroundColor: '#FFFFFF', color: '#1a365d' }}
              >
                Book Your Appointment
              </Link>

              {/* Text on Right */}
              <div className="text-white text-xs md:text-sm text-left md:text-right leading-relaxed pt-5 md:pt-4">
                <p className="uppercase tracking-wider">Serving the communities of</p>
                <p className="uppercase tracking-wider">Port Credit, Mississauga, and Lakeshore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Clinic Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Precision Care, Meaningful Outcomes.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-8">
            Leading Physiotherapy Clinic in Port Credit & Mississauga
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg">
            <p className="font-semibold text-gray-700">
              Are you experiencing ongoing pain or limited mobility, or recovering from an injury or surgery?
            </p>
            <p>
              At Port Credit Physio & Rehab, we deliver personalized, evidence-based treatment plans to restore function, reduce pain, and optimize long-term outcomes. Our approach combines advanced manual therapy, structured exercise prescription, vestibular rehabilitation, shockwave therapy, and sports injury care to ensure measurable progress at every recovery stage.
            </p>
            <p>
              Physiotherapy is not just about symptom relief. It improves movement quality, rebuilds strength, and helps you return to work, sport, and daily life with confidence.
            </p>
            <p>
              As a trusted physiotherapy clinic in Port Credit, we provide focused, one-on-one care in a professional clinical setting, serving adults across Port Credit, Mississauga, Lakeview, and Lorne Park.
            </p>
            <p className="font-semibold text-navy-dark">
              Direct billing is available, and we are registered with all major insurance providers, including WSIB.
            </p>
          </div>
        </div>
      </section>

      {/* Recover Faster Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white-shade">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-8">
                Restore Movement, Reclaim Your Life.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Port Credit Physio & Rehab provides personalized care for individuals seeking effective treatment, rehabilitation, and long-term pain relief. Our clinic helps patients recover from injury, manage chronic conditions, and return to daily activities with strength and confidence through customized rehabilitation programs tailored to each patient&apos;s goals and lifestyle.
              </p>

              {/* Conditions List */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-steel-blue rounded-full"></div>
                    <p className="text-gray-700 font-medium">{condition}</p>
                  </div>
                ))}
              </div>

              <Button
                href="/about"
                variant="secondary"
                style={{ backgroundColor: '#14B8A6', color: 'white' }}
              >
                About Us
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop&q=80"
                alt="Physiotherapy treatment session Port Credit Mississauga"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Helping You Move Better, Faster
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-8">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Port Credit Physio & Rehab, we provide personalized, evidence-based care to help you recover from pain, injury, and mobility challenges. Our goal is to restore movement, reduce discomfort, and help you return to the activities you enjoy with confidence.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
              Serving Port Credit, Mississauga, Lakeview, and Lorne Park, We offer specialized rehabilitation for sports injuries, dizziness and balance issues, post-surgical recovery, and workplace injuries, with direct billing available for most insurance providers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={`${service.title} physiotherapy service Port Credit Mississauga`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-navy-dark mb-4">{service.title}</h3>
                  <span className="inline-flex items-center text-steel-blue font-semibold group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              href="/services"
              variant="secondary"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              Load more
            </Button>
          </div>
        </div>
      </section>

      {/* Achieve Optimal Results Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white-shade">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/happyCustomer.jpeg"
                alt="Happy patient after physiotherapy treatment Port Credit Physio And Rehab Mississauga"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-8">
                Achieve Optimal Results Today
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  At Port Credit Physiotherapy, our experienced practitioners use a range of techniques to address your individual needs. Treatments may include Shockwave Therapy, Kinesio Taping, Massage Therapy, and Personalized exercise programs, which can be done in-clinic or at home. These methods are often combined with other evidence-based physiotherapy approaches to deliver the best possible outcomes.
                </p>
                <p>
                  Port Credit physiotherapist will collaborate with you to develop a tailored treatment plan focused on resolving your concerns and helping you safely return to your daily activities as quickly as possible.
                </p>
              </div>
              <Button
                href="/contact"
                variant="secondary"
                style={{ backgroundColor: '#14B8A6', color: 'white' }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient Care Options Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">Convenient Care Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Direct Billing */}
            <div className="bg-white-shade rounded-xl p-8 flex gap-5">
              <div className="text-4xl flex-shrink-0">💳</div>
              <div>
                <h3 className="text-xl font-bold text-navy-dark mb-2">Direct Billing</h3>
                <p className="text-gray-600 leading-relaxed">We take the paperwork off your plate! Enjoy hassle-free recovery with direct billing to all major insurance providers.</p>
              </div>
            </div>

            {/* Free 15-Minute Recovery Call */}
            <div className="bg-white-shade rounded-xl p-8 flex gap-5">
              <div className="text-4xl flex-shrink-0">📞</div>
              <div>
                <h3 className="text-xl font-bold text-navy-dark mb-2">Free 15-Minute Recovery Call</h3>
                <p className="text-gray-600 leading-relaxed">Not sure if physiotherapy is right for you? Book a no-obligation consultation to discuss your injury and discover how we can help you regain your independence.</p>
              </div>
            </div>

            {/* Flexible Access */}
            <div className="bg-white-shade rounded-xl p-8 flex gap-5">
              <div className="text-4xl flex-shrink-0">🏥</div>
              <div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">Flexible Access</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Choose the care that fits your lifestyle! We offer:</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏥</span>
                    <span className="text-gray-700">In-Clinic — in the heart of Port Credit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-gray-700">In-Home visits for post-op patients only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💻</span>
                    <span className="text-gray-700">Virtual Consultations for your convenience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multidisciplinary Excellence */}
            <div className="bg-white-shade rounded-xl p-8 flex gap-5">
              <div className="text-4xl flex-shrink-0">🏢</div>
              <div>
                <h3 className="text-xl font-bold text-navy-dark mb-2">Experienced & Licensed Physiotherapists in Port Credit</h3>
                <p className="text-gray-600 leading-relaxed">Our team of registered physiotherapists provides evidence-based treatment with a strong focus on quality care and results. Proudly serving patients in Port Credit, Mississauga, Lakeview, Mineola, and surrounding areas, we are committed to helping you recover faster and move better.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <ReviewsSection />

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Expert Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert advice on running injuries, recovery strategies, and physiotherapy tips
              from our team serving Port Credit and Mississauga.
            </p>
          </div>

          <div className={`grid gap-8 mb-12 ${
            getRecentBlogPosts(3).length === 1
              ? 'grid-cols-1 max-w-md mx-auto'
              : getRecentBlogPosts(3).length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {getRecentBlogPosts(3).map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>

          <div className="text-center">
            <Button
              href="/blog"
              variant="secondary"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-blue py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have questions? Get in touch!</h2>
          <p className="text-xl mb-10 text-gray-100">
            Contact us today and take the first step towards better health.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="!font-bold text-lg px-10 py-4 shadow-lg"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <FaqJsonLd faqs={[
        { question: 'What happens during my first visit?', answer: 'Your initial 60-minute appointment includes an in-depth discussion of your medical history and symptoms, followed by a physical exam to evaluate mobility, strength, and function. We provide both assessment and initial treatment during this time.' },
        { question: 'How long are follow-up appointments?', answer: 'Follow-up sessions are personalized one-on-one with your therapist. We recommend 30 minutes for a single injury area, or 45-60 minutes for multiple areas or complex rehabilitation.' },
        { question: "What's your cancellation policy?", answer: 'We require 24 hours notice for cancellations or rescheduling. Less than 24 hours notice incurs a $50 fee. Less than 12 hours or no-show results in the full session fee being charged.' },
        { question: "Do I need a doctor's referral?", answer: 'No. In Ontario, physiotherapists are primary healthcare providers. You can book an assessment and start treatment immediately — no doctor referral needed.' },
        { question: 'What should I wear?', answer: 'For physiotherapy, wear comfortable loose-fitting clothing. Bring shorts for hip/knee/ankle issues or a tank top for shoulder/neck. For massage therapy, gowns and professional draping are provided.' },
        { question: 'Is there parking?', answer: 'Free parking is available at Lot 7 (5 Cayuga Ave) or Lot 12 (5 Hiawatha Pkwy), both a 1-3 minute walk. Street parking is also available directly in front — we reimburse street parking at the front desk.' },
        { question: 'Is treatment covered by insurance?', answer: 'Yes. All services are provided by registered professionals and covered under most extended health plans. We offer direct billing with major providers and handle MVA and WSIB claims directly.' },
        { question: 'What payment methods do you accept?', answer: 'We accept Debit, Visa, and Mastercard. You will receive an itemized receipt via email immediately after your session.' },
        { question: 'How do I find the clinic?', answer: 'We are located at Suite 300 - 268 Lakeshore Rd East, Mississauga, ON L5G 1H1 in the heart of Port Credit. At the entrance buzzer, enter 30 and press the ring button.' },
        { question: 'Do you accept OHIP or ODSP?', answer: 'No. We offer services through private pay or extended health insurance coverage only.' },
      ]} />
    </div>
  )
}
