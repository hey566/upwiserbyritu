import React from 'react';
import { Briefcase, Users, TrendingUp, GraduationCap, Building2, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { motion, Variants } from 'framer-motion';

const TargetAudience = () => {
  // Animation timing configuration
  const baseDelay = 0.1;
  const stepDelay = 0.15;
  const baseDuration = 0.6;

  const primaryAudience = [
    {
      icon: Briefcase,
      title: "Young to Mid-Career Professionals",
      description: "Ambitious professionals looking to accelerate their career growth through enhanced technical and soft skills",
      characteristics: ["2-10 years experience", "Seeking career advancement", "Need modern workplace skills", "Value practical training"],
      color: "from-upwise-blue-500 to-upwise-blue-600"
    },
    {
      icon: Users,
      title: "HR & L&D Leaders",
      description: "Human Resources and Learning & Development heads responsible for organizational capability building",
      characteristics: ["Decision makers", "Budget responsibility", "Team development focus", "ROI-driven approach"],
      color: "from-upwise-teal-500 to-upwise-teal-600"
    }
  ];

  const secondaryAudience = [
    {
      icon: GraduationCap,
      title: "Aspiring Trainers",
      description: "Professionals looking to transition into corporate training and L&D roles",
      benefits: ["Certification Programs", "Industry Recognition", "Career Transition Support"]
    },
    {
      icon: Building2,
      title: "B2B Clients",
      description: "Organizations seeking comprehensive training solutions for their teams",
      benefits: ["Custom Programs", "Measurable Outcomes", "Scalable Solutions"]
    },
    {
      icon: UserCheck,
      title: "Ritu's Existing Audience",
      description: "Readers and followers who want to deepen their professional skills",
      benefits: ["Advanced Programs", "Exclusive Content", "Direct Access"]
    }
  ];

  // Card hover variants for motion.div wrapping Card
  const cardHoverVariants: Variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 bg-white md:mx-[120px] mx-0">
      <div className="container-custom">

        {/* Header */}
        <Reveal delay={baseDelay}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed for professionals and organizations committed to 
              excellence and continuous growth in today's competitive business environment.
            </p>
          </div>
        </Reveal>

        {/* Primary Audience Header */}
        <Reveal delay={baseDelay + stepDelay}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Audience</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core professionals and decision makers who benefit most from our comprehensive training programs.
            </p>
          </div>
        </Reveal>

        {/* Primary Audience Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {primaryAudience.map((audience, index) => (
            <Reveal 
              key={index} 
              delay={baseDelay + stepDelay * (2 + index)}
            >
              <motion.div variants={cardHoverVariants} whileHover="hover">
                <Card className="group bg-white border-0 overflow-hidden h-full">
                  <div className={`bg-gradient-to-r ${audience.color} p-6`}>
                    <div className="flex items-center space-x-4 text-white">
                      <motion.div 
                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <audience.icon className="w-6 h-6" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold">{audience.title}</CardTitle>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {audience.description}
                    </motion.p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {audience.characteristics.map((char, charIndex) => (
                          <motion.div 
                            key={charIndex} 
                            className="flex items-center text-sm text-gray-700"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * charIndex }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-upwise-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {char}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Secondary Audience Header */}
        <Reveal delay={baseDelay + stepDelay * 4}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secondary Audience</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional segments that find value in our specialized programs and expertise.
            </p>
          </div>
        </Reveal>
        {/* Secondary Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {secondaryAudience.map((audience, index) => (
            <Reveal 
              key={index} 
              delay={baseDelay + stepDelay * (5 + index)}
            >
              <motion.div>
                <Card className="text-center bg-gradient-to-br from-gray-50 to-white h-full">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <audience.icon className="w-8 h-8 text-upwise-blue-600" />
                    </motion.div>
                    <CardTitle className="text-lg font-bold text-gray-900">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {audience.description}
                    </motion.p>
                    <div className="space-y-2">
                      {audience.benefits.map((benefit, benefitIndex) => (
                        <motion.span
                          key={benefitIndex}
                          className="inline-block px-3 py-1 bg-upwise-blue-100 text-upwise-blue-800 text-sm rounded-full mr-2 mb-2"
                          initial={{ scale: 0.9, opacity: 0.7 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 * benefitIndex }}
                          viewport={{ once: true }}
                        >
                          {benefit}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;