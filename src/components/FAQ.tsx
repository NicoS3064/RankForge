import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy, and results typically begin to show within 3-6 months. However, some improvements like technical fixes and on-page optimizations can have immediate impacts. We provide monthly reports so you can track progress and see the gradual improvements in rankings, traffic, and conversions."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide comprehensive monthly reports that include keyword rankings, organic traffic growth, technical SEO improvements, backlink acquisition, and conversion tracking. You'll also receive quarterly strategy reviews and have access to a client dashboard where you can monitor progress in real-time."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We offer flexible engagement options. While SEO works best as a long-term strategy (we recommend at least 6-12 months), we don't lock you into lengthy contracts. Our Starter and Growth plans are month-to-month after an initial 3-month commitment, and you can cancel with 30 days' notice."
    },
    {
      question: "What deliverables can I expect each month?",
      answer: "Monthly deliverables include: keyword research and content recommendations, technical SEO improvements, on-page optimization updates, link building activities, performance reports, and strategic recommendations for the following month. Enterprise clients also receive quarterly strategy sessions and priority support."
    },
    {
      question: "How do you approach link building?",
      answer: "We focus on earning high-quality, relevant backlinks through digital PR, content marketing, and relationship building. Our approach includes creating linkable assets, guest posting on authoritative sites, broken link building, and securing mentions in industry publications. We never use black-hat techniques or link farms."
    },
    {
      question: "Can I cancel my SEO services at any time?",
      answer: "Yes, you can cancel your services with 30 days' written notice after completing the initial commitment period (3 months for Starter and Growth plans). We'll provide a transition document with all the work completed and recommendations for maintaining your SEO progress."
    }
  ];

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq-header text-center">
          <h2>Frequently Asked Questions</h2>
          <p className="lead">
            Got questions about our SEO services? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>
        
        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={openItems.includes(index)}
                  onClick={() => toggleItem(index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`faq-icon ${openItems.includes(index) ? 'open' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                
                {openItems.includes(index) && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-footer text-center">
          <p>Still have questions?</p>
          <button
            className="faq-contact-button cta-button btn-primary"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Get in touch with our team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;