import React from 'react';
import { motion } from 'framer-motion';
import './MetricsBar.css';

interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export const MetricsBar: React.FC = () => {
  const metrics: Metric[] = [
    { label: 'Record TPS', value: '15.52M', suffix: 'Verified by CertiK' },
    { label: 'Gas Fees', value: '$0', suffix: 'Always free' },
    { label: 'Computors', value: '676', suffix: 'Quorum consensus' },
  ];

  return (
    <div className="metrics-bar" id="technology">
      {/* Intro Section */}
      <motion.div
        className="metrics-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="metrics-intro-title">Built on Qubic</h2>
        <p className="metrics-intro-text">
          Forget what you know about blockchain. Qubic delivers unprecedented speed and zero fees. That's why we're building tools here — no compromises, no limits.
        </p>
        <a
          href="https://qubic.org"
          target="_blank"
          rel="noopener noreferrer"
          className="metrics-intro-link"
        >
          Learn about Qubic →
        </a>
      </motion.div>

      {/* Metrics Grid */}
      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="metric-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
            {metric.suffix && <div className="metric-suffix">{metric.suffix}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
