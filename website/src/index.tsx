import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesGrid } from './components/ServicesGrid';
import { DeveloperSection } from './components/DeveloperSection';
import { TechOverview } from './components/TechOverview';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import SafeTradeTicker from './components/SafeTradeTicker';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MetricsBar />
        <ServicesGrid />
        <DeveloperSection />
        <TechOverview />
        <Community />
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
