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

  return (
    <>
      <section id="about" className="section-padding bg-white" style={{ marginLeft: 120, marginRight: 120 }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate={contentControls}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-upwise-blue-50 text-upwise-blue-700 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  About Upwise
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering Growth Through 
                  <span className="text-gradient block mt-2">Expert Training</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Led by Ritu Arora, Upwise transforms how professionals learn and grow. With over 20 years of experience 
                  and 4 published books, we deliver practical, high-impact training that drives real results in the corporate world.
                </p>
              </motion.div>

              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading catalyst in professional transformation, where every individual discovers their potential 
                    and organizations thrive through empowered teams.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibent text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    We deliver world-class corporate training that bridges the gap between knowledge and application, 
                    ensuring professionals not just learn, but excel in their careers.
                  </p>
                </div>
              </motion.div>

              {/* Core Values */}
              <motion.div variants={fadeInLeft} className="grid grid-cols-3 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-upwise-blue-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-upwise-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trust</h4>
                  <p className="text-sm text-gray-600">Built on reliability and expertise</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-upwise-teal-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-upwise-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clarity</h4>
                  <p className="text-sm text-gray-600">Clear, actionable learning outcomes</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-upwise-coral-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-upwise-coral-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                  <p className="text-sm text-gray-600">Measurable results and growth</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image and Stats */}
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={statsControls}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ritu Arora conducting training session"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

              {/* Stats Cards */}
              <motion.div
                variants={staggerContainer}
                className="absolute -bottom-8 -left-8 right-8"
              >
                <motion.div 
                  variants={fadeInUp} 
                  whileHover={{ scale: 1.05 }}
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
                
                <motion.div 
                  variants={fadeInUp} 
                  whileHover={{ scale: 1.05 }}
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <motion.section
        ref={clientsRef}
        initial="hidden"
        animate={clientsControls}
        variants={fadeInUp}
        className="section-logoes bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-5"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal direction="down">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Globally Trusted by Top Clientele
            </h2>
          </Reveal>

          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-12 py-4"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div 
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;