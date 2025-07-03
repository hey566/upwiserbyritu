import React from 'react';
import { BarChart3, Monitor, MessageSquare, Zap, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';

const Offerings = () => {
  const mainOfferings = [
    {
      icon: BarChart3,
      title: "Excel Mastery",
      description: "From basics to advanced analytics, master Excel for data analysis, reporting, and automation",
      features: ["Advanced Formulas & Functions", "Pivot Tables & Charts", "Data Analysis & Visualization", "Automation with Macros"],
      color: "from-upwise-blue-500 to-upwise-blue-600"
    },
    {
      icon: Monitor,
      title: "PowerPoint Excellence",
      description: "Create compelling presentations that engage, persuade, and deliver impactful messages",
      features: ["Design Principles", "Storytelling Techniques", "Visual Communication", "Executive Presentations"],
      color: "from-upwise-teal-500 to-upwise-teal-600"
    },
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description: "Develop confident communication for meetings, presentations, and leadership scenarios",
      features: ["Public Speaking", "Executive Presence", "Meeting Facilitation", "Cross-cultural Communication"],
      color: "from-upwise-coral-400 to-upwise-coral-500"
    },
    {
      icon: Zap,
      title: "Productivity Optimization",
      description: "Streamline workflows and maximize efficiency with proven productivity strategies",
      features: ["Time Management", "Task Prioritization", "Workflow Automation", "Digital Organization"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const specialPrograms = [
    {
      icon: GraduationCap,
      title: "Train-the-Trainer Programs",
      description: "Comprehensive certification programs for aspiring corporate trainers and L&D professionals",
      highlights: ["Certification Included", "6-Month Program", "Hands-on Practice"]
    },
    {
      icon: Users,
      title: "Capability Building",
      description: "Custom organizational development programs tailored to your team's specific needs",
      highlights: ["Custom Curriculum", "Team Assessment", "Progress Tracking"]
    }
  ];

  const challengeBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="offerings" className="section-padding bg-gray-50"style={{ marginLeft: 180, marginRight: 180 }}>
      <div className="container-custom">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Key Offerings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive corporate training programs designed to elevate professional skills 
              and drive measurable business outcomes.
            </p>
          </div>
        </Reveal>

        {/* Main Offerings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainOfferings.map((offering, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${offering.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-upwise-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Special Programs */}
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced certification and development programs for organizations and individuals 
              looking to build training capabilities.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specialPrograms.map((program, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-6 h-6 text-upwise-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="px-3 py-1 bg-upwise-blue-100 text-upwise-blue-800 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Challenges & Solutions Section */}
        <Reveal>
          <div className="flex flex-col items-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
              style={{ marginBottom: 60 }}
            >
              Where Upskilling Challenges Meet<br />
              <span className="text-gradient">Seamless Corporate Training Solutions</span>
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Organization Challenges */}
              <motion.div
              variants={challengeBoxVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="solutions-card border-2 border-upwise-blue-500"
              style={{
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d'
              }}
              >
              <div className="solutions-header-block">
                <h3 className="text-color-midnight-blue text-align-center">
                Large Organization<br />Challenges
                </h3>
              </div>
              {[
                "Scale and Complexity",
                "Diverse Learning Needs",
                "Training in Multiple Geographies",
                "Non-centralized Training Administration",
                "Content Update Delays",
                "Scheduling Conflicts"
              ].map((item, index) => (
                <div key={index} className="solution-gradient-block">
                <div className="text-color-midnight-blue text-align-center">{item}</div>
                </div>
              ))}
              </motion.div>

              {/* Common Challenges - Center Card */}
                <motion.div
                variants={challengeBoxVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="solutions-card border-2 border-upwise-blue-500"
                style={{
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d'
                }}
                >
                <div className="solutions-header-block">
                 <h3 className="text-color-midnight-blue text-align-center">
                Common Challenges
                </h3>
                </div>
                {[
                "Logistical Complications",
                "Lack of In-house Corporate Trainers",
                "Over-reliance on Multiple Training Vendors",
                "Consistency in Training Quality",
                "Content Update Delays",
                "Training Across Geographies Leading to Compliance Issues"
                ].map((item, index) => (
                <div key={index} className="upskill-div">
                  <div className="text-white text-align-center">{item}</div>
                </div>
                ))}
                </motion.div>

              {/* SMB Challenges */}
              <motion.div
              variants={challengeBoxVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="solutions-card border-2 border-upwise-blue-500"
              style={{
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d'
              }}
              >
              <div className="solutions-header-block">
                <h3 className="text-color-midnight-blue text-align-center">
                Small & Medium Business<br />Challenges
                </h3>
              </div>
              {[
                "Vendor Reliability",
                "Lack of Training Infrastructure, Resources and Processes",
                "Training in Multiple Geographies",
                "Customization Challenges",
                "Budget Constraints",
                "Cultural Resistance"
              ].map((item, index) => (
                <div key={index} className="solution-gradient-block">
                <div className="text-color-midnight-blue text-align-center">{item}</div>
                </div>
              ))}
              </motion.div>
            </div>

            <p className="mt-12 text-gray-600 text-center max-w-2xl mx-auto">
              Upskilling challenges can hinder your organization's growth prospects.<br />
              <a 
                href="#contact" 
                className="text-upwise-blue-600 hover:text-upwise-blue-800 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Convert them into opportunities by joining hands with us.
              </a>
            </p>
          </div>
        </Reveal>

        {/* CTA Section */}
        <Reveal direction="up">
          <div className="text-center bg-gradient-to-r from-upwise-blue-600 to-upwise-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Team's Skills?</h3>
            <p className="text-upwise-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how our tailored training programs can drive performance improvements 
              and career growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-upwise-blue-600 hover:bg-gray-100 px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10 px-8 py-3"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View All Programs
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Offerings;