import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const SuccessStats = () => {
  // Animation timing configuration
  const baseDelay = 0.1;
  const stepDelay = 0.15;
  const baseDuration = 0.6;

  return (
    <div className="w-full my-20" style={{ background: "linear-gradient(90deg, #ACC8FF 0%, #F1EEFA 100%)" }}>
      <div className="text-center rounded-2xl p-12 max-w-7xl mx-auto">
        {/* Title */}
        <Reveal delay={baseDelay}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Successful Professionals</h3>
        </Reveal>

        {/* Description */}
        <Reveal delay={baseDelay + stepDelay}>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            From entry-level analysts to C-suite executives, our programs have helped professionals 
            across industries achieve their career goals and drive organizational success. 
            See how our targeted approach can work for you.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "95%", label: "Skill Improvement", color: "text-blue-600" },
            { value: "87%", label: "Career Advancement", color: "text-teal-600" },
            { value: "92%", label: "Recommend to Others", color: "text-orange-500" },
            { value: "100+", label: "Corporate Clients", color: "text-purple-600" }
          ].map((stat, index) => (
            <Reveal 
              key={index}
              delay={baseDelay + stepDelay * (2 + index)}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStats;