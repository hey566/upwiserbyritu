
import React from 'react';
import { ArrowRight, Play, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="gradient-bg section-padding min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering professionals to{' '}
                <span className="text-gradient">grow smarter</span>,{' '}
                <span className="text-gradient">present sharper</span>, and{' '}
                <span className="text-gradient">perform better</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your career with expert-led corporate training in Excel, PowerPoint, Communication, and Productivity. 
                Led by Ritu Arora's 20+ years of experience in empowering professionals worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-upwise-blue-600" />
                <span className="text-sm text-gray-600">10,000+ Professionals Trained</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-upwise-teal-600" />
                <span className="text-sm text-gray-600">4 Published Books</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-upwise-coral-500" />
                <span className="text-sm text-gray-600">20+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-upwise-blue-600 hover:bg-upwise-blue-700 text-white px-8 py-4 rounded-full group"
                onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-upwise-blue-600 text-upwise-blue-600 hover:bg-upwise-blue-50 px-8 py-4 rounded-full group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-upwise-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-upwise-teal-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-upwise-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">95% Success Rate</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-upwise-coral-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-upwise-coral-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Training</p>
                  <p className="text-sm text-gray-600">Real-world Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
