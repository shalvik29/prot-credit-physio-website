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
    note?: string
  }
  introHighlights?: string[]
  massageTypes?: {
    title: string
    description: string
  }[]
  benefitsList?: {
    title: string
    description: string
  }[]
  detailedConditions?: {
    title: string
    description: string
  }[]
  whoCanBenefit?: string[]
  therapistSpotlight?: {
    name: string
    credentials: string
    tagline: string
    image: string
    bio: string
    registration: string
    interests: string[]
    quote: string
    bookingLink: string
  }
  faqs?: {
    question: string
    answer: string
  }[]
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
    subtitle: 'Restore Balance, Ease Tension, Reclaim Your Life',
    description: 'Restore Balance, Ease Tension, Reclaim Your Life',
    image: '/massage.jpeg',
    heroImage: '/massage.jpeg',
    fullDescription: `Carrying stress, tightness, or nagging pain in your muscles? Our Registered Massage Therapist in Port Credit uses hands-on, evidence-based techniques to release tension, improve circulation, and help you move and feel better — whether you're managing an injury, training for sport, or simply need to unwind.

Massage therapy is a hands-on treatment in which a Registered Massage Therapist uses their hands, fingers, forearms, and specialized tools to apply pressure, kneading, and stretching to your muscles, tendons, ligaments, and connective tissue. By adjusting pressure and technique to your specific needs, your therapist works to release tight muscles, break up areas of tension, and calm an overactive nervous system.

Massage therapy isn't just about relaxation — it's a clinically supported treatment used to manage pain, speed up recovery, and restore healthy movement. At Port Credit Physio & Rehab, our Registered Massage Therapist works alongside our physiotherapy team to build a plan around your specific goals, whether that's recovering from an injury, easing chronic pain, or simply keeping your body feeling its best.`,
    benefits: [],
    conditions: [],
    whatToExpect: [],
    introHighlights: [
      'Direct billing to all major insurance providers, including WSIB.',
      'Registered Massage Therapist trained in a wide range of manual therapy techniques.',
      'Customized treatment plans for injury recovery, sports performance, stress, and everyday tension.',
    ],
    techniques: {
      sectionTitle: 'What Your Massage Therapist Does',
      intro: "At your first visit, your therapist will take a full health history and assessment to understand where you're holding tension, what's driving your pain, and what you're hoping to achieve. From there, they'll build a hands-on treatment plan that may include:",
      items: [
        'Deep tissue work and trigger point release',
        'Joint mobilization and passive stretching',
        'Myofascial release',
        'Techniques tailored to sport, injury, or stress-related tension',
        'At-home care and self-management strategies to support your progress between visits',
      ],
      note: "Your comfort always comes first — sessions are adjusted to your preferences, and you're always in control of pressure, technique, and areas of focus.",
    },
    massageTypes: [
      {
        title: 'Deep Tissue Massage',
        description: 'Deep tissue massage uses firm, sustained pressure to reach the deeper layers of muscle and connective tissue. It\'s especially effective for chronic tension, postural pain, and areas that feel "stuck" or restricted — such as tight shoulders from desk work or a lower back that never fully loosens up.',
      },
      {
        title: 'Swedish Massage',
        description: "Swedish massage uses long, flowing strokes, kneading, and light-to-moderate pressure to relax the body, improve circulation, and ease everyday muscle tension. It's a great option if you're looking for a treatment that supports both physical relief and overall stress reduction.",
      },
      {
        title: 'Hot Stone Massage',
        description: 'Hot stone massage combines the benefits of massage with the deep, penetrating warmth of heated stones. The heat helps muscles relax more quickly, allowing your therapist to work deeper with less discomfort — ideal for chronic tightness or when your body needs extra help letting go of tension.',
      },
      {
        title: 'Cupping Therapy',
        description: "Cupping uses suction to lift and decompress soft tissue, which can help release fascial restrictions, improve blood flow, and reduce muscle tightness. Many patients find cupping especially helpful for stubborn areas of tension in the back, shoulders, and legs that don't respond as well to pressure alone.",
      },
      {
        title: 'Head Massage',
        description: "Focused massage of the scalp, neck, and upper shoulders can relieve tension headaches, ease jaw and neck tightness, and calm the nervous system. It's a simple, effective way to relieve the strain that builds up from screen time, stress, or poor posture.",
      },
      {
        title: 'Sports Massage',
        description: "Sports massage is designed for active individuals and athletes, focusing on the muscle groups used in your specific sport or activity. Whether you're preparing for competition, recovering after a big training block, or managing an overuse injury, sports massage can help reduce soreness, improve flexibility, and support faster recovery.",
      },
    ],
    benefitsList: [
      {
        title: 'Relieve pain and tension',
        description: 'Manual pressure helps ease tight, overworked muscles and reduce discomfort from conditions like low back pain and tension headaches.',
      },
      {
        title: 'Improve circulation',
        description: 'Massage encourages blood flow to affected tissues, helping deliver oxygen and nutrients that support healing.',
      },
      {
        title: 'Increase flexibility and range of motion',
        description: 'By working on muscles and connective tissue, massage helps reduce stiffness and restore natural movement.',
      },
      {
        title: 'Reduce stress and support mental health',
        description: 'Massage lowers cortisol levels and promotes relaxation, which can ease symptoms of anxiety and improve mood.',
      },
      {
        title: 'Support better sleep',
        description: 'A relaxed nervous system and reduced muscle tension often translate into deeper, more restful sleep.',
      },
      {
        title: 'Speed up recovery',
        description: "Whether from a workout, an injury, or surgery, massage can help reduce swelling and support the body's natural healing process.",
      },
      {
        title: 'Prevent future injury',
        description: 'Ongoing maintenance massage helps identify and address tight or imbalanced areas before they become a bigger problem.',
      },
    ],
    detailedConditions: [
      {
        title: 'Lower Back Pain',
        description: 'One of the most common reasons people search for massage therapy. Deep tissue and myofascial release techniques help relax tight lumbar muscles, reduce inflammation, and improve mobility — effective for both acute strain and chronic low back pain.',
      },
      {
        title: 'Sciatica',
        description: 'Sciatic nerve pain — that sharp, shooting pain that travels from the lower back through the hips and down the leg — is often caused by tight muscles (like the piriformis) compressing the nerve. Targeted massage techniques help release this pressure, easing pain, numbness, and tingling.',
      },
      {
        title: 'Neck and Shoulder Pain',
        description: 'Often linked to desk work, poor posture, and stress. Massage therapy releases tight muscles in the neck, traps, and upper back, restoring range of motion and easing that "locked up" feeling.',
      },
      {
        title: 'Tension Headaches and Migraines',
        description: 'Tension headaches are frequently rooted in tight muscles in the neck, shoulders, and scalp. Head, neck, and scalp massage can reduce the frequency and intensity of tension headaches and has also been shown to help with migraine-related symptoms.',
      },
      {
        title: 'Frozen Shoulder (Adhesive Capsulitis)',
        description: 'Frozen shoulder causes stiffness and restricted movement in the shoulder joint. Massage therapy — often combined with physiotherapy — helps loosen the surrounding muscles and connective tissue, easing pain and supporting a gradual return of mobility.',
      },
      {
        title: 'Fibromyalgia and Chronic Pain',
        description: 'Fibromyalgia causes widespread muscle pain, tenderness, and fatigue. Gentle, consistent massage therapy has been shown to reduce pain sensitivity, ease stiffness, and support better sleep.',
      },
      {
        title: 'Arthritis and Joint Pain',
        description: 'Arthritis-related stiffness and joint pain can be eased through massage, which helps improve circulation, reduce swelling around the joints, and maintain flexibility.',
      },
      {
        title: 'Sports Injuries and Muscle Strains',
        description: 'Whether it\'s a pulled muscle, overuse injury, or post-training soreness, sports massage helps reduce inflammation, break up scar tissue, and speed up recovery so you can get back to training and competition faster.',
      },
      {
        title: 'TMJ and Jaw Pain',
        description: 'TMJ dysfunction causes jaw pain, clicking, and tension that often radiates into the head and neck. Targeted massage of the jaw, neck, and scalp muscles can relieve this tension and reduce associated headaches.',
      },
      {
        title: 'Stress, Anxiety, and Tension',
        description: "Stress shows up physically — tight shoulders, shallow breathing, clenched jaws. Massage therapy lowers cortisol levels and activates the body's relaxation response, easing both physical and mental symptoms of chronic stress and anxiety.",
      },
      {
        title: 'Plantar Fasciitis',
        description: 'Plantar fasciitis causes stabbing heel and arch pain, often from tightness in the calf and foot muscles. Massage therapy helps release this tension, improving flexibility in the lower leg and reducing strain on the plantar fascia.',
      },
    ],
    whoCanBenefit: [
      'Dealing with tight, sore, or stiff muscles',
      'Managing stress and looking for a way to relax',
      'Recovering from a workout, sport, or physical activity',
      'Working through an injury alongside physiotherapy',
      'Experiencing tension headaches or jaw discomfort',
      'Simply looking for ongoing maintenance to keep your body feeling good',
    ],
    therapistSpotlight: {
      name: 'Rajesh Verma',
      credentials: 'RMT',
      tagline: 'Helping You Feel and Move Your Best',
      image: '/rajesh-verma-rmt.jpg',
      bio: `Rajesh Verma is a Registered Massage Therapist passionate about helping patients reduce pain, improve mobility, and achieve optimal wellness through personalized treatment. At Port Credit Physio & Rehab, Rajesh provides deep tissue massage, relaxation massage, cupping therapy, headache relief treatment, sports recovery massage, and wellness-focused care.

His approach combines hands-on therapeutic technique with an individualized treatment plan for each patient, focused on addressing the root cause of pain and muscle dysfunction — not just the symptoms. Whether you're recovering from an injury, managing chronic pain, dealing with stress-related tension, or looking to enhance athletic recovery, Rajesh is committed to helping you feel and move your best.`,
      registration: 'Registered and in good standing with the College of Massage Therapists of Ontario (CMTO).',
      interests: [
        'Deep tissue massage for chronic muscle tension',
        'Relaxation massage for stress relief',
        'Cupping therapy for pain and inflammation',
        'Head, neck & scalp massage for headache relief',
        'Sports recovery massage for athletes',
        'Myofascial release for restricted movement',
        'Stress reduction & wellness care',
      ],
      quote: 'I am committed to helping you feel and move your best through personalized, hands-on care.',
      bookingLink: 'https://portcreditphysioandrehab.janeapp.com/',
    },
    faqs: [
      {
        question: "Do I need a doctor's referral to book a massage?",
        answer: "No referral is required to book with our RMTs. However, check with your insurance provider to confirm what's needed for reimbursement.",
      },
      {
        question: 'How often should I get a massage?',
        answer: 'It depends on your goals. Many patients start with weekly or biweekly sessions to address a specific issue, then move to monthly visits for maintenance.',
      },
      {
        question: 'Can massage therapy help with chronic pain?',
        answer: 'Yes. Techniques like deep tissue work, trigger point release, and myofascial release are commonly used to manage chronic tension, postural pain, and ongoing discomfort.',
      },
      {
        question: 'What should I wear to my appointment?',
        answer: 'Comfortable clothing is fine. Draping is used throughout your session, and your therapist will always work within your comfort level.',
      },
      {
        question: 'Do you direct bill insurance?',
        answer: 'Yes — we direct bill to all major insurance providers, including WSIB, so you can focus on your treatment rather than paperwork.',
      },
    ],
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
