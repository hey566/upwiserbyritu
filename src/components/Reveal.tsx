import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
   duration?: number; 
  direction?: 'up' | 'down' | 'left' | 'right';
  jumpDistance?: number;
}

const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6, // Default duration
  direction = 'up',
  jumpDistance = 40 
}: RevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-30px 0px'
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? jumpDistance : direction === 'down' ? -jumpDistance : 0,
      x: direction === 'left' ? jumpDistance : direction === 'right' ? -jumpDistance : 0,
      scale: 0.95,
      filter: 'blur(2px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
        delay,
        duration: 0.6,
      }
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;