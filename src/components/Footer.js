import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <footer className={`footer ${inView ? 'fade-in' : ''}`} ref={ref}>
      <div className="footer-content">
        <h3 className="footer-title">Software Solutions Inc.</h3>
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Services</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>
        <p className="footer-copyright">© 2025 Software Solutions Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;