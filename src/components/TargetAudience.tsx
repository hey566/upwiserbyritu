
import React from 'react';
import { Briefcase, Users, TrendingUp, GraduationCap, Building2, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TargetAudience = () => {
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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs are designed for professionals and organizations committed to 
            excellence and continuous growth in today's competitive business environment.
          </p>
        </div>

        {/* Primary Audience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Audience</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core professionals and decision makers who benefit most from our comprehensive training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {primaryAudience.map((audience, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 overflow-hidden">
                <div className={`bg-gradient-to-r ${audience.color} p-6`}>
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <audience.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{audience.title}</CardTitle>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {audience.characteristics.map((char, charIndex) => (
                        <div key={charIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-upwise-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Secondary Audience */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secondary Audience</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional segments that find value in our specialized programs and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {secondaryAudience.map((audience, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <audience.icon className="w-8 h-8 text-upwise-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
                  <div className="space-y-2">
                    {audience.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="inline-block px-3 py-1 bg-upwise-blue-100 text-upwise-blue-800 text-sm rounded-full mr-2 mb-2"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div className="mt-20 text-center bg-gradient-to-r from-upwise-blue-50 to-upwise-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Successful Professionals</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            From entry-level analysts to C-suite executives, our programs have helped professionals 
            across industries achieve their career goals and drive organizational success. 
            See how our targeted approach can work for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-upwise-blue-600">95%</div>
              <div className="text-sm text-gray-600">Skill Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-upwise-teal-600">87%</div>
              <div className="text-sm text-gray-600">Career Advancement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-upwise-coral-500">92%</div>
              <div className="text-sm text-gray-600">Recommend to Others</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100+</div>
              <div className="text-sm text-gray-600">Corporate Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
