import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { getServiceById, getAllServiceIds } from '@/lib/servicesData'

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
    <div className="flex flex-col min-h-screen pt-32 md:pt-40">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
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
