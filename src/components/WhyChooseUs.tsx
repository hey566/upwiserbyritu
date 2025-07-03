import React from 'react';
import { Shield, Eye, TrendingUp, Lightbulb, Users, Award, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';

const WhyChooseUs = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Trust",
      description: "20+ years of proven results with transparent processes and reliable delivery",
      color: "from-upwise-blue-500 to-upwise-blue-600"
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "Clear, actionable insights that professionals can immediately apply in their work",
      color: "from-upwise-teal-500 to-upwise-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Measurable outcomes that drive real business impact and career advancement",
      color: "from-upwise-coral-400 to-upwise-coral-500"
    }
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      title: "Practical & High-Impact",
      description: "Every training module is designed around real-world applications that deliver immediate value",
      stats: "95% of participants apply skills within 30 days"
    },
    {
      icon: Users,
      title: "People-First Philosophy",
      description: "We believe in empowering individuals first, which naturally leads to organizational success",
      stats: "87% report improved job satisfaction"
    },
   
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailored programs that address specific organizational needs and industry challenges",
      stats: "100+ custom programs delivered"
    }
  ];

  return (
    <section className="section-padding bg-gray-50"style={{ marginLeft: 120, marginRight: 120 }}>
      <div className="container-custom">

        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">Upwise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines proven methodologies with real-world application, 
              ensuring every training investment delivers measurable results.
            </p>
          </div>
        </Reveal>

        {/* Core Values */}
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built on Strong Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these three fundamental principles that ensure 
              exceptional outcomes for our clients.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <div className={`bg-gradient-to-r ${value.color} p-6`}>
                  <div className="flex items-center justify-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Differentiators */}
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our distinctive approach to professional development that combines expertise, 
              practicality, and measurable results.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Reveal key={index} delay={index * 0.12}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-upwise-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-sm font-semibold text-upwise-blue-600 bg-upwise-blue-50 px-3 py-2 rounded-full inline-block">
                    {item.stats}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Testimonial */}
        <Reveal direction="up">
          <div className="mt-20 bg-gradient-to-r from-upwise-blue-600 to-upwise-teal-600 rounded-2xl p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "Ritu's training transformed not just our team's Excel skills, but their entire approach 
                to data analysis. The practical methods and real-world applications made an immediate 
                impact on our productivity and decision-making process."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-upwise-blue-100">Head of Operations, TechCorp Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
