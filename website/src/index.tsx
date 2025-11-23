import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesGrid } from './components/ServicesGrid';
import { DeveloperSection } from './components/DeveloperSection';
import { Footer } from './components/Footer';
import SafeTradeTicker from './components/SafeTradeTicker';
import './styles/global.css';

const App: React.FC = () => {
  useEffect(() => {
    // Prevent Chrome scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MetricsBar />
        <ServicesGrid />
        <DeveloperSection />
      </main>
      <Footer />
      <SafeTradeTicker />
    </>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
