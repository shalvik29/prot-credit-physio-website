export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'PhysicalTherapist'],
    name: 'Port Credit Physio And Rehab',
    url: 'https://www.portcreditphysio.ca',
    telephone: '+12894978334',
    image: 'https://www.portcreditphysio.ca/og-default.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '300 - 268 Lakeshore Rd East',
      addressLocality: 'Port Credit',
      addressRegion: 'ON',
      postalCode: 'L5G1H1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5516,
      longitude: -79.5848,
    },
    areaServed: [
      'Port Credit',
      'Mississauga',
      'Lakeshore Road',
      'Hurontario',
      'Credit River Area',
      'Oakville',
      'Etobicoke',
    ],
    priceRange: '$$',
    sameAs: [
      'https://www.google.com/maps/place/Port+Credit+Physio+%26+Rehab/@43.5603239,-79.5792949,17z/data=!3m1!4b1!4m6!3m5!1s0x882b47eab16b4477:0x620b1f81857db03e!8m2!3d43.56032!4d-79.57672!16s%2Fg%2F11y_bp2tkk',
      'https://www.facebook.com/people/Port-Credit-Physio-Rehab/61574706566766/',
      'https://www.instagram.com/portcreditphysioandrehab/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
