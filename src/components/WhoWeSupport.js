import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhoWeSupport.css';

const WhoWeSupport = () => {
  const [activeTab, setActiveTab] = useState('telcos');

  const supportData = {
    telcos: {
      title: 'Empower your network with real-time detection',
      description: 'VishShield ensures a safer, cleaner, and more trusted network for you and your customers. Our technology integrates seamlessly with your existing infrastructure to provide proactive scam prevention at scale.',
      benefits: [
        'Real-time call and SMS interception',
        'Seamless SIP/RTP integration',
        'Cloud-agnostic deployment',
        'Less than 24-hour setup'
      ]
    },
    financial: {
      title: 'Protect your customers and reputation',
      description: 'Stay ahead of scammers tactics and deliver a secure, trusted banking experience. VishShield\'s cutting-edge technology helps you prevent fraud before it impacts your customers.',
      benefits: [
        'Crypto wallet detection',
        'Account takeover prevention',
        'Real-time fraud alerts',
        'Compliance-ready intelligence'
      ]
    },
    government: {
      title: 'Build a safer, scam-free society',
      description: 'VishShield provides governments and law enforcement with the intelligence and tools needed to protect citizens, optimise investigations, and combat organised fraud networks.',
      benefits: [
        'Cross-border intelligence sharing',
        'Network mapping and analysis',
        'Evidence collection for prosecution',
        'Public protection at scale'
      ]
    }
  };

  const partners = ['🏢 TechCorp', '🏦 GlobalBank', '📱 Telecom Plus', '🛡️ SecureNet', '🌐 DataShield', '🔒 CyberGuard'];

  return (
    <section className="who-we-support" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who we support
        </motion.h2>

        <div className="support-tabs">
          {Object.keys(supportData).map((key) => (
            <motion.button
              key={key}
              className={`support-tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {key === 'telcos' ? 'Telcos' : key === 'financial' ? 'Financial Services' : 'Government'}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="support-content"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <div className="support-info">
              <h3>{supportData[activeTab].title}</h3>
              <p>{supportData[activeTab].description}</p>
              <ul className="benefit-list">
                {supportData[activeTab].benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    ✓ {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="partners-section">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by industry leaders
          </motion.h3>
          <div className="partners-marquee">
            <div className="marquee-content">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="partner-logo">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupport;

