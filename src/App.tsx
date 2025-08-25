import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initScrollAnimations } from './utils/scrollAnimations';

import './styles/global.css';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const scrollObserver = initScrollAnimations();
    
    // Cleanup on unmount
    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
