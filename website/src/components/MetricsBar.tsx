import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MetricsBar.css';

interface TickerData {
  ticker: {
    last: string;
    high: string;
    low: string;
  };
}

interface Metric {
  label: string;
  value: string;
  suffix?: string;
  live?: boolean;
}

export const MetricsBar: React.FC = () => {
  const [priceData, setPriceData] = useState<TickerData | null>(null);

  useEffect(() => {
    fetch('/api/ticker')
      .then((response) => response.json())
      .then((data: TickerData) => setPriceData(data))
      .catch((error) => console.error('Failed to fetch ticker:', error));
  }, []);

  const metrics: Metric[] = [
    { label: 'Record TPS', value: '15.52M', suffix: 'Verified by CertiK' },
    { label: 'Gas Fees', value: '$0', suffix: 'Always free' },
    { label: 'Capacity', value: '40M+', suffix: 'TPS' },
    {
      label: 'QUBIC Price',
      value: priceData ? `$${priceData.ticker.last}` : '...',
      suffix: 'USDT',
      live: true,
    },
  ];

  return (
    <div className="metrics-bar">
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
            <div className="metric-value">
              {metric.value}
              {metric.live && <span className="live-indicator"></span>}
            </div>
            <div className="metric-label">{metric.label}</div>
            {metric.suffix && <div className="metric-suffix">{metric.suffix}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
