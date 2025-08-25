import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          
          <div className="footer-nav">
            <div className="footer-nav-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                  >
                    Keyword Research
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                  >
                    On-Page SEO
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                  >
                    Link Building
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                  >
                    SEO Audits
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-nav-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="footer-link"
                  >
                    Our Process
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('case-studies')}
                    className="footer-link"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="footer-link"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="footer-link"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-nav-section">
              <h4>Support</h4>
              <ul>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="footer-link"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="footer-link"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="mailto:hello@rankforge.com.au" className="footer-link">
                    Email Support
                  </a>
                </li>
                <li>
                  <a href="tel:+61385908200" className="footer-link">
                    Phone Support
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-nav-section">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <span className="footer-link">24 Lauren Place</span>
                </li>
                <li>
                  <span className="footer-link">Chandler</span>
                </li>
                <li>
                  <a href="tel:+61466115599" className="footer-link">0466 115 599</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>
                © {currentYear} RankForge. All rights reserved.
              </p>
              <p className="footer-abn">
                ABN: 12 345 678 901
              </p>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
              <a href="#" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;