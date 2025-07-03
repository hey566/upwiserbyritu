import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import TargetAudience from '@/components/TargetAudience';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrainerKit from '@/components/TrainerKit';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '../components/Reveal';
import Programs from '@/components/Programs';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.5
};

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={0.1}>
        <Offerings />
      </Reveal>
      <Reveal delay={0.2}>
        <Programs />
      </Reveal>
      <Reveal delay={0.3}>
        <TargetAudience />
      </Reveal>
      <Reveal delay={0.4}>
        <WhyChooseUs />
      </Reveal>
      <Reveal delay={0.5}>
        <TrainerKit />
      </Reveal>
      <Reveal delay={0.6}>
        <Contact />
      </Reveal>
      <Footer />
    </motion.div>
  );
};

export default Index;