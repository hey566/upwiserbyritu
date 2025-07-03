'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const programsList = [
  {
    category: 'IT & Technical',
    courses: [
      'API Testing',
      'Backend Development',
      'Frontend Development',
      'Cloud Computing',
      'DevOps Fundamentals',
      'Cybersecurity Basics',
      'Database Management',
      'Software Testing'
    ]
  },
  {
    category: 'Management',
    courses: [
      'Project Management',
      'Agile Methodologies',
      'Team Leadership',
      'Strategic Planning',
      'Risk Management',
      'Business Analysis',
      'Product Management'
    ]
  },
  {
    category: 'Behavioral',
    courses: [
      'Emotional Intelligence',
      'Conflict Resolution',
      'Effective Communication',
      'Negotiation Skills',
      'Presentation Skills',
      'Time Management'
    ]
  },
  {
    category: 'Productivity',
    courses: [
      'Microsoft Excel',
      'PowerPoint Mastery',
      'Outlook Productivity',
      'Note-Taking Tools',
      'Task Management',
      'Email Efficiency'
    ]
  }
];

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'categories' | 'excellence'>('categories');

  useEffect(() => {
    // Scroll to programs section when mounted
    const hash = window.location.hash;
    if (hash === '#programs') {
      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="programs" className="bg-white">
      

      {/* New Corporate Training Programs Section */}
      <section className="section-new-trainers bg-upwise-blue-50 py-16 px-4 md:px-8">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-upwise-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-upwise-blue-600">Corporate Training Programs</span> Designed for Team Excellence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Training Categories */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="hidden md:block md:w-1/3 bg-upwise-blue-100">
                  <img 
                    src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/6777d3c42b2dde7075dfd916_talking-audience%20(1).webp"
                    alt="Training Categories"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-upwise-blue-800 mb-6">Training Categories</h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "IT & Technical Training",
                      "Behavioral Training",
                      "Management Training",
                      "Leadership Training",
                      "Social Impact Training",
                      "Compliance Training"
                    ].map((item, index) => (
                      <li key={index}>
                        <Link href="#" className="text-upwise-blue-700 hover:text-upwise-blue-600 hover:underline">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="flex items-center text-upwise-blue-600 font-medium group">
                    <span className="mr-2">Explore the Full List of Training Programs</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Excellence Programs */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="hidden md:block md:w-1/3 bg-upwise-blue-100">
                  <img 
                    src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/6777d3c4e5ee16a54562cd09_Frame%201000007162%20(3).webp"
                    alt="Excellence Programs"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-upwise-blue-800 mb-6">Excellence Programs</h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Sales Excellence",
                      "Marketing Excellence",
                      "Operational Excellence",
                      "Finance Excellence",
                      "HR Excellence",
                      "IT Excellence",
                      "Customer Service Excellence",
                      "Leadership Excellence",
                      "Quality Management Excellence"
                    ].map((item, index) => (
                      <li key={index}>
                        <Link href="#" className="text-upwise-blue-700 hover:text-upwise-blue-600 hover:underline">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="flex items-center text-upwise-blue-600 font-medium group">
                    <span className="mr-2">View All Excellence Programs</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;