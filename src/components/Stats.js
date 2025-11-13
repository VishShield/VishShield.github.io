import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const StatItem = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target = parseFloat(number);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  const formatNumber = (num) => {
    if (number.includes('M+')) {
      return `${num.toFixed(1)}M+`;
    } else if (number.includes('K+')) {
      return `${Math.floor(num)}K+`;
    } else if (number.includes('%')) {
      return `${num.toFixed(1)}%`;
    } else if (number.includes('B+')) {
      return `$${num.toFixed(1)}B+`;
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="stat-number">{formatNumber(count)}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { number: '10M+', label: 'Scams Intercepted' },
    { number: '500K+', label: 'Hours Wasted by Scammers' },
    { number: '2B+', label: 'Protected Value' },
    { number: '99.9%', label: 'Detection Accuracy' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

