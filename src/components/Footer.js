import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Features', href: '#products' },
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Demos', href: '#demo' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { name: 'Why Choose Us?', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Help Center',
      links: [
        { name: 'FAQ', href: '#faq' },
        { name: 'Support', href: '#contact' },
        { name: 'Documentation', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: '#' },
    { icon: <FiTwitter size={20} />, href: '#' },
    { icon: <FiLinkedin size={20} />, href: '#' },
    { icon: <FiMail size={20} />, href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <span className="logo-icon">🛡️</span>
              <span className="logo-text">VishShield AI</span>
            </div>
            <p>
              VishShield AI isn't just a defence against scams; it's a mission to dismantle
              the business model of scammers globally.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 ScamShield AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

