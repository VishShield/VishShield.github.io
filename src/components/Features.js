import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Features.css';

const FeatureCard = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -15, boxShadow: 'var(--shadow-xl)' }}
    >
      <motion.div
        className="feature-icon"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Proactive Disruption',
      description: 'VishShield detects scam calls and texts at the source and engages attackers before they reach real victims. Our army of AI bots disrupt conversations in real-time - misleading scammers, wasting their time, and derailing fraud attempts.'
    },
    {
      icon: '🔍',
      title: 'Real-Time Intelligence Extraction',
      description: "Every scam attempt becomes a rich source of intelligence. VishShield captures scammers' tactics and attack vectors as they unfold, including bank account details, crypto wallet addresses, phone numbers, and more."
    },
    {
      icon: '📈',
      title: 'Actionable Insights',
      description: 'We turn raw scam activity into clear, strategic insight. With customisable dashboards, alerts, and analytics built for decision-making, VishShield empowers teams to stay ahead of evolving threats.'
    }
  ];

  return (
    <section className="features" id="products">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What sets us apart
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Next Generation of Scam Prevention and Intelligence
        </motion.p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

