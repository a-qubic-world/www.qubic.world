import React from 'react';
import { motion } from 'framer-motion';
import { DevIcon } from '../assets/icons/ServiceIcons';
import './DeveloperSection.css';

interface Resource {
  title: string;
  description: string;
  link: string;
  external: boolean;
}

export const DeveloperSection: React.FC = () => {
  const resources: Resource[] = [
    {
      title: 'Documentation',
      description: 'Complete guides, API references, and tutorials to get started',
      link: 'https://docs.qubic.org',
      external: true,
    },
    {
      title: 'Whitepaper',
      description: 'Deep dive into Qubic\'s architecture and technical specifications',
      link: 'https://whitepaper.qubic.org',
      external: true,
    },
    {
      title: 'Qubic GitHub',
      description: 'Explore official Qubic repositories and contribute to the ecosystem',
      link: 'https://github.com/qubic',
      external: true,
    },
    {
      title: 'Qubic.world GitHub',
      description: 'Check out our community projects and website source code',
      link: 'https://github.com/a-qubic-world',
      external: true,
    },
    {
      title: 'Developer Tools',
      description: 'SDKs, libraries, and tools for building on Qubic',
      link: 'https://docs.qubic.org/tools',
      external: true,
    },
    {
      title: 'Community Support',
      description: 'Join our developer community for help and collaboration',
      link: 'https://discord.gg/qubic',
      external: true,
    },
  ];

  return (
    <section className="developer-section" id="developers">
      <div className="developer-container">
        <motion.div
          className="developer-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="developer-icon">
            <DevIcon size={100} />
          </div>
          <h2 className="section-title gradient-text">Ready to Join the Adventure?</h2>
          <p className="section-subtitle">
            Learn more about developing on Qubic with these resources. We got you covered. Join developers building the next generation of blockchain applications.
          </p>
        </motion.div>

        <div className="developer-content">
          <motion.div
            className="developer-resources"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Resources</h3>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  className="resource-card"
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h4>{resource.title}</h4>
                  <p>{resource.description}</p>
                  <span className="resource-arrow">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
