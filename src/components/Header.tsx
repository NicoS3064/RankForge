import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="#" aria-label="RankForge - Home">
                RankForge
              </a>
            </div>
            
            <nav className="nav" aria-label="Main navigation">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection(link.href)}
                      type="button"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="header-cta">
              <button
                className="cta-button btn-primary"
                onClick={() => scrollToSection('#contact')}
                type="button"
              >
                Get a Free Audit
              </button>
            </div>
            
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="mobile-menu" id="mobile-menu">
              <nav aria-label="Mobile navigation">
                <ul className="mobile-nav-list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        className="mobile-nav-link"
                        onClick={() => scrollToSection(link.href)}
                        type="button"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className="mobile-cta-button btn-primary"
                      onClick={() => scrollToSection('#contact')}
                      type="button"
                    >
                      Get a Free Audit
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;