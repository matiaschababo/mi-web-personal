import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './i18n'; // Initialize i18n
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ThumbnailsCarousel } from './components/ThumbnailsCarousel';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { NotFound } from './components/NotFound';
import { initGA, logPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    // Replace 'YOUR_MEASUREMENT_ID' with your actual Measurement ID
    initGA('G-ECKBW70E52');
    logPageView();
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
        <SEO />
        {window.location.pathname !== '/' && window.location.pathname !== '/index.html' ? (
          <NotFound />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <ThumbnailsCarousel />
              <TechStack />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;