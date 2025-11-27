import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import './LegalPage.css';

export const PrivacyPolicy: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mai' + 'lto:' + 'coding' + '@' + 'qubic.world';
  };

  return (
    <>
      <Navigation />
      <div className="legal-container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: November 27, 2024</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              qubic.world ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li><strong>Email address:</strong> When you sign up for our waitlist or notifications</li>
              <li><strong>Product preferences:</strong> Which products you've expressed interest in</li>
              <li><strong>Usage data:</strong> Basic analytics about how you interact with our website</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Send you updates about products you've signed up for</li>
              <li>Notify you when new features or products launch</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Storage</h2>
            <p>
              Your data is stored securely on our self-hosted infrastructure. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2>5. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your data only with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Unsubscribe:</strong> Opt out of marketing communications at any time using the unsubscribe link in our emails</li>
            </ul>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              We use essential cookies to ensure the basic functionality of our website. We do not use tracking cookies for advertising purposes.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your personal data, please contact us at <button onClick={handleEmailClick} className="email-link">coding@qubic.world</button>.
            </p>
          </section>

          <a href="/" className="legal-home">Back to Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
};
