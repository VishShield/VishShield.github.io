import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './HowItWorks.css';

const TimelineItem = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isEven ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="timeline-content">
        <motion.div
          className="timeline-icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const timelineData = [
    {
      icon: '⚠️',
      title: 'Scam has become a global epidemic',
      description: 'Scam is big business. Every day, millions of scammers are on the move, using phones, text and other digital channels to defraud individuals and organisations.'
    },
    {
      icon: '🎯',
      title: "They're targeting our most vulnerable communities",
      description: "Whether it's a call, SMS, or messaging app — scammers relentlessly target people around the world. And they're getting more and more sophisticated."
    },
    {
      icon: '💰',
      title: "It's costing businesses and their customers trillions",
      description: "Each attempt has the potential to wipe out life savings or damage a brand's hard-earned reputation. Traditional methods struggle to keep up as scammers adapt."
    },
    {
      icon: '🤖',
      title: 'A new paradigm in scam defence',
      description: "Rather than reacting after the damage is done, we put our armies of lifelike AI bots right in the firing line of scammers, disrupting their operations in real-time."
    },
    {
      icon: '🛡️',
      title: 'Proactively shielding businesses and customers from loss',
      description: 'Our bots have all the time in the world to divert and distract fraudsters away from real victims. Every minute counts.'
    },
    {
      icon: '📊',
      title: 'Turning every interaction into valuable intelligence',
      description: 'Every intercepted scam feeds our intelligence engine, giving partners unmatched intelligence and alerts into evolving threats.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The next generation of fraud prevention and intelligence
        </motion.h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

