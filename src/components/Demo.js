import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Demo.css';

const DemoCard = ({ title, description, type, delay }) => {
  return (
    <motion.div
      className="demo-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -15, boxShadow: 'var(--shadow-xl)' }}
    >
      <motion.div
        className={`demo-thumbnail ${type === 'text' ? 'text-demo' : ''}`}
        whileHover={{ scale: 1.05 }}
      >
        {type === 'voice' ? (
          <motion.div
            className="play-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            ▶️
          </motion.div>
        ) : (
          <span>{type === 'text' ? '💬' : '🎙️'}</span>
        )}
      </motion.div>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
};

const Demo = () => {
  const [activeTab, setActiveTab] = useState('voice');

  const voiceDemos = [
    {
      title: 'AI vs. Amazon Security & Debit Card Scams',
      description: 'Our male AI bot challenges scammers, demonstrating how AI-powered intervention can prevent financial fraud.',
      type: 'voice'
    },
    {
      title: 'Neutralising Tech Support Scams',
      description: 'Our Australian-accented female AI bot takes on fraudulent callers, showcasing AI-driven scam prevention.',
      type: 'voice'
    },
    {
      title: '26 Minutes of Scammer Disruption',
      description: 'Our AI bot strategically ties up a fraudster in a long conversation, showcasing the effectiveness of AI.',
      type: 'voice'
    }
  ];

  const textDemos = [
    {
      title: 'Extraction of bank account',
      description: 'Extraction of bank account and cryptocurrency wallet address from scammer conversations.',
      type: 'text'
    },
    {
      title: 'Extraction of credit card number',
      description: 'Extraction of credit card number, bank account details, and Western Union account information.',
      type: 'text'
    },
    {
      title: 'Extraction of BSB',
      description: 'Extraction of BSB and account details from sophisticated phishing attempts.',
      type: 'text'
    }
  ];

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our technology in action
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Listen to real examples of our bots in action, outsmarting scammers in live conversations.
        </motion.p>

        <div className="demo-tabs">
          <motion.button
            className={`tab-btn ${activeTab === 'voice' ? 'active' : ''}`}
            onClick={() => setActiveTab('voice')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voice AI
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Text AI
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="demo-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {(activeTab === 'voice' ? voiceDemos : textDemos).map((demo, index) => (
              <DemoCard
                key={index}
                title={demo.title}
                description={demo.description}
                type={demo.type}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Demo;

