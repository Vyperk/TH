import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GameServers from '../components/GameServers';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative">
        <section className="hero-section">
          <Hero scrollY={scrollY} />
        </section>
      
        <section id="plans" className="plans-section">
          <Plans />
        </section>
        <section id="game-servers" className="game-servers-section">
          <GameServers />
        </section>
        <section>
          <Testimonials />
        </section>
        <section id="features" className="features-section">
          <Features />
        </section>
        <section id="features" className="features-section">
          <Contact/>
        </section>
        <section id="faq" className="faq-section">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;