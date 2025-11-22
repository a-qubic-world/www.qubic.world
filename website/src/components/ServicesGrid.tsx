import React from 'react';
import { motion } from 'framer-motion';
import { QNSIcon, NFTIcon, StatsIcon } from '../assets/icons/ServiceIcons';
import './ServicesGrid.css';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  status?: 'live' | 'coming-soon';
}

export const ServicesGrid: React.FC = () => {
  const services: Service[] = [
    {
      id: 'qns',
      icon: <QNSIcon size={80} />,
      title: 'QNS Domain Service',
      description: 'Human-readable addresses for Qubic. Replace complex wallet addresses with simple, memorable names.',
      link: '/domain',
      status: 'coming-soon',
    },
    {
      id: 'nft',
      icon: <NFTIcon size={80} />,
      title: 'NFT Gallery',
      description: 'Explore Quties and other NFT collections on QubicBay. Discover, trade, and showcase digital art.',
      link: '/nft',
      status: 'coming-soon',
    },
    {
      id: 'stats',
      icon: <StatsIcon size={80} />,
      title: 'Network Statistics',
      description: 'Real-time network performance metrics, TPS analytics, mining data, and network insights.',
      link: '/statistics',
      status: 'coming-soon',
    },
  ];

  return (
    <section className="services-section" id="products">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Our Products</h2>
          <p className="section-subtitle">
            Community-built tools on the world's fastest blockchain
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">
                {service.status === 'coming-soon' ? 'Get Notified' : 'Explore →'}
              </a>
              {service.status === 'coming-soon' && (
                <span className="coming-soon-badge">Coming Soon</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
