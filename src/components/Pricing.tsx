import React from 'react';
import '../styles/Pricing.css';

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '499',
      period: '/month',
      description: 'Perfect for small businesses getting started with SEO',
      features: [
        'Keyword research & strategy',
        'On-page optimisation (up to 10 pages)',
        'Technical SEO audit',
        'Monthly performance report',
        'Email support',
        'Google Analytics setup',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '1,200',
      period: '/month',
      description: 'Ideal for scaling companies ready to dominate search',
      features: [
        'Everything in Starter',
        'Advanced keyword targeting',
        'Content strategy & creation',
        'Link building campaign',
        'Competitor analysis',
        'Bi-weekly strategy calls',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large teams and complex needs',
      features: [
        'Everything in Growth',
        'Multi-site SEO management',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Custom integrations',
        'Weekly strategy sessions',
        '24/7 priority support',
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing section section-light" id="pricing">
      <div className="container">
        <div className="pricing-header text-center">
          <h2>Choose Your Growth Plan</h2>
          <p className="lead">
            Transparent pricing with no hidden fees. All plans include our proven SEO methodology.
          </p>
        </div>
        
        <div className="pricing-grid grid grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`pricing-card card pricing-card-animate ${tier.popular ? 'popular' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
              {tier.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="pricing-header">
                <h3 className="pricing-title">{tier.name}</h3>
                <div className="pricing-price">
                  {tier.price !== 'Custom' && <span className="currency">$</span>}
                  <span className="amount">{tier.price}</span>
                  {tier.period && <span className="period">{tier.period}</span>}
                </div>
                <p className="pricing-description">{tier.description}</p>
              </div>
              
              <ul className="pricing-features">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-feature">
                    <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pricing-cta">
                <button
                  onClick={scrollToContact}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  type="button"
                >
                  Start Today
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pricing-footer text-center">
          <p className="text-muted">
            All plans include a 30-day money-back guarantee. No setup fees or long-term contracts required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;