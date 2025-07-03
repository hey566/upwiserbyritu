
import React from 'react';
import { Award, BookOpen, Users, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "4 Published Books",
      description: "Author of bestselling books on Excel and productivity"
    },
    {
      icon: Users,
      title: "10,000+ Professionals",
      description: "Trained across various industries and corporations"
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Proven track record in corporate training and development"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Trust",
      description: "Building reliable partnerships with clients through consistent delivery and transparent communication"
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "Providing clear, actionable insights that professionals can immediately apply in their work"
    },
    {
      icon: Heart,
      title: "Performance",
      description: "Focusing on measurable outcomes that drive real business impact and career growth"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Upwise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by Ritu Arora, Upwise represents two decades of excellence in professional development 
            and corporate training, with a people-first philosophy that transforms careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Ritu Arora</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 20 years of experience in corporate training and professional development, 
                  Ritu Arora has dedicated her career to empowering professionals with practical, 
                  high-impact skills that drive real-world results.
                </p>
                <p>
                  As an accomplished author of four bestselling books on Excel and productivity, 
                  Ritu brings a unique blend of technical expertise and teaching excellence to every program. 
                  Her approach focuses on making complex concepts accessible and immediately applicable.
                </p>
                <p>
                  Through Upwise, Ritu continues her mission to bridge the gap between potential and 
                  performance, helping professionals and organizations achieve their goals through 
                  strategic skill development.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-upwise-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional training session"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-upwise-blue-900/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-gradient-to-br from-upwise-blue-50 to-upwise-teal-50 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading catalyst for professional transformation, creating a future where 
                every professional has the skills, confidence, and clarity to excel in their career 
                and contribute meaningfully to their organization's success.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-upwise-teal-50 to-upwise-coral-50 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower professionals and organizations through practical, high-impact training 
                programs that bridge the gap between knowledge and application, fostering a culture 
                of continuous learning and performance excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do at Upwise, from program design to client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-upwise-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
