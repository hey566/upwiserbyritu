// components/Hero.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id='hero'>
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/658bf6b59113ee53db7804e9_Video-poster.webp"
        >
          <source
            src="https://assets-global.website-files.com/6482a3cf7db698c2a80cc5e6/657947aacb60655a82134c6e_Video-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Upskill with <span className="text-teal-400">clarity</span>, <span className="text-cyan-400">confidence</span> & <span className="text-yellow-300">impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Live-led training in communication, productivity & presentation skills.
        </motion.p>

        {/* Mini Stats */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[
            { icon: Users, label: '10,000+ Trained' },
            { icon: TrendingUp, label: '20+ Years Experience' },
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 text-teal-400" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-lg rounded-full flex items-center gap-2"
            onClick={() => {
              const programsSection = document.getElementById('programs');
              if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Programs <ArrowRight className="w-5 h-5" />
          </Button>
            <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 hover:text-black px-6 py-3 text-lg rounded-full flex items-center gap-2 border-white"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            >
            <Play className="w-5 h-5" />
            Schedule Demo
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
