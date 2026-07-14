import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { getServiceById, getAllServiceIds } from '@/lib/servicesData'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const metadataMap: Record<string, { title: string; description: string }> = {
    'physiotherapy': {
      title: 'Physiotherapy Port Credit | Physio Mississauga',
      description: 'Expert physiotherapy in Port Credit, Mississauga. McKenzie Method, Graston Technique & personalized rehab for back pain, sports injuries & sciatica.',
    },
    'vestibular-rehabilitation': {
      title: 'Vestibular Rehab Port Credit | Vertigo Physio',
      description: 'Vestibular rehabilitation in Port Credit, Mississauga. Treating vertigo, BPPV & balance disorders. Stop the spinning — book at (289) 497-8334.',
    },
    'sports-injury-rehabilitation': {
      title: 'Sports Injury Rehab Mississauga | Port Credit',
      description: 'Sports injury rehab in Port Credit, Mississauga. ACL rehab, rotator cuff, shin splints & return-to-sport protocols for athletes. Lakeshore Rd East.',
    },
    'post-operative-rehabilitation': {
      title: 'Post-Op Rehab Port Credit | Mississauga Physio',
      description: 'Post-surgical physiotherapy in Port Credit, Mississauga. Rehab after knee replacement, hip arthroplasty & rotator cuff repair. In-home visits available.',
    },
    'shockwave-therapy': {
      title: 'Shockwave Therapy Port Credit | Physio Clinic',
      description: 'Shockwave therapy (ESWT) at Port Credit Physio And Rehab, Mississauga. Treats plantar fasciitis, Achilles tendinitis, tennis elbow & chronic pain.',
    },
    'massage-therapy': {
      title: 'Registered Massage Therapy Port Credit | RMT',
      description: 'Registered Massage Therapy (RMT) in Port Credit, Mississauga. Soft tissue treatment for chronic pain, sports recovery & injury rehab. 268 Lakeshore Rd.',
    },
    'workplace-injury-rehabilitation': {
      title: 'WSIB Physio Port Credit | Workplace Injury Rehab',
      description: 'Registered WSIB provider in Port Credit, Mississauga. Workplace injury rehabilitation with direct billing — no out-of-pocket costs. Call (289) 497-8334.',
    },
  }

  const meta = metadataMap[params.id]
  if (!meta) {
    return {
      title: 'Physiotherapy Services | Port Credit Physio And Rehab',
      description: 'Explore our full range of physiotherapy and rehab services at Port Credit Physio And Rehab, Mississauga.',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.portcreditphysio.ca/services/${params.id}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.portcreditphysio.ca/services/${params.id}`,
    },
  }
}

export async function generateStaticParams() {
  const ids = getAllServiceIds()
  return ids.map((id) => ({
    id: id,
  }))
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://www.portcreditphysio.ca' },
        { name: 'Services', url: 'https://www.portcreditphysio.ca/services' },
        { name: service.title, url: `https://www.portcreditphysio.ca/services/${service.id}` },
      ]} />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <Image
          src={service.heroImage}
          alt={`${service.title} — physiotherapy and rehabilitation Port Credit Mississauga`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm uppercase tracking-wider mb-4">{service.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>

          {/* Intro Highlights */}
          {service.introHighlights && service.introHighlights.length > 0 && (
            <div className="mt-8 flex flex-col gap-3">
              {service.introHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          )}

          {service.introHighlights && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href="https://portcreditphysioandrehab.janeapp.com/"
                variant="secondary"
                target="_blank"
                style={{ backgroundColor: '#14B8A6', color: 'white' }}
              >
                Book Your Appointment
              </Button>
              <Button href="tel:+12894978334" variant="outline">
                (289) 497-8334
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Techniques Section */}
      {service.techniques && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-3">{service.techniques.sectionTitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{service.techniques.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.techniques.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border-l-4 border-steel-blue"
                >
                  <div className="w-2 h-2 bg-steel-blue rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            {service.techniques.note && (
              <p className="text-gray-500 italic mt-6">{service.techniques.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Types of Massage / Service Offered */}
      {service.massageTypes && service.massageTypes.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Types of Massage We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.massageTypes.map((type, index) => (
                <div key={index} className="bg-white-shade p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-dark mb-2">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits List */}
      {service.benefitsList && service.benefitsList.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Why Massage Therapy Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefitsList.map((benefit, index) => (
                <div key={index} className="flex gap-4 bg-white p-5 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Conditions Treated */}
      {service.detailedConditions && service.detailedConditions.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-3">Conditions We Help Treat</h2>
            <p className="text-lg text-gray-600 mb-6">
              Massage therapy at our Port Credit clinic goes beyond relaxation — it&apos;s a targeted, clinically supported treatment for a wide range of pain conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.detailedConditions.map((condition, index) => (
                <div key={index} className="bg-white-shade p-6 rounded-lg border-l-4 border-steel-blue">
                  <h3 className="text-lg font-semibold text-navy-dark mb-2">{condition.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conditions Treated */}
      {service.conditions && service.conditions.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Conditions we treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border-l-4 border-steel-blue"
                >
                  <div className="w-2 h-2 bg-steel-blue rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{condition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {service.process && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-8">{service.process.sectionTitle}</h2>
            {service.process.intro && (
              <p className="text-lg text-gray-600 mb-6">{service.process.intro}</p>
            )}
            <div className="flex flex-col gap-6">
              {service.process.steps.map((step, index) => (
                <div key={index} className="flex gap-5 bg-white p-6 rounded-lg border-l-4 border-steel-blue">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-steel-blue text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-1">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlight Callout */}
      {service.highlight && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-navy-dark mb-3">{service.highlight.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{service.highlight.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Who Can Benefit */}
      {service.whoCanBenefit && service.whoCanBenefit.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Who Can Benefit From Massage Therapy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whoCanBenefit.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border-l-4 border-steel-blue"
                >
                  <div className="w-2 h-2 bg-steel-blue rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Therapist Spotlight */}
      {service.therapistSpotlight && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">Meet Your Massage Therapist</h2>
            <div className="bg-white-shade rounded-2xl overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0">
                  <Image
                    src={service.therapistSpotlight.image}
                    alt={`${service.therapistSpotlight.name} — ${service.therapistSpotlight.tagline} in Port Credit, Mississauga`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-navy-dark">{service.therapistSpotlight.name}</h3>
                  <p className="text-steel-blue font-semibold mb-1">
                    Registered Massage Therapist — {service.therapistSpotlight.credentials}
                  </p>
                  <p className="italic text-gray-500 mb-4">&quot;{service.therapistSpotlight.tagline}&quot;</p>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                    {service.therapistSpotlight.bio}
                  </p>
                  <p className="text-sm font-semibold text-navy-dark mb-4">
                    {service.therapistSpotlight.registration}
                  </p>
                  <p className="font-semibold text-navy-dark mb-2">Areas of clinical interest:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-6">
                    {service.therapistSpotlight.interests.map((interest, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        {interest}
                      </li>
                    ))}
                  </ul>
                  <p className="italic text-gray-700 mb-6">&quot;{service.therapistSpotlight.quote}&quot;</p>
                  <Button
                    href={service.therapistSpotlight.bookingLink}
                    variant="secondary"
                    target="_blank"
                    style={{ backgroundColor: '#14B8A6', color: 'white' }}
                  >
                    Book with {service.therapistSpotlight.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white-shade">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-8">Massage Therapy FAQs</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-navy-dark pr-4">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-steel-blue flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <FaqJsonLd faqs={service.faqs} />
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-medium to-navy-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Book your appointment today and take the first step towards recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://portcreditphysioandrehab.janeapp.com"
              variant="primary"
              target="_blank"
              className="text-lg px-8 py-4"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              Book Appointment
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-dark"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
