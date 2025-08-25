// Scroll Animation Utilities

// Intersection Observer for scroll animations
class ScrollAnimationObserver {
  private observer: IntersectionObserver;
  private animatedElements = new Set<Element>();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
            entry.target.classList.add('animate');
            this.animatedElements.add(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  // Observe elements for scroll animations
  observe(element: Element) {
    this.observer.observe(element);
  }

  // Initialize scroll animations for the page
  init() {
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('animate-on-scroll');
      this.observe(section);
    });

    // Observe cards with stagger animation
    const cardSelectors = [
      '.service-card',
      '.pricing-card',
      '.testimonial-card',
      '.contact-card'
    ];

    cardSelectors.forEach((selector) => {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card) => {
        card.classList.add('stagger-animation');
        this.observe(card);
      });
    });

    // Observe other animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      this.observe(element);
    });
  }

  // Cleanup
  disconnect() {
    this.observer.disconnect();
    this.animatedElements.clear();
  }
}

// Smooth scroll to section
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Adjust based on your header height
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Initialize scroll animations when DOM is ready
export const initScrollAnimations = () => {
  const scrollObserver = new ScrollAnimationObserver();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      scrollObserver.init();
    });
  } else {
    scrollObserver.init();
  }

  return scrollObserver;
};

// Export the observer class for manual usage
export { ScrollAnimationObserver };