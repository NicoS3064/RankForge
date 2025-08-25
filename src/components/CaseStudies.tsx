import React from 'react';
import '../styles/CaseStudies.css';

const CaseStudies: React.FC = () => {
  const results = [
    {
      stat: '+250%',
      metric: 'Organic Traffic',
      timeframe: 'in 6 months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12L12 7L16 11L21 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      stat: '40+',
      metric: 'Keywords',
      timeframe: 'in top-3 rankings',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      stat: '5.2x',
      metric: 'Average ROI',
      timeframe: 'across all clients',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="case-studies section" id="case-studies">
      <div className="container">
        <div className="case-studies-header text-center">
          <h2>Proven Results</h2>
          <p className="lead">
            Real outcomes from our SEO campaigns that drive measurable business growth.
          </p>
        </div>
        
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-content">
                <div className="result-icon">
                  {result.icon}
                </div>
                <div className="result-stat">{result.stat}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-timeframe">{result.timeframe}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="disclaimer">
          <p className="text-muted">
            * Sample client results. Performance varies based on industry, competition, and implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;