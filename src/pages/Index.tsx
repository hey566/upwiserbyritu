import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import Programs from '@/components/Programs';
import TargetAudience from '@/components/TargetAudience';
import SuccessStats from '@/components/SuccessStats';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrainerKit from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 1,
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
      <About />
      <Offerings />
      <TargetAudience />
       <SuccessStats />
      <Programs />
      
      
      <TrainerKit />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
