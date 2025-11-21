import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

interface CubeTransform {
  x: number;
  y: number;
  rotate: number;
}

const FlatCube = React.forwardRef<HTMLDivElement, { color: string; shift?: string; transform: CubeTransform }>(
  ({ color, shift = '0', transform }, ref) => (
    <motion.div
      ref={ref}
      className="flat-cube-wrapper"
      animate={{
        x: transform.x,
        y: transform.y,
        rotate: transform.rotate,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 120 120"
        className="flat-cube"
        style={{ transform: `translateY(${shift})` }}
      >
        <rect x="30" y="30" width="60" height="60" fill={color} opacity="0.8" />
      </svg>
    </motion.div>
  )
);

const CursorCube: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <div
    className="cursor-cube"
    style={{
      left: `${x}px`,
      top: `${y}px`,
    }}
  >
    <svg width="50" height="50" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff0080" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect x="30" y="30" width="60" height="60" fill="url(#cursorGradient)" opacity="0.9" />
    </svg>
  </div>
);

export const Hero: React.FC = () => {
  const rotatingWords = ['experiments', 'identities', 'adventures'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pinkTransform, setPinkTransform] = useState<CubeTransform>({ x: 0, y: 0, rotate: 0 });
  const [purpleTransform, setPurpleTransform] = useState<CubeTransform>({ x: 0, y: 0, rotate: 0 });

  const pinkCubeRef = useRef<HTMLDivElement>(null);
  const purpleCubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const calculateMagneticPull = useCallback((cubeRef: React.RefObject<HTMLDivElement>, mouseX: number, mouseY: number): CubeTransform => {
    if (!cubeRef.current) return { x: 0, y: 0, rotate: 0 };

    const cubeRect = cubeRef.current.getBoundingClientRect();
    const cubeCenterX = cubeRect.left + cubeRect.width / 2;
    const cubeCenterY = cubeRect.top + cubeRect.height / 2;

    const deltaX = mouseX - cubeCenterX;
    const deltaY = mouseY - cubeCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const magneticRadius = 200;

    if (distance < magneticRadius) {
      const pullStrength = 1 - (distance / magneticRadius);
      const maxPull = 40;

      return {
        x: deltaX * pullStrength * 0.3,
        y: deltaY * pullStrength * 0.3,
        rotate: (deltaX / distance) * pullStrength * 15,
      };
    }

    return { x: 0, y: 0, rotate: 0 };
  }, []);

  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        setPinkTransform(calculateMagneticPull(pinkCubeRef, e.clientX, e.clientY));
        setPurpleTransform(calculateMagneticPull(purpleCubeRef, e.clientX, e.clientY));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [calculateMagneticPull]);

  return (
    <section className="hero-main">
      <motion.div
        className="hero-main-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="hero-multiline-title">
          <div className="title-line line-center-right">
            <FlatCube ref={pinkCubeRef} color="#ff0080" shift="-40px" transform={pinkTransform} /> One world
          </div>
          <div className="title-line line-left">
            to craft endless <FlatCube ref={purpleCubeRef} color="#7c3aed" shift="30px" transform={purpleTransform} />
          </div>
          <div className="title-line line-right">
            <span className="rotating-word-container">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="rotating-word-inline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="word-underline"></span>
            </span>
            <span className="on-qubic"> on Qubic</span>
          </div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="hero-bg">
        <motion.div
          className="bg-gradient-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-gradient-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Cursor cube */}
      <CursorCube x={mousePos.x} y={mousePos.y} />
    </section>
  );
};
