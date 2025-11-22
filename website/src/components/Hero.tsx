import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CursorCube: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    const dx = x - prevPos.x;
    const dy = y - prevPos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);
    setVelocity(speed);
    setPrevPos({ x, y });
  }, [x, y]);

  const scaleX = 1 + Math.min(velocity / 100, 0.5);
  const scaleY = 1 - Math.min(velocity / 200, 0.3);

  return (
    <motion.div
      className="cursor-cube"
      animate={{
        x: x - 25,
        y: y - 25,
        scaleX,
        scaleY,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.5,
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
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const rotatingWords = ['experiments', 'identities', 'adventures'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pinkTransform, setPinkTransform] = useState<CubeTransform>({ x: 0, y: 0, rotate: 0 });
  const [purpleTransform, setPurpleTransform] = useState<CubeTransform>({ x: 0, y: 0, rotate: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const pinkCubeRef = useRef<HTMLDivElement>(null);
  const purpleCubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {!isMobile ? (
          /* Desktop 3-line layout */
          <div className="hero-multiline-title">
            <div className="title-line line-center-right">
              <FlatCube ref={pinkCubeRef} color="#ff0080" shift="-40px" transform={pinkTransform} /> One world.
            </div>
            <div className="title-line line-left">
              Crafting endless <FlatCube ref={purpleCubeRef} color="#7c3aed" shift="30px" transform={purpleTransform} />
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
        ) : (
          /* Mobile 6-line layout */
          <div className="hero-multiline-title mobile-layout">
            <div className="title-line line-right">
              <FlatCube ref={pinkCubeRef} color="#ff0080" shift="-40px" transform={pinkTransform} /> One world
            </div>
            <div className="title-line line-left">
              to craft
            </div>
            <div className="title-line line-right">
              endless <FlatCube ref={purpleCubeRef} color="#7c3aed" shift="30px" transform={purpleTransform} />
            </div>
            <div className="title-line line-left">
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
            </div>
            <div className="title-line line-right">
              on Qubic
            </div>
          </div>
        )}
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

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '50%'
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#ff0080"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
};
