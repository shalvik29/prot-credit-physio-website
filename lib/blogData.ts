export interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  metaDescription: string
  keywords: string[]
  author: {
    name: string
    credentials: string
    bio: string
    image?: string
  }
  publishedDate: string
  modifiedDate?: string
  category: string
  tags: string[]
  image?: string
  imageAlt?: string
  content: BlogSection[]
  faqs?: BlogFAQ[]
  cta?: BlogCTA
}

export interface BlogSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'callout' | 'divider' | 'image'
  content?: string
  items?: string[]
  variant?: 'info' | 'warning' | 'tip'
  src?: string
  alt?: string
  caption?: string
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogCTA {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  variant?: 'primary' | 'secondary'
}

export const blogPosts: BlogPost[] = [
  {
    id: 'running-pain-mississauga',
    slug: 'why-does-running-cause-knee-heel-or-shin-pain',
    title: 'Why Does Running Cause Knee, Heel or Shin Pain?',
    subtitle: 'Running Pain Treatment in Mississauga: Common Causes and When to See a Physiotherapist',
    excerpt: 'Knee, heel or shin pain while running? Learn the common causes and when to see a physiotherapist in Port Credit, Mississauga. Our experts explain what your body is trying to tell you.',
    metaDescription: 'Knee, heel or shin pain while running? Learn the common causes and when to see a physiotherapist in Port Credit, Mississauga. Book your free 15-minute consultation.',
    keywords: [
      'running pain Mississauga',
      'runner\'s knee treatment Port Credit',
      'shin splints physiotherapy Mississauga',
      'plantar fasciitis treatment Port Credit',
      'Achilles tendon pain running',
      'IT band syndrome treatment',
      'sports injury physio Mississauga',
      'running injury rehabilitation',
      'physiotherapist for runners Port Credit',
    ],
    author: {
      name: 'Simoni Bhagat',
      credentials: 'Registered Physiotherapist',
      bio: 'Simoni Bhagat is a Registered Physiotherapist and the owner of Port Credit Physio & Rehab, practising in good standing with the College of Physiotherapists of Ontario (CPO) since 2021. Guided by her philosophy of Restore, Rebuild, and Reclaim, she combines evidence-based physiotherapy, personalized exercise programs, and patient education to treat the root cause of pain rather than just the symptoms.',
      image: '/simoni-bhagat-physiotherapist.jpg',
    },
    publishedDate: '2026-06-01',
    modifiedDate: '2026-07-05',
    category: 'Sports Injury',
    tags: [
      'running injuries',
      'runner\'s knee',
      'shin splints',
      'plantar fasciitis',
      'Achilles tendonitis',
      'IT band syndrome',
      'sports physiotherapy',
      'running form',
      'injury prevention',
    ],
    image: '/physiotherapist-assessing-runners-knee-port-credit.jpg',
    imageAlt: 'Physiotherapist assessing a runner\'s knee and hip mobility during a sports injury consultation at Port Credit Physio & Rehab, Mississauga',
    content: [
      {
        type: 'paragraph',
        content: 'There\'s a belief that quietly takes hold among runners: that discomfort is simply the toll you pay for the miles. You lace up, push through, and assume the aches will fade on their own. Sometimes they do. But often, that nagging pain is not background noise to be tuned out. It\'s a message.',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re preparing for your first 5K, logging easy kilometres along the Port Credit waterfront, or deep into marathon training, persistent pain is rarely random. Soreness after a hard session is normal — the natural result of asking your body to adapt. Pain that lingers during your run, or returns the moment you start again, is something different.',
      },
      {
        type: 'paragraph',
        content: 'That kind of pain signals that a part of your body isn\'t moving, loading, or recovering the way it should. Ignoring these signals rarely makes them disappear. More often, it stretches a minor issue into a longer recovery, turns a one-time niggle into a recurring injury, and quietly chips away at the performance you\'ve worked to build.',
      },
      {
        type: 'paragraph',
        content: 'At Port Credit Physio & Rehab, our physiotherapists help runners do the opposite. We help you listen to what your body is saying, find the true source of the pain, and build a personalized plan to return to running safely — and to stay there for the long term.',
      },
      {
        type: 'heading',
        content: 'Why Do I Have Pain While Running?',
      },
      {
        type: 'paragraph',
        content: 'Pain while running is often caused by muscle weakness, mobility restrictions, training errors, poor running mechanics, or insufficient recovery. Common running injuries include runner\'s knee, IT band syndrome, plantar fasciitis, Achilles tendinopathy, and shin splints. Our sports injury rehabilitation team can help identify the root cause and guide your recovery.',
      },
      {
        type: 'heading',
        content: 'What Your Running Pain May Be Telling You',
      },
      {
        type: 'paragraph',
        content: 'Pain has a location, but it doesn\'t always originate in the same place. Learning to read where and when discomfort appears is the first step toward understanding what your body is trying to communicate. Each pattern tells a slightly different story about what\'s happening beneath the surface.',
      },
      {
        type: 'image',
        src: '/running-related-knee-shin-foot-pain-diagram.jpg',
        alt: 'Diagram of common running injuries including IT band syndrome, knee pain, shin splints, and plantar fasciitis in the leg and foot',
        caption: 'Common leg and foot pain patterns runners experience: IT band syndrome, knee pain, shin splints, and plantar fasciitis.',
      },
      {
        type: 'subheading',
        content: 'Knee Pain While Running (Pain Around the Kneecap)',
      },
      {
        type: 'paragraph',
        content: 'Pain at the front of the knee, often felt around or behind the kneecap, is commonly associated with what runners call runner\'s knee. It\'s one of the most frequent complaints we see, and also one of the most misunderstood. Many runners assume the knee is the problem, but it\'s frequently just where the symptoms surface.',
      },
      {
        type: 'paragraph',
        content: 'In reality, your body may be telling you that the hip and glute muscles aren\'t strong enough to control your stride, that your running mechanics need refining, or that you increased your training volume too quickly. Limited ankle mobility can also alter how force travels up the leg, placing extra strain on the knee itself.',
      },
      {
        type: 'callout',
        content: 'Runner\'s knee is often a symptom of weakness elsewhere — typically the hips and glutes. Strengthening these areas can dramatically reduce knee pain.',
        variant: 'tip',
      },
      {
        type: 'subheading',
        content: 'IT Band Syndrome (Pain Along the Outside of the Knee)',
      },
      {
        type: 'paragraph',
        content: 'Discomfort on the outer side of the knee, especially when it builds during a run, may point to iliotibial (IT) band syndrome. The IT band runs along the outside of the thigh, and when the structures supporting it are overworked, irritation often follows close behind.',
      },
      {
        type: 'paragraph',
        content: 'Here, your body may be signalling that your hip stabilizers are weak, that your running form needs adjustment, or that muscle imbalances are concentrating stress in one area instead of distributing it evenly. It\'s a reminder that the body works as a connected system, where weakness in one link forces another to compensate.',
      },
      {
        type: 'subheading',
        content: 'Plantar Fasciitis (Heel Pain in the Morning)',
      },
      {
        type: 'paragraph',
        content: 'Few sensations are as recognizable as that sharp stab in the heel with your first steps out of bed. This pattern is commonly associated with plantar fasciitis, an irritation of the tissue that supports the arch of the foot and absorbs impact as you run.',
      },
      {
        type: 'paragraph',
        content: 'Your body may be telling you that the small muscles of the foot need strengthening, that tight calf muscles are pulling on the chain, or that your running load has outpaced what your tissues can handle. Underlying biomechanical factors, such as how your foot strikes the ground, often play a role too.',
      },
      {
        type: 'subheading',
        content: 'Achilles Tendon Pain',
      },
      {
        type: 'paragraph',
        content: 'Pain or stiffness in the Achilles tendon — the thick cord connecting your calf to your heel — tends to creep in gradually rather than arriving all at once. That slow build is part of what makes it so easy to dismiss in its early stages, until it starts affecting your runs.',
      },
      {
        type: 'paragraph',
        content: 'When it appears, your body may be telling you that the tendon is absorbing more load than it\'s prepared for, that your calf strength needs improvement, or that you aren\'t allowing enough recovery between runs. The good news is that the Achilles responds well to early care, which often prevents a stubborn, chronic problem.',
      },
      {
        type: 'subheading',
        content: 'Shin Pain While Running',
      },
      {
        type: 'paragraph',
        content: 'Aching along the shin bone, often described as shin splints, is another classic sign of tissue overload. It frequently appears when something in your routine has changed — sometimes so gradually that you don\'t immediately connect it to the discomfort you\'re now feeling.',
      },
      {
        type: 'paragraph',
        content: 'Your body may be telling you that your training progressed too aggressively, that your running shoes are no longer offering the support you need, or that the muscles of your lower leg require strengthening. Left unaddressed, this kind of overload can progress into more serious stress-related injuries that take far longer to heal.',
      },
      {
        type: 'heading',
        content: 'The Missing Link: Looking Beyond the Pain',
      },
      {
        type: 'paragraph',
        content: 'If there\'s one mistake that keeps runners stuck in a frustrating cycle of injury, it\'s treating only the spot that hurts. Rest the sore knee, ice the aching heel, wait for it to settle, then return to running — only to find the same pain waiting. The painful area is often the victim, not the culprit.',
      },
      {
        type: 'paragraph',
        content: 'This is the philosophy at the heart of how we work at Port Credit Physio & Rehab. Rather than focusing narrowly on symptoms, our physiotherapists assess your entire movement system — because pain so often originates from a weakness or restriction elsewhere. A weak hip can overload a knee, and a stiff ankle can strain a calf.',
      },
      {
        type: 'paragraph',
        content: 'To find these hidden contributors, we look at the full picture: your posture, your walking and running mechanics, your hip strength, your core stability, your ankle mobility, how your feet function, and your overall balance and control. By understanding how these pieces work together, we address the genuine source of the problem.',
      },
      {
        type: 'paragraph',
        content: 'That distinction — treating the cause rather than masking the pain — is often what separates a lasting recovery from a temporary one. It\'s also why two runners with identical symptoms may need very different plans, and why a careful assessment matters far more than a one-size-fits-all approach to treatment.',
      },
      {
        type: 'heading',
        content: 'How Physiotherapy Can Help Runners',
      },
      {
        type: 'paragraph',
        content: 'Once we understand what\'s driving your pain, treatment becomes far more targeted and effective. Every runner\'s plan looks a little different, but our physiotherapy approach commonly draws on several complementary methods that work together to address both your symptoms and their underlying causes.',
      },
      {
        type: 'paragraph',
        content: 'It usually begins with a running assessment, where we analyze your movement patterns and identify the mechanical factors contributing to your pain. From there, soft tissue mobilization uses hands-on techniques to reduce muscle tension, improve mobility, and support your body\'s natural recovery process as you heal.',
      },
      {
        type: 'paragraph',
        content: 'Where joints have become stiff or restricted in ways that affect your efficiency, joint mobilization helps restore healthier movement. Much of the lasting progress, though, comes from lower limb strength training — because running forces travel through the entire leg and the whole chain needs to be capable of sharing them.',
      },
      {
        type: 'paragraph',
        content: 'We focus on building strength across the glutes, hips, quadriceps, hamstrings, calves, and the often-neglected intrinsic muscles of the foot. Finally, our return-to-sport protocols guide you back through carefully managed stages, rebuilding your tolerance gradually so you return with confidence — rather than uncertainty or fear of reinjury.',
      },
      {
        type: 'heading',
        content: '5 Signs It\'s Time to See a Physiotherapist for Running Pain',
      },
      {
        type: 'paragraph',
        content: 'It\'s not always obvious when a pain warrants professional attention and when it will settle on its own. As a general guide, it\'s worth booking an assessment if any of the signs below sound familiar to your current experience as a runner:',
      },
      {
        type: 'list',
        items: [
          'Your pain has lasted longer than one week',
          'The pain is changing your running form or gait',
          'You\'re noticing swelling around the area',
          'Your symptoms are gradually getting worse rather than better',
          'The pain is preventing you from reaching your training goals',
        ],
      },
      {
        type: 'paragraph',
        content: 'Across all of these, the same principle holds true: the earlier you seek help, the simpler the path back tends to be. Early treatment consistently leads to faster recovery and better long-term outcomes than waiting until the problem has fully settled in. If any of these sound familiar, book a free 15-minute consultation with our team.',
      },
      {
        type: 'heading',
        content: 'Why Runners in Port Credit Trust Our Team',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re chasing a personal best, training for a race, or simply running to feel good and stay healthy, you deserve care that takes your goals seriously. Our physiotherapists are committed to helping you move better, recover fully, and stay active in the sport you love most.',
      },
      {
        type: 'paragraph',
        content: 'Just as importantly, our work doesn\'t stop at reducing pain. We want you to come away stronger — with better movement quality and improved performance — so you\'re not just back to where you were, but better equipped for the road ahead and the kilometres still to come.',
      },
      {
        type: 'paragraph',
        content: 'For runners throughout Port Credit and the wider Mississauga community, that combination of genuine care and a whole-body approach is what keeps them coming back. It\'s also why so many of them recommend us to their running partners, training groups, and friends who\'ve started to feel that familiar ache.',
      },
    ],
    faqs: [
      {
        question: 'Is it normal to have pain while running?',
        answer: 'Some muscle soreness after running is normal, especially after a hard or unfamiliar session. Persistent pain during or after running is not, and it may indicate an issue with strength, mobility, or running mechanics that is worth having assessed.',
      },
      {
        question: 'When should I see a physio for running pain?',
        answer: 'Consider booking an assessment if your pain lasts longer than a week, changes your running form, comes with swelling, gets progressively worse, or stops you from reaching your training goals. The earlier you seek help, the simpler the recovery usually is. You can book a free 15-minute consultation to talk it through first.',
      },
      {
        question: 'Can physiotherapy help prevent running injuries?',
        answer: 'Yes. Beyond treating existing pain, physiotherapy can identify weaknesses, mobility restrictions, and movement patterns that put you at risk before they become injuries. Our sports injury rehabilitation programs include strength work and return-to-sport guidance designed to keep you running consistently.',
      },
      {
        question: 'Do I need to stop running completely?',
        answer: 'Not always. The right approach depends on the severity, location, and duration of your pain. In many cases, activity can be modified rather than stopped altogether. A physiotherapist can help you determine how much you can safely keep doing while you recover.',
      },
      {
        question: 'How long does it take to recover from a running injury?',
        answer: 'Recovery time varies depending on the type and severity of the injury. Minor issues may improve within a few weeks, while more persistent conditions can take several months. Early assessment and treatment often lead to faster recovery and better long-term outcomes.',
      },
    ],
    cta: {
      title: 'Running Pain Doesn\'t Have to Be Part of Your Routine',
      description: 'If running has started to feel uncomfortable, the worst thing you can do is wait and hope the pain fades on its own. Your body has been telling you something all along, and the sooner you choose to listen, the sooner you can get back to running freely and comfortably.',
      buttonText: 'Book Your Free 15-Minute Consultation',
      buttonLink: 'https://portcreditphysioandrehab.janeapp.com/',
      variant: 'primary',
    },
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count)
}