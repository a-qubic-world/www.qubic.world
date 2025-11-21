import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '../assets/icons/LogoIcon';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <LogoIcon size={45} />
          <div className="nav-logo-text">
            <span className="nav-logo-qubic">qubic</span>
            <span className="nav-logo-world">.world</span>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="nav-links desktop">
          <a href="#products">Products</a>
          <a href="#developers">Developers</a>
          <a href="#technology">Technology</a>
          <a href="#community">Community</a>
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
            <a href="#products" onClick={toggleMenu}>Products</a>
            <a href="#developers" onClick={toggleMenu}>Developers</a>
            <a href="#technology" onClick={toggleMenu}>Technology</a>
            <a href="#community" onClick={toggleMenu}>Community</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
