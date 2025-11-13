import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`faq-item ${isOpen ? 'active' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'var(--bg-light)' }}
      >
        <span>{question}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="faq-answer-content">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How does ScamShield Ecosystem work?',
      answer: (
        <>
          <p>The ScamShield Ecosystem is an AI-powered solution that proactively combats scams through collaboration with telecommunications providers, financial institutions, and governments. Here's how it works:</p>
          <ol>
            <li><strong>Detect:</strong> Identifies scam calls and messages in real-time using advanced AI.</li>
            <li><strong>Engage:</strong> Redirects scammers to AI bots that disrupt their operations with lengthy conversations.</li>
            <li><strong>Analyse:</strong> Extracts insights from each interaction to uncover scammer tactics and methods.</li>
            <li><strong>Protect:</strong> Prevents scams before they happen, safeguarding users and building trust.</li>
          </ol>
        </>
      )
    },
    {
      question: 'Why not just block calls?',
      answer: (
        <p>Blocking calls is only a temporary solution. Scammers adapt quickly by switching numbers or leveraging new technologies. ScamShield takes a smarter approach by actively engaging scammers using AI-powered bots that waste their time and resources, making their operations less profitable. This not only disrupts their activities but also gathers real-time intelligence on their tactics, providing a more effective long-term solution.</p>
      )
    },
    {
      question: 'How is ScamShield Voice implemented?',
      answer: (
        <p>ScamShield integrates seamlessly into existing systems using SIP/RTP VoIP configurations, enabling telecom providers to effortlessly divert detected scam calls to our AI bots. This integration is highly flexible and can be deployed on-premises, in a private cloud, or as a hybrid solution. With a deployment time of less than a day, ScamShield supports major platforms like AWS, Azure, Google Cloud Platform, and more.</p>
      )
    },
    {
      question: 'What if scammers start using AI?',
      answer: (
        <p>If scammers begin using AI, it only strengthens the case for solutions like ScamShield. When both sides leverage advanced technology, the real advantage is that people are increasingly protected from direct contact with scammers. Our technology is built to adapt to evolving tactics, ensuring that as scammers grow more sophisticated, ScamShield continues to safeguard users effectively.</p>
      )
    },
    {
      question: 'How does ScamShield ensure privacy and compliance?',
      answer: (
        <>
          <p>ScamShield is built with privacy, security, and regulatory compliance at its core:</p>
          <ul>
            <li><strong>Data Anonymisation & Encryption:</strong> All information is anonymised and encrypted, with no PII stored.</li>
            <li><strong>Regulatory Compliance:</strong> Full compliance with GDPR, CCPA, and regional data protection laws.</li>
            <li><strong>AI Safety:</strong> Models trained exclusively on scam-related interactions with strict safety protocols.</li>
            <li><strong>Enterprise-Grade Security:</strong> End-to-end encryption, secure cloud infrastructure, and regular security audits.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

