export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  heroImage: string
  fullDescription: string
  benefits: string[]
  conditions: string[]
  whatToExpect: {
    title: string
    description: string
  }[]
  duration?: string
  frequency?: string
}

export const servicesData: Service[] = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    subtitle: 'The Science of Movement',
    description: 'Physiotherapy: The Science of Movement',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `Physiotherapy isn't just recovery—it's the path to maximizing your physical strength and functional freedom. At Port Credit Physio, we treat the whole person, not just the symptom.

Whether you're managing chronic back pain, recovering from a sports injury, or rebuilding after surgery, our physiotherapists use evidence-based techniques including the McKenzie Method® (proven for back pain and sciatica), Graston Technique® (to break down scar tissue), and personalized exercise prescription.

Move from pain to performance through active partnership and clinical excellence.`,
    benefits: [],
    conditions: [
      'Lower back pain & sciatica',
      'Neck pain & whiplash',
      'Shoulder injuries (frozen shoulder, rotator cuff)',
      'Workplace injuries (WSIB)',
      'Chronic tendinitis',
      'Post-surgical recovery'
    ],
    whatToExpect: []
  },
  {
    id: 'vestibular-rehabilitation',
    title: 'Vestibular Rehabilitation',
    subtitle: 'Stop the Spinning, Find Your Balance',
    description: 'Stop the Spinning, Find Your Balance',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `If the world feels like it's spinning, your independence is at risk. Vestibular rehabilitation is a specialized, exercise-based program designed to retrain your brain and inner ear to work in harmony.

Stop the spinning, restore confidence, and get you back to living without fear of falling or dizziness.`,
    benefits: [],
    conditions: [
      'Vertigo',
      'BPPV (Benign Paroxysmal Positional Vertigo)',
      'General imbalance & lightheadedness',
      'Post-concussion dizziness'
    ],
    whatToExpect: []
  },
  {
    id: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    subtitle: 'Return Stronger, Not Just Pain-Free',
    description: 'Return Stronger, Not Just Pain-Free',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `Whether you're a weekend warrior on the Waterfront Trail or a competitive athlete, sports injuries demand specialized care. We don't just get you back on the field—we get you back stronger.

Advanced biomechanical analysis, Kinesio Taping, and injury prevention strategies used by professional athletes. We focus on functional return-to-sport protocols.`,
    benefits: [],
    conditions: [
      'Shoulder injuries (rotator cuff, labral tears, frozen shoulder)',
      'Knee injuries (ACL rehab, meniscus tears, patellar tendinitis)',
      'Elbow tendinitis (tennis elbow, golfer\'s elbow)',
      'Shin splints & lower leg injuries'
    ],
    whatToExpect: []
  },
  {
    id: 'post-operative-rehabilitation',
    title: 'Post-Operative Rehabilitation',
    subtitle: 'Surgery is Step One. Rehab is Where You Thrive.',
    description: 'Surgery is Step One. Rehab is Where You Thrive.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `The surgery repaired the structure. Physiotherapy restores the function—and your life.

Whether you've had a Total Knee Replacement, Hip Arthroplasty, or Rotator Cuff Repair, our specialized post-op protocols focus on three critical pillars:

• Restoring Range of Motion: Gentle, evidence-based manual therapy to 'thaw' stiffness and get your joints moving smoothly.

• Building Functional Strength: We don't just exercise—we train you for the movements of daily life (climbing stairs, getting in the car, walking the Village).

• Swelling & Pain Management: Kinesio Taping and Shockwave Therapy (when appropriate) to accelerate healing.

Our Promise: Your new joint performs even better than the old one. We guide you from your first post-op day to your first pain-free walk by the lake.`,
    benefits: [],
    conditions: [
      'Total Knee Replacement',
      'Hip Arthroplasty',
      'Rotator Cuff Repair',
      'ACL Reconstruction',
      'Spinal Surgery',
      'Other orthopedic procedures'
    ],
    whatToExpect: []
  },
  {
    id: 'shockwave-therapy',
    title: 'Shockwave Therapy',
    subtitle: 'Break Through Chronic Pain',
    description: 'Break Through Chronic Pain',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `Shockwave Therapy (ESWT) is a non-invasive treatment that uses acoustic waves to jumpstart healing in chronic injuries that have 'stalled.' Despite the name, there are no electric shocks—just high-energy sound waves that wake up your body's natural healing response.

How It Works:
• Creates controlled micro-trauma in damaged tissue
• Triggers increased blood flow and nutrient delivery
• Breaks down scar tissue and calcification
• Overstimulates nerve endings to reduce chronic pain

What to Expect: 3-6 sessions, spaced 5-10 days apart. Results improve over 6-12 weeks as tissue heals.`,
    benefits: [],
    conditions: [
      'Plantar fasciitis (stubborn heel pain)',
      'Achilles tendinitis',
      'Tennis/golfer\'s elbow',
      'Patellar tendinitis (\'jumper\'s knee\')',
      'Calcific tendonitis (shoulder)',
      'Greater trochanteric pain syndrome (hip)'
    ],
    whatToExpect: []
  },
  {
    id: 'massage-therapy',
    title: 'Massage Therapy (RMT)',
    subtitle: 'Therapeutic Recovery',
    description: 'Therapeutic Touch That Accelerates Recovery',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop&q=80',
    fullDescription: `Beyond relaxation, our Registered Massage Therapists (RMTs) use evidence-based soft tissue manipulation to reduce muscle tension, improve circulation, and speed recovery from sports injuries or chronic stress.

Massage therapy works beautifully alongside physiotherapy, helping to:
• Release muscle tension & trigger points
• Improve blood flow to injured tissues
• Reduce inflammation
• Enhance flexibility & range of motion

Perfect for: Post-workout recovery, chronic pain management, injury rehabilitation, and stress relief.`,
    benefits: [],
    conditions: [
      'Post-workout recovery',
      'Chronic pain management',
      'Injury rehabilitation',
      'Stress relief',
      'Muscle tension',
      'Trigger points'
    ],
    whatToExpect: []
  }
]

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id)
}

export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id)
}
