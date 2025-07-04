'use client';

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const Programs = () => {
  // Animation timing configuration
  const baseDelay = 0.1;
  const stepDelay = 0.15;
  const baseDuration = 0.6;

  useEffect(() => {
    if (window.location.hash === '#programs') {
      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="programs" className="bg-white">
      <section className="section-new-trainers bg-upwise-blue-50 py-16 px-4 md:px-8">
        <div className="container-custom max-w-6xl mx-auto">
          {/* Section Title */}
          <Reveal delay={baseDelay}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-upwise-blue-800">
              <span className="text-upwise-blue-600">Professional Development Programs</span> Designed for Career Growth
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills Card */}
            <Reveal delay={baseDelay + stepDelay}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="hidden md:block md:w-1/3 bg-upwise-blue-100">
                    <img 
                      src="https://www.articulate.com/wp-content/uploads/2024/11/gp-strategies-team-working-laptop-1024x782.png"
                      alt="Technical Skills Training"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <Reveal delay={baseDelay + stepDelay * 2}>
                      <h3 className="text-xl md:text-2xl font-bold text-upwise-blue-800 mb-6">
                        Technical Skills Training
                      </h3>
                    </Reveal>
                    
                    <ul className="space-y-3 mb-8">
                      {["Excel Mastery", "PowerPoint for Executives", "Data Analysis Fundamentals", "Business Communication", "Productivity Tools", "Virtual Collaboration"].map((item, index) => (
                        <Reveal 
                          key={index}
                          delay={baseDelay + stepDelay * (3 + index * 0.3)}
                        >
                          <li>
                            <Link href="#" className="text-upwise-blue-700 hover:text-upwise-blue-600 hover:underline">
                              {item}
                            </Link>
                          </li>
                        </Reveal>
                      ))}
                    </ul>
                    
                    <Reveal delay={baseDelay + stepDelay * 5}>
                      <Link href="#" className="flex items-center text-upwise-blue-600 font-medium group">
                        <span className="mr-2">View All Technical Programs</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Professional Development Card */}
            <Reveal delay={baseDelay + stepDelay * 1.5}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="hidden md:block md:w-1/3 bg-upwise-blue-100">
                    <img 
                      src="https://www.umassglobal.edu/sites/default/files/styles/694x390/public/images/17-blog-images/umass-global-blog-images/b2b-professional-development-thumb.jpg?h=5a472534"
                      alt="Professional Development"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <Reveal delay={baseDelay + stepDelay * 2.5}>
                      <h3 className="text-xl md:text-2xl font-bold text-upwise-blue-800 mb-6">
                        Professional Development
                      </h3>
                    </Reveal>
                    
                    <ul className="space-y-3 mb-8">
                      {["Train the Trainer", "Leadership Skills", "Presentation Mastery", "Time Management", "Team Collaboration", "Emotional Intelligence"].map((item, index) => (
                        <Reveal 
                          key={index}
                          delay={baseDelay + stepDelay * (3 + index * 0.3)}
                        >
                          <li>
                            <Link href="#" className="text-upwise-blue-700 hover:text-upwise-blue-600 hover:underline">
                              {item}
                            </Link>
                          </li>
                        </Reveal>
                      ))}
                    </ul>
                    
                    <Reveal delay={baseDelay + stepDelay * 5.5}>
                      <Link href="#" className="flex items-center text-upwise-blue-600 font-medium group">
                        <span className="mr-2">Explore Development Programs</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* CTA Section */}
          <Reveal delay={baseDelay + stepDelay * 6}>
            <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold text-upwise-blue-800 mb-4">
                Ready to Transform Your Team's Skills?
              </h3>
              <p className="text-lg text-upwise-blue-600 mb-8 max-w-2xl mx-auto">
                Download our corporate training brochure or schedule a consultation call with Ritu Arora
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/download-brochure" className="bg-upwise-blue-600 hover:bg-upwise-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Download Brochure
                </Link>
                <button className="border border-upwise-blue-600 text-upwise-blue-600 hover:bg-upwise-blue-50 px-6 py-3 rounded-lg transition-colors" 
                 onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Programs;