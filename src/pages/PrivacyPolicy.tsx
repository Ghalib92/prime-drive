import '../styles/pages.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 2026</p>
      </div>

      <div className="container legal-container">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Prime Drive Motors ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and services. Please read this policy carefully. By using our Service, you consent to the practices described herein.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li>Name, phone number, and email address when submitting inquiries or contact forms</li>
            <li>Vehicle details when submitting a listing via our Sell page</li>
            <li>Payment details for event bookings or hire deposits (processed securely)</li>
            <li>Messages and communications you send to us via WhatsApp, email, or forms</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>Browser type, device type, and operating system</li>
            <li>IP address and approximate geographic location</li>
            <li>Pages visited, time spent on the site, and referring URLs</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and facilitate vehicle sales, hire, and event bookings</li>
            <li>Process and manage your bookings and transactions</li>
            <li>Send you relevant updates, confirmations, and service communications</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations and resolve disputes</li>
            <li>Prevent fraud and ensure the security of our platform</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Sharing of Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and delivering services (e.g., payment processors, email platforms), subject to confidentiality agreements.
            </li>
            <li>
              <strong>Vehicle Sellers/Owners:</strong> When you express interest in a vehicle, your contact details may be shared with the relevant seller or agent to facilitate communication.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law, court order, or governmental authority.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies — small text files stored on your device — to enhance your browsing experience and gather analytics data. You can control cookie settings through your browser. Disabling cookies may affect the functionality of certain parts of our site.
          </p>
          <p>Types of cookies we use:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include SSL encryption for data transmission and restricted access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Inquiry and contact data is typically retained for up to 2 years. You may request deletion of your data at any time by contacting us.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Your Rights</h2>
          <p>Under applicable Kenyan data protection law, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Object to or restrict how we process your data</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>To exercise any of these rights, please contact us at privacy@primedrive.co.ke.</p>
        </section>

        <section className="legal-section">
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (e.g., WhatsApp, social media). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies separately.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Children's Privacy</h2>
          <p>
            Our Service is not directed to children under the age of 18. We do not knowingly collect personal data from minors. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Continued use of our Service after changes constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contact Us</h2>
          <p>For any privacy-related questions or requests, please contact our Data Protection Officer:</p>
          <ul>
            <li><strong>Email:</strong> privacy@primedrive.co.ke</li>
            <li><strong>Phone:</strong> +254 712 345 678</li>
            <li><strong>Address:</strong> Prime Drive Motors, Nairobi, Kenya</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
