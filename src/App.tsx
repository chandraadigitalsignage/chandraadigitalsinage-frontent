// src/App.tsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import SignageOverview from './components/SignageOverview';
import CaseStudies from './components/CaseStudies';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Services from './components/Services';
import GlobalImpact from './components/GlobalImpact';
import Contact from './components/Contact';

import Footer from './components/Footer';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
     <Navbar />

<main>

  <section id="home">
    <Hero />
  </section>

  <section id="features">
    <Features />
  </section>

  <section id="overview">
    <SignageOverview />
  </section>

  <section id="work">
    <CaseStudies />
  </section>

  <section id="gallery">
    <Gallery />
  </section>

  <section id="services">
    <Services />
  </section>

  <section id="impact">
    <GlobalImpact />
  </section>

  <section id="contact">
    <Contact />
  </section>

</main>

<Footer />
    </div>
  );
};

export default App;