// No React imports needed for this component
import '../styles/Hero.css';

const Hero = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FallbackIllustration = () => (
    <div className="hero-fallback">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fallback-svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.2)" />
          </filter>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="url(#gradient)"
          filter="url(#shadow)"
          opacity="0.9"
        />
        <text
          x="150"
          y="165"
          textAnchor="middle"
          fill="white"
          fontSize="72"
          fontWeight="800"
          fontFamily="system-ui"
        >
          R
        </text>
      </svg>
    </div>
  );

  return (
    <section className="hero section" id="main">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">🚀 #1 SEO Agency</span>
            </div>
            <h1 className="hero-title">
              Dominate Search Results &<br />
              <span className="hero-shiny-text">Drive Real Growth</span>
            </h1>
            <p className="hero-subtitle">
              We help ambitious businesses climb to page one, drive qualified traffic, and convert visitors into customers. Get measurable results in 90 days or less.
            </p>
            <div className="hero-buttons">
              <button
                className="hero-cta-primary"
                onClick={() => scrollToSection('#contact')}
                type="button"
              >
                Get Your Free SEO Audit
              </button>
              <button
                className="hero-cta-secondary"
                onClick={() => scrollToSection('#pricing')}
                type="button"
              >
                View Our Packages
              </button>
            </div>

          </div>
          
          <div className="hero-visual">
            <div className="hero-graphic">
              <div className="graphic-container">
                <div className="floating-elements">
                  <div className="element element-1">
                    <div className="icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>Speed Boost</span>
                  </div>
                  <div className="element element-2">
                    <div className="icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>Top Rankings</span>
                  </div>
                  <div className="element element-3">
                    <div className="icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 7l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Growth</span>
                  </div>
                </div>
                <div className="central-graphic">
                  <div className="search-visualization">
                    <div className="search-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="gradient-orbs">
                  <div className="orb orb-1"></div>
                  <div className="orb orb-2"></div>
                  <div className="orb orb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;