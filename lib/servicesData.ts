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
  techniques?: {
    sectionTitle: string
    intro: string
    items: string[]
  }
  process?: {
    sectionTitle: string
    intro?: string
    steps: {
      number: string
      title: string
      description: string
    }[]
  }
  highlight?: {
    title: string
    description: string
  }
  duration?: string
  frequency?: string
}

export const servicesData: Service[] = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    subtitle: 'The Science of Movement',
    description: 'Physiotherapy: The Science of Movement',
    image: '/Physiotherapy.jpg',
    heroImage: '/Physiotherapy.jpg',
    fullDescription: `Physiotherapy isn't just recovery—it's the path to maximizing your physical strength and functional freedom. At Port Credit Physio, we treat the whole person, not just the symptom.

Whether you're managing chronic back pain, recovering from a sports injury, or rebuilding after surgery, our physiotherapists use evidence-based techniques including the McKenzie Method® (proven for back pain and sciatica), Graston Technique® (to break down scar tissue), and personalized exercise prescription.

Move from pain to performance through active partnership and clinical excellence.`,
    benefits: [],
    conditions: [
      'Sprains and strains',
      'Tendonitis',
      'Muscle tears and stiffness',
      'Shoulder and hip pain',
      'Shin splints',
      'Arthritis and joint pain',
      'Fibromyalgia',
      'Sciatica',
      'Carpal tunnel syndrome',
      'Vertigo and balance issues',
      'Tennis elbow & golfer’s elbow',
      'Ankle sprains',
    ],
    whatToExpect: []
  },
  {
    id: 'vestibular-rehabilitation',
    title: 'Vestibular Rehabilitation',
    subtitle: 'Stop the Spinning, Find Your Balance',
    description: 'Stop the Spinning, Find Your Balance',
    image: '/vestibular.jpeg',
    heroImage: '/vestibular.jpeg',
    fullDescription: `If the world feels like it's spinning, your independence is at risk. Vestibular rehabilitation is a specialized, exercise-based program designed to retrain your brain and inner ear to work in harmony.

Stop the spinning, restore confidence, and get you back to living without fear of falling or dizziness.`,
    benefits: [],
    conditions: [
      'Vertigo',
      'BPPV (Benign Paroxysmal Positional Vertigo)',
      'General imbalance & lightheadedness',
      'Post-concussion dizziness'
    ],
    whatToExpect: [],
    techniques: {
      sectionTitle: 'What Techniques Are Used In Vestibular Rehabilitation?',
      intro: 'There are multiple types of exercises used in vestibular rehabilitation.',
      items: [
        'Habituation',
        'Gaze stabilization',
        'Balance training',
        'Postural training and neck mobility',
      ]
    }
  },
  {
    id: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    subtitle: 'Return Stronger, Not Just Pain-Free',
    description: 'Return Stronger, Not Just Pain-Free',
    image: '/SportsInjury.jpeg',
    heroImage: '/SportsInjury.jpeg',
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
    image: '/PostOperativeRehab.jpg',
    heroImage: '/PostOperativeRehab.jpg',
    fullDescription: `The surgery repaired the structure. Physiotherapy restores the function—and your life.

Whether you've had a Total Knee Replacement, Hip Arthroplasty, or Rotator Cuff Repair, our specialized post-op protocols focus on three critical pillars:

• Restoring Range of Motion: Gentle, evidence-based manual therapy to 'thaw' stiffness and get your joints moving smoothly.

• Building Functional Strength: We don't just exercise—we train you for the movements of daily life (climbing stairs, getting in the car, walking the Village).

• Proprioception & Movement Awareness: Re-training your body’s "position sense" to ensure your brain and joints are communicating effectively.

• Balance & Stability Training: Using our Bosu® trainers and balance boards to restore confidence in your movements and prevent future falls or re-injury.

• Mobile In-Home Assessments: If you are unable to commute immediately following surgery, we offer in-home assessment and treatment to ensure your recovery starts on day one in the comfort of your own home.

Our Clinical Commitment: Your new joint performs even better than the old one. We guide you from your first post-op day to your first pain-free walk by the lake.`,
    benefits: [],
    conditions: [],
    whatToExpect: []
  },
  {
    id: 'shockwave-therapy',
    title: 'Shockwave Therapy',
    subtitle: 'Break Through Chronic Pain',
    description: 'Break Through Chronic Pain',
    image: '/shockwave.jpeg',
    heroImage: '/shockwave.jpeg',
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
    image: '/massage.jpeg',
    heroImage: '/massage.jpeg',
    fullDescription: `Beyond relaxation, our Registered Massage Therapists (RMTs) use evidence-based soft tissue manipulation to reduce muscle tension, improve circulation, and speed recovery from sports injuries or chronic stress.

Massage therapy works beautifully alongside physiotherapy, helping to:
• Release muscle tension & trigger points
• Improve blood flow to injured tissues
• Reduce inflammation
• Enhance flexibility & range of motion

Perfect for: Post-workout recovery, chronic pain management, injury rehabilitation, and stress relief.`,
    benefits: [],
    conditions: [
      'Chronic pain and fibromyalgia',
      'Tendonitis',
      'Plantar fasciitis',
      'Shin splints',
      'Frozen shoulder',
      'Stress, anxiety, and poor sleep'
    ],
    whatToExpect: []
  },
  {
    id: 'workplace-injury-rehabilitation',
    title: 'Workplace Injury Rehabilitation (WSIB)',
    subtitle: 'Recover at Work. Return with Confidence.',
    description: 'Recover at Work. Return with Confidence.',
    image: '/workplaceInjury.jpeg',
    heroImage: '/workplaceInjury.jpeg',
    fullDescription: `What is WSIB?
The Workplace Safety and Insurance Board (WSIB) is a provincial agency in Ontario that provides support and insurance for workers who have been injured on the job or have developed an occupational illness.

As a Registered WSIB Provider in Port Credit, we specialize in managing work-related musculoskeletal injuries—such as repetitive strains, back pain from lifting, or falls—helping you return to your daily routine safely and effectively`,
    benefits: [],
    conditions: [],
    whatToExpect: [],
    process: {
      sectionTitle: 'Our WSIB Recovery Process',
      intro: 'We take the stress out of your claim by handling the clinical paperwork and providing direct billing, so you can focus entirely on your healing.',
      steps: [
        {
          number: '1',
          title: 'Initial Assessment',
          description: 'Your recovery begins with a comprehensive evaluation by a physiotherapist in Mississauga. We assess your injury, document the functional limitations related to your job, and design a customized treatment plan tailored to your workplace demands.',
        },
        {
          number: '2',
          title: 'WSIB Documentation & Approval',
          description: 'Navigating claims can be complex. We assist you by submitting the necessary medical paperwork (Form 8) and clinical reports directly to WSIB to streamline your approval process.',
        },
        {
          number: '3',
          title: 'Evidence-Based Treatment',
          description: 'Once your claim is active, we utilize modern techniques—including The McKenzie Method, manual therapy, and functional strengthening—to reduce pain and restore your ability to work.',
        },
        {
          number: '4',
          title: 'Collaborative Return-to-Work Plan',
          description: 'We act as the bridge between you, your employer, and your WSIB case manager. Our goal is to ensure a safe, gradual, and successful return to your professional duties through specific corrective strategies.',
        },
      ],
    },
    highlight: {
      title: 'No Out-of-Pocket Costs: We Direct Bill',
      description: 'We believe financial stress shouldn\'t hinder your recovery. Our clinic direct bills WSIB for all approved claims. This means you can receive elite-level care with no out-of-pocket expenses for your treatments.',
    },
  }
]

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id)
}

export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id)
}
