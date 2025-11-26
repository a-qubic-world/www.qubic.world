import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '../assets/icons/LogoIcon';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <LogoIcon size={80} />
          <div className="nav-logo-text">
            <span className="nav-logo-qubic">qubic</span>
            <span className="nav-logo-world">.world</span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="nav-links desktop">
          <a href="#technology">Technology</a>
          <a href="#products">Products</a>
          <a href="#developers">Developers</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#technology" onClick={(e) => handleNavClick(e, 'technology')}>Technology</a>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
            <a href="#developers" onClick={(e) => handleNavClick(e, 'developers')}>Developers</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
