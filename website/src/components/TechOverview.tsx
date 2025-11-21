import React from 'react';
import { motion } from 'framer-motion';
import './TechOverview.css';

interface TechFeature {
  title: string;
  description: string;
  highlight: string;
}

export const TechOverview: React.FC = () => {
  const features: TechFeature[] = [
    {
      title: 'Useful Proof of Work',
      description: 'Revolutionary mining that serves a purpose beyond securing the network. Mine Qubic while training AI models and earning Monero simultaneously.',
      highlight: 'AI + Mining',
    },
    {
      title: 'Quorum Consensus',
      description: 'Advanced consensus mechanism enabling unprecedented throughput and finality. 676 computors validate transactions in parallel.',
      highlight: '2s Finality',
    },
    {
      title: 'Record Performance',
      description: 'CertiK-verified 15.52M TPS with 40M+ capacity. Built from the ground up for massive scale without compromising decentralization.',
      highlight: '15.5M TPS',
    },
    {
      title: 'Zero-Fee Economy',
      description: 'Permanent zero gas fees for all transactions. Build applications without worrying about network costs or user friction.',
      highlight: '$0 Forever',
    },
  ];

  return (
    <section className="tech-section" id="technology">
      <div className="tech-container">
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Technology That Scales</h2>
          <p className="section-subtitle">
            Built by Come-from-Beyond, creator of NXT and IOTA
          </p>
        </motion.div>

        <div className="tech-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tech-highlight">{feature.highlight}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tech-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="https://docs.qubic.world" target="_blank" rel="noopener noreferrer" className="tech-button">
            Read Technical Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
};
