import React from 'react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "RankForge transformed our online presence completely. We went from page 3 to consistently ranking in the top 3 for our main keywords. The ROI has been incredible.",
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      quote: "The team's expertise in technical SEO saved us months of trial and error. Our organic traffic doubled in just 4 months, and we're seeing real business impact.",
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "GrowthLab",
      avatar: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      quote: "Professional, data-driven, and results-focused. RankForge doesn't just promise results – they deliver them. Our lead generation has increased by 300%.",
      name: "Emma Rodriguez",
      role: "Head of Digital Marketing",
      company: "ScaleUp Ventures",
      avatar: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header text-center">
          <h2>What Our Clients Say</h2>
          <p className="lead">
            Don't just take our word for it. Here's what business leaders say about working with RankForge.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 21C3 17.134 3 15.201 3.87868 13.87868C4.75736 12.5563 6.69036 12.5563 10.5563 12.5563H11.4437C15.3096 12.5563 17.2426 12.5563 18.1213 13.87868C19 15.201 19 17.134 19 21H3Z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <path
                      d="M9 12C9 9.79086 10.7909 8 13 8V8C15.2091 8 17 9.79086 17 12V12H9V12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 21C3 17.134 3 15.201 3.87868 13.87868C4.75736 12.5563 6.69036 12.5563 10.5563 12.5563H11.4437C15.3096 12.5563 17.2426 12.5563 18.1213 13.87868C19 15.201 19 17.134 19 21H3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;