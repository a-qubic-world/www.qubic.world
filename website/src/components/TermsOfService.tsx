import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import './LegalPage.css';

export const TermsOfService: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mai' + 'lto:' + 'coding' + '@' + 'qubic.world';
  };

  return (
    <>
      <Navigation />
      <div className="legal-container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: November 27, 2024</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using qubic.world, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>
              qubic.world provides web-based services built on the Qubic blockchain, including but not limited to QNS Domains and NFT Gallery. Our services are subject to change and may be modified, suspended, or discontinued at any time.
            </p>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate information when signing up</li>
              <li>Maintain the security of your accounts and wallets</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt our services</li>
              <li>Not engage in any activity that could harm our systems or other users</li>
            </ul>
          </section>

          <section>
            <h2>4. Blockchain Transactions</h2>
            <p>
              You acknowledge that blockchain transactions are irreversible. We are not responsible for any losses resulting from incorrect wallet addresses, lost private keys, or failed transactions. You are solely responsible for securing your wallet credentials.
            </p>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              All content on qubic.world, including logos, designs, text, and software, is the property of qubic.world or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section>
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, qubic.world shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless qubic.world and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section>
            <h2>9. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              For questions about these terms, please contact us at <button onClick={handleEmailClick} className="email-link">coding@qubic.world</button>.
            </p>
          </section>

          <a href="/" className="legal-home">Back to Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
};
