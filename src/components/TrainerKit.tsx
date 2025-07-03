import React from 'react';
import { Package, FileText, Presentation, Users, Download, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const TrainerKit = () => {
  const kitIncludes = [
    {
      icon: FileText,
      title: "Comprehensive Onboarding Guide",
      description: "Step-by-step guide to get new trainers up to speed quickly and effectively",
      details: ["Training methodology overview", "Best practices & tips", "Common challenges & solutions"]
    },
    {
      icon: Presentation,
      title: "Professional Pitch Decks",
      description: "Ready-to-use presentation templates for client proposals and program overviews",
      details: ["Customizable templates", "Industry-specific versions", "Visual assets included"]
    },
    {
      icon: Package,
      title: "Training Templates & Resources",
      description: "Complete set of materials to deliver high-quality training sessions",
      details: ["Session plans", "Exercise templates", "Assessment tools"]
    },
    {
      icon: Users,
      title: "Client Presentation Materials",
      description: "Professional materials to showcase programs and build client confidence",
      details: ["ROI demonstration tools", "Case study templates", "Success metrics frameworks"]
    }
  ];

  const benefits = [
    "Reduce preparation time by 70%",
    "Maintain consistent quality standards",
    "Professional brand presentation",
    "Accelerated trainer development",
    "Improved client confidence",
    "Measurable training outcomes"
  ];

  return (
    <section id="trainers" className="section-padding bg-white" style={{ marginLeft: 120, marginRight: 120 }}>
      <div className="container-custom">

        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Package className="w-8 h-8 text-upwise-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trainer Culture <span className="text-gradient">Kit</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything internal trainers need to deliver exceptional corporate training programs. 
              A comprehensive toolkit designed for both new and experienced training professionals.
            </p>
          </div>
        </Reveal>

        {/* Two-column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower Your Training Team</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our Trainer Culture Kit is specifically designed for organizations looking to build 
                  internal training capabilities. Whether you're developing new trainers or enhancing 
                  existing programs, this comprehensive toolkit provides everything needed for success.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Perfect for HR departments, L&D teams, and organizations committed to building 
                  a strong internal training culture that drives consistent, high-quality learning experiences.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-upwise-blue-50 to-upwise-teal-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-upwise-blue-600 mr-2" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-upwise-teal-600 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional training environment"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-upwise-blue-900/10 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-upwise-teal-100 rounded-lg flex items-center justify-center">
                    <Download className="w-6 h-6 text-upwise-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ready to Use</p>
                    <p className="text-sm text-gray-600">Immediate Implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* What's Included */}
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included in the Kit</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A complete collection of professionally designed resources to support your internal training initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {kitIncludes.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-upwise-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-upwise-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal direction="up">
          <div className="text-center bg-gradient-to-r from-upwise-blue-600 to-upwise-teal-600 rounded-2xl p-12 text-white">
            <Package className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Training Culture?</h3>
            <p className="text-upwise-blue-100 mb-8 max-w-2xl mx-auto">
              Get instant access to our comprehensive Trainer Culture Kit and start transforming 
              your organization's training capabilities today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-upwise-blue-600 hover:bg-gray-100 px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get the Trainer Kit
              </Button>
                <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10 px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                Schedule Demo
                </Button>
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
};

export default TrainerKit;
