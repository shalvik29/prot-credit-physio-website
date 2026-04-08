import React from 'react';

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    id: 'first-visit',
    question: 'What happens during my first visit?',
    answer: (
      <div className="space-y-3">
        <p>Your initial 60-minute appointment includes an in-depth discussion of your medical history and symptoms, followed by a physical exam to evaluate mobility, strength, and function.</p>
        <p>We provide both assessment and initial treatment during this time. If you have more than 2 areas of injury, we&apos;ll focus on a thorough assessment and create your personalized treatment plan.</p>
      </div>
    ),
  },
  {
    id: 'follow-up',
    question: 'How long are follow-up appointments?',
    answer: (
      <div className="space-y-3">
        <p>Follow-up sessions are personalized one-on-one with your therapist. We recommend:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li><strong>30 minutes</strong> - for a single injury area</li>
          <li><strong>45-60 minutes</strong> - for multiple areas or complex rehabilitation</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cancellation-policy',
    question: 'What’s your cancellation policy?',
    answer: (
      <div className="space-y-3">
        <p>We require 24 hours&apos; notice for cancellations or rescheduling.</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li><strong>Less than 24 hours notice:</strong> $50 fee</li>
          <li><strong>Less than 12 hours / No-show:</strong> Full session fee charged</li>
        </ul>
        <p className="text-sm italic text-gray-500 mt-2">If it&apos;s been 6+ months since your last visit, please book a &quot;Re-Assessment.&quot;</p>
      </div>
    ),
  },
  {
    id: 'referral',
    question: 'Do I need a doctor’s referral?',
    answer: (
      <div className="space-y-3">
        <p><strong>No.</strong> In Ontario, physiotherapists are primary healthcare providers. You can book an assessment and start treatment immediately—no doctor&apos;s referral needed.</p>
        <p className="text-sm italic text-gray-500 mt-2">Note: Some extended health insurance plans still require referrals for reimbursement. Check with your provider before your visit.</p>
      </div>
    ),
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear?',
    answer: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Physiotherapy:</strong> Wear comfortable, loose-fitting clothing. Bring shorts (for hip/knee/ankle) or a tank top (for shoulder/neck), and athletic wear to change into.</li>
          <li><strong>Massage Therapy:</strong> No extra gear needed—we provide gowns and professional draping.</li>
        </ul>
        <p className="font-medium">Arriving early? Use our private changing room at no extra cost.</p>
      </div>
    ),
  },
  {
    id: 'parking',
    question: 'Is there parking?',
    answer: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Free Parking:</strong> Lot 7 (5 Cayuga Ave) — 1-2 min walk OR Lot 12 (5 Hiawatha Pkwy) — 1-3 min walk.</li>
          <li><strong>Street Parking:</strong> Directly in front. We&apos;ll reimburse you at the front desk—just show your ticket or parking app confirmation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'insurance',
    question: 'Is treatment covered by insurance?',
    answer: (
      <div className="space-y-3">
        <p><strong>Yes.</strong> All services are provided by registered professionals and covered under most extended health plans. We offer direct billing with major providers and handle MVA/WSIB claims directly.</p>
        <p>Before your first visit, ask your provider:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Total yearly coverage amount?</li>
          <li>Is there a deductible?</li>
          <li>Coverage limit per visit?</li>
          <li>Which services are included?</li>
        </ul>
        <p className="mt-2 font-medium">Bring your insurance card to your appointment. You’ll receive an itemized receipt via email for reimbursement.</p>
      </div>
    ),
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    answer: (
      <div className="space-y-3">
        <p>We accept <strong>Debit, Visa, and Mastercard</strong>.</p>
        <p>You’ll receive an itemized receipt via email immediately after your session to submit to your insurance provider.</p>
      </div>
    ),
  },
  {
    id: 'location',
    question: 'How do I find the clinic?',
    answer: (
      <div className="space-y-3">
        <p>We are conveniently located at <strong>Suite 300 - 268 Lakeshore Rd East, Mississauga, ON L5G 1H1</strong> in the heart of Port Credit.</p>
        <p>If you are using GPS, navigating directly to our address will bring you to our front door.</p>
        <p> <strong>Buzzer Instructions:</strong> At the entrance, enter 30 and then press the ring button. We will receive a call and let you in.</p>
        <p>If you require assistance with accessibility, please don&apos;t hesitate to contact our front desk prior to your arrival.</p>
      </div>
    ),
  },
  {
    id: 'ohip',
    question: 'Do you accept OHIP or ODSP?',
    answer: (
      <div className="space-y-3">
        <p><strong>No.</strong> We offer services through private pay or extended health insurance coverage only.</p>
        <p>Contact us for more details on using your insurance benefits efficiently.</p>
      </div>
    ),
  },
];
