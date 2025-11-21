import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as IconTwitter } from '../assets/icn-twitter.svg';
import { ReactComponent as IconDiscord } from '../assets/icn-discord.svg';
import './Community.css';

export const Community: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <IconTwitter />,
      url: 'https://twitter.com/qubic_world',
      description: 'Follow for latest updates',
    },
    {
      name: 'Discord',
      icon: <IconDiscord />,
      url: 'https://discord.gg/qubic',
      description: 'Join the community',
    },
  ];

  return (
    <section className="community-section" id="community">
      <div className="community-container">
        <motion.div
          className="community-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Join the Community</h2>
          <p className="section-subtitle">
            Connect with developers, miners, and enthusiasts building the future of blockchain
          </p>
        </motion.div>

        <div className="community-content">
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-icon">{link.icon}</div>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="community-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-value">676</div>
              <div className="stat-label">Active Computors</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Global</div>
              <div className="stat-label">Decentralized Network</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Community Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
