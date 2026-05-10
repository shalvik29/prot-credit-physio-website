import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy & Terms of Use | Port Credit Physio',
    description: 'Privacy Policy and Terms of Use for Port Credit Physio and Rehab.',
    alternates: {
        canonical: 'https://www.portcreditphysio.ca/privacy-policy',
    },
    openGraph: {
        url: 'https://www.portcreditphysio.ca/privacy-policy',
        title: 'Privacy Policy & Terms of Use | Port Credit Physio',
        description: 'Privacy Policy and Terms of Use for Port Credit Physio and Rehab.',
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white-shade min-h-screen pb-16 pt-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-lg">
                <h1 className="text-4xl font-bold mb-4 text-navy-dark">Privacy Policy & Terms of Use</h1>
                <p className="text-gray-500 mb-8 pb-8 border-b border-gray-200"><strong>Last Updated:</strong> May 9, 2026</p>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Welcome to the Port Credit Physio and Rehab website. By continuing to browse and use this website, you agree to comply with and be bound by the following Privacy Policy and Terms of Use.
                    </p>
                    <p>
                        Port Credit Physio and Rehab ("we," "us," or "our") is committed to protecting the privacy, confidentiality, and security of our clients' personal and health information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with the Personal Health Information Protection Act (PHIPA) and the Personal Information Protection and Electronic Documents Act (PIPEDA).
                    </p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Information We Collect</h2>
                    <p>To provide you with safe and effective healthcare services, we collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Contact & Identity Information:</strong> Name, date of birth, address, phone number, email address, emergency contact, and health card number.</li>
                        <li><strong>Health Information:</strong> Medical history, physician referrals, diagnostic imaging, treatment plans, progress notes, and details regarding any current injuries or symptoms.</li>
                        <li><strong>Billing & Financial Information:</strong> Insurance provider details, extended health benefits information, and payment card details.</li>
                        <li><strong>Digital Information:</strong> Information automatically collected through our website (see "Cookies and Tracking" below).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">How We Use Your Information</h2>
                    <p>We collect and use your personal and health information strictly to the extent necessary to deliver our services. This includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Healthcare Delivery:</strong> Assessing your condition, creating personalized treatment plans, and delivering physiotherapy and rehabilitation services.</li>
                        <li><strong>Scheduling and Communication:</strong> Booking appointments, sending appointment reminders, responding to your inquiries, and sending promotional communications (where consent is provided). You may opt-out of marketing communications at any time by unsubscribing or contacting us.</li>
                        <li><strong>Billing and Administration:</strong> Processing payments, submitting claims to your insurance provider (with your consent), and maintaining accurate patient records.</li>
                        <li><strong>Internal Operations:</strong> Quality assurance, risk management, and improving the services we offer at our clinic.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Data Retention and Security</h2>
                    <p>We believe that securing your personal information is a vital part of our practice.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Security Safeguards:</strong> We employ reasonable administrative, technical, and physical safeguards to protect your personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification.</li>
                        <li><strong>Data Retention:</strong> We retain your personal health information for as long as necessary to fulfill the purposes for which it was collected, and to comply with legal and regulatory record-keeping requirements (e.g., maintaining patient records for the period mandated by our professional regulatory colleges). Once information is no longer needed, it is securely destroyed or de-identified.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Information Sharing and Disclosure</h2>
                    <p>We may share your information with trusted third parties to facilitate our services, provided they agree to adhere to privacy standards comparable to our own. These third parties include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Healthcare Partners:</strong> Other healthcare professionals involved in your circle of care (e.g., your family doctor), unless you instruct us otherwise.</li>
                        <li><strong>Service Providers:</strong> Third-party vendors we use for clinical management, appointment scheduling, billing, marketing, and call tracking integrations.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as a business asset.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information when required or permitted by law, such as in response to a subpoena or to prevent serious harm.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Cookies and Digital Tracking</h2>
                    <p>Our website uses cookies and similar tracking technologies to analyze website traffic, optimize our marketing efforts, and improve user experience.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Functional & Analytical Cookies (GA4):</strong> We use Google Analytics 4 (GA4) to track website interactions, page views, lead tracking, and conversions. This helps us understand how visitors use our site and improve our services.</li>
                        <li><strong>Advertising & Pixel Tracking:</strong> We use Meta (Facebook) and Google Ads pixels for conversion tracking and personalized advertising. These tools collect data about your browsing behavior on our site to show you relevant ads on other platforms.</li>
                        <li><strong>Form & Call Integrations:</strong> Information submitted through website forms or integrated call tracking systems is securely recorded to help us manage leads and respond to your inquiries effectively.</li>
                    </ul>
                    <p>You can manage or disable cookies through your browser settings at any time, though this may affect your ability to use certain features of our website.</p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Third-Party Links</h2>
                    <p>
                        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.
                    </p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Children's Privacy</h2>
                    <p>
                        We do not knowingly collect or use personal data from children under 13 years of age without obtaining verifiable consent from a parent or guardian. If we learn that we have collected personal data from a child under 13 without consent, the data will be deleted as soon as possible.
                    </p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Your Rights to Access Your Data</h2>
                    <p>As a client of Port Credit Physio and Rehab, you have specific rights regarding your personal health information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Access:</strong> You have the right to request access to your health record. We will respond to written requests within 30 days.</li>
                        <li><strong>Correction:</strong> If you believe there is an error or omission in your health record, you have the right to request a correction.</li>
                        <li><strong>Consent:</strong> You have the right to withdraw or withhold consent for the collection, use, or disclosure of your information, subject to legal and contractual restrictions. We will explain how your decision may impact our ability to provide care.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Limitation of Liability & Terms of Use</h2>
                    <p>
                        The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
                    </p>
                    <p>
                        While we take all reasonable precautions to safeguard your personal information, no method of transmission over the internet or electronic storage is completely secure. By using our website and services, you acknowledge and agree that Port Credit Physio and Rehab, its practitioners, staff, and affiliates are not liable for any unauthorized access, use, disclosure, or loss of your personal information resulting from factors beyond our control, including but not limited to cyber-attacks, third-party breaches, or user negligence.
                    </p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy & Terms of Use from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this page periodically to stay informed about how we are protecting your information.
                    </p>

                    <h2 className="text-2xl font-semibold text-navy-dark mt-8 mb-4">Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, wish to access your records, or have a privacy concern, please contact us:</p>
                    <div className="bg-white-shade p-6 rounded-lg mt-6 border border-gray-200">
                        <p className="font-semibold text-navy-dark text-lg mb-2">Port Credit Physio and Rehab</p>
                        <p><strong>Email:</strong> <a href="mailto:info@portcreditphysio.ca" className="text-steel-blue hover:underline">info@portcreditphysio.ca</a></p>
                        <p><strong>Phone:</strong> <a href="tel:2894978334" className="text-steel-blue hover:underline">(289) 497-8334</a></p>
                        <p><strong>Address:</strong> 300 - 268 Lakeshore Rd East, Mississauga, ON L5G 1H1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
