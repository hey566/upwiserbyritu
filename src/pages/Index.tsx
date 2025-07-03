
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import TargetAudience from '@/components/TargetAudience';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrainerKit from '@/components/TrainerKit';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <TargetAudience />
      <WhyChooseUs />
      <TrainerKit />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
