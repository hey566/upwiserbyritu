import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/hooks/useScrollAnimation';
import Reveal from './Reveal';

const About = () => {
  const { ref: contentRef, controls: contentControls } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();
  const { ref: clientsRef, controls: clientsControls } = useScrollAnimation();

  const clients = [
    {
      name: "Microsoft",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/674d3e1984457bd0e7928cee_Microsoft.svg",
      alt: "Microsoft: A Leading Company in Software, Cloud Computing, and Technology Solutions Worldwide"
    },
    {
      name: "Amazon",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/6768ebf732c9165e2ad5283a_amazon.webp",
      alt: "Amazon: A Leading Company in Cloud, E-commerce & Retail"
    },
    {
      name: "Intel",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/6768e7d5bad7bf385c6f7732_Intel.webp",
      alt: "Intel: A Leading Company in Software & Technology"
    },
    {
      name: "Adobe",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/6768e56eca70cc2713922e90_Adobe.webp",
      alt: "Adobe: A Leading Company In Digital Media and Creative Software Solutions"
    },
    {
      name: "MediaTek",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/676527da9db54960b17fc5d2_Mediatek.svg",
      alt: "MediaTek: Leading company in advanced semiconductor solutions"
    },
    {
      name: "Tata",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/674017af3a57eb90828b5622_Tata.svg",
      alt: "Tata Chemicals Ltd: A Leading Company in Chemical Industry"
    },
    {
      name: "Johnson & Johnson",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/675fbc2bd54e961ee778b605_Johnson%26Johnson.webp",
      alt: "Johnson & Johnson: A Leading Company in Pharmaceuticals"
    },
    {
      name: "Godrej",
      logo: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/674017cbce3b6d1d99f906fb_Godrej.svg",
      alt: "Godrej: A Leading Company in FMCG"
    }
  ];

  const baseDelay = 0.1; // Starting delay (seconds)
  const stepDelay = 0.15; // Delay increment between elements (seconds)
  const baseDuration = 0.6; // Base animation duration (seconds)

  return (
    <>
      <section id="about" className="section-padding bg-white md:mx-[120px] mx-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left Column */}
            <div className="space-y-8">
              {/* About Upwise Badge */}
              <Reveal delay={baseDelay}>
                <div className="inline-flex items-center px-4 py-2 bg-upwise-blue-50 text-upwise-blue-700 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  About Upwise
                </div>
              </Reveal>

              {/* Main Heading */}
              <Reveal delay={baseDelay + stepDelay}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering Growth Through
                  <span className="text-gradient block mt-2">Expert Training</span>
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal delay={baseDelay + stepDelay * 2}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Upwise, led by Ritu Arora, redefines how professionals grow. With 20+ years of experience and 4 books, we deliver practical, high-impact training for real-world results.
                </p>
              </Reveal>

              {/* Vision Section */}
              <Reveal delay={baseDelay + stepDelay * 3}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">
                    To inspire professional transformation and help organizations thrive through empowered individuals.
                  </p>
                </div>
              </Reveal>

              {/* Mission Section */}
              <Reveal delay={baseDelay + stepDelay * 4}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    Deliver world-class training that turns learning into real career growth.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Image and Stats - Right Column */}
            <div className="relative">
              {/* Main Image */}
              <Reveal delay={baseDelay}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Ritu Arora conducting training session"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
              </Reveal>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 -left-8 right-8">
                {/* Professionals Trained Card */}
                <Reveal delay={baseDelay + stepDelay * 2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white p-6 rounded-xl shadow-lg mb-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-upwise-blue-600">10,000+</p>
                        <p className="text-gray-600">Professionals Trained</p>
                      </div>
                      <Users className="w-8 h-8 text-upwise-blue-600" />
                    </div>
                  </motion.div>
                </Reveal>

                {/* Experience Card */}
                <Reveal delay={baseDelay + stepDelay * 3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-upwise-teal-600">20+ Years</p>
                        <p className="text-gray-600">Industry Experience</p>
                      </div>
                      <BookOpen className="w-8 h-8 text-upwise-teal-600" />
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-logoes py-16 px-5"
        style={{
          background: 'linear-gradient(90deg, rgb(172, 200, 255) 0%, rgb(241, 238, 250) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <Reveal delay={baseDelay}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Globally Trusted by Top Clientele
            </h2>
          </Reveal>

          {/* Infinite Logo Carousel - Larger Logos */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 py-8 items-center"  // Increased gap and padding
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 40,  // Slightly slower to accommodate larger logos
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <Reveal key={`${client.name}-${index}`} delay={baseDelay + (index % 8) * 0.05}>
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"  // Changed from h-10 to h-16
                      loading="lazy"
                      style={{
                        minWidth: '120px',  // Ensures consistent width
                        maxHeight: '80px',  // Limits maximum height
                        objectFit: 'contain'  // Ensures proper scaling
                      }}
                    />
                  </motion.div>
                </Reveal>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;