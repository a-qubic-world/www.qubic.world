import React from 'react';
import { LogoIcon } from '../assets/icons/LogoIcon';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'QNS Domains', url: '/domain' },
      { label: 'NFT Gallery', url: '/nft' },
      { label: 'Statistics', url: '/statistics' },
    ],
    developers: [
      { label: 'Documentation', url: 'https://docs.qubic.world', external: true },
      { label: 'GitHub', url: 'https://github.com/qubic', external: true },
      { label: 'API Reference', url: 'https://docs.qubic.world/api', external: true },
    ],
    community: [
      { label: 'Twitter', url: 'https://twitter.com/qubic_world', external: true },
      { label: 'Discord', url: 'https://discord.gg/qubic', external: true },
      { label: 'Telegram', url: 'https://t.me/qubic', external: true },
    ],
    resources: [
      { label: 'About Qubic', url: 'https://qubic.org', external: true },
      { label: 'Whitepaper', url: 'https://docs.qubic.world', external: true },
      { label: 'Blog', url: 'https://medium.com/@qubic', external: true },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <LogoIcon size={50} />
              <div className="footer-logo-text">
                <span className="footer-logo-qubic">qubic</span>
                <span className="footer-logo-world">.world</span>
              </div>
            </div>
            <p className="footer-tagline">
              Community hub for building on Qubic
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Developers</h4>
              <ul>
                {footerLinks.developers.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Qubic.world. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
