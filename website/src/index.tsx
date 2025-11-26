import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesGrid } from './components/ServicesGrid';
import { DeveloperSection } from './components/DeveloperSection';
import { Footer } from './components/Footer';
import { Unsubscribe } from './components/Unsubscribe';
import './styles/global.css';

const HomePage: React.FC = () => {
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
    </>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
