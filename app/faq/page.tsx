import Accordion from '@/components/ui/Accordion';
import { faqData } from '@/lib/faqData';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'FAQ | Port Credit Physio & Rehab',
  description: 'Frequently Asked Questions about our physiotherapy and rehabilitation services.',
};

export default function FAQPage() {
  return (
    <div className="bg-white-shade min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Everything you need to know before your visit
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-shade">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-navy-dark mb-4">Common Insurance & Treatment Questions</h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to questions about booking, what to expect, and direct billing below.
            </p>
          </div>
          
          <Accordion items={faqData} />
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you couldn&apos;t find what you were looking for, don&apos;t hesitate to reach out to our team directly. We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="secondary" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
              Contact Us
            </Button>
            <Button href="tel:+12894978334" variant="outline" className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white">
              Call (289) 497-8334
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
