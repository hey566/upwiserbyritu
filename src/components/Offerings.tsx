
import React from 'react';
import { BarChart3, Monitor, MessageSquare, Zap, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="offerings" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Key Offerings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive corporate training programs designed to elevate professional skills 
            and drive measurable business outcomes.
          </p>
        </div>

        {/* Main Offerings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainOfferings.map((offering, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
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
          ))}
        </div>

        {/* Special Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced certification and development programs for organizations and individuals 
              looking to build training capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </div>

        {/* CTA Section */}
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
              className="border-white text-white hover:bg-white/10 px-8 py-3"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
