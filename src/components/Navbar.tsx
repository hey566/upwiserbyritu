'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#key-offerings' },
    { name: 'Programs', href: '#programs' },
    { name: 'Resources', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Reveal direction="left" jumpDistance={30} delay={0.2}>
              <div className="flex-shrink-0 flex items-center space-x-2"
              onClick={() => {
              const contactSection = document.getElementById('hero');
              if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
                <div className="w-8 h-8 bg-gradient-to-br from-upwise-blue-500 to-upwise-teal-500 rounded-lg flex items-center justify-center">
                  <ChevronUp className="w-5 h-5 text-white font-bold" />
                </div>
                <span className="text-xl font-playfair font-semibold text-gray-900">
                  Upwise
                  <span className="text-sm font-inter font-normal text-upwise-blue-600 ml-1">
                    by Ritu Arora
                  </span>
                </span>
              </div>
            </Reveal>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 relative">
                {navigation.map((item, index) => (
                  <Reveal key={item.name} direction="down" jumpDistance={20} delay={1 + index * 0.1}>
  <motion.a
    href={item.href}
    className={`px-3 py-2 text-sm font-medium ${
      window.location.hash === item.href 
        ? 'text-upwise-teal-500' 
        : 'text-gray-900 hover:text-upwise-teal-500'
    } transition-colors duration-300`}
    whileHover={{ 
      y: -3,
      color: '#0d9488' // Teal color
    }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {item.name}
  </motion.a>
</Reveal>
                ))}

                <Reveal direction="down" jumpDistance={20} delay={0.7}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Button
                      className="bg-gray-900 hover:bg-upwise-teal-500 text-white px-6 py-2 rounded-full transition-colors duration-300"
                      onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </Reveal>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Reveal direction="right" jumpDistance={30} delay={0.3}>
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-900 hover:text-upwise-teal-500 p-2 transition-colors duration-300"
                  aria-label="Toggle menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </Reveal>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  type: 'spring',
                  damping: 20,
                  stiffness: 200
                } 
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  duration: 0.2
                }
              }}
            >
              <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
                {navigation.map((item, index) => (
                  <Reveal key={item.name} direction="right" jumpDistance={20} delay={0.1 + index * 0.1}>
                    <motion.a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-900 hover:text-upwise-teal-500 px-2 py-2 text-base font-medium transition-colors duration-300"
                      whileHover={{ 
                        x: 10,
                        color: '#0d9488' // Teal color
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </motion.a>
                  </Reveal>
                ))}

                <Reveal direction="up" jumpDistance={20} delay={0.5}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Button
                      className="bg-gray-900 hover:bg-upwise-teal-500 text-white w-full mt-4 transition-colors duration-300"
                      onClick={() => {
                        setIsOpen(false);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </Reveal>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Scroll to top button */}
      <Reveal direction="up" jumpDistance={40} delay={0.8}>
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900 hover:bg-upwise-teal-500 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          aria-label="Scroll to top"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      </Reveal>
    </>
  );
};

export default Navbar;