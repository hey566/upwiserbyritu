
import React from 'react';
import { ChevronUp, Linkedin, Mail, Phone, BookOpen, Users, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Key Offerings', href: '#offerings' },
    { name: 'Target Audience', href: '#audience' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Trainer Kit', href: '#trainers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Excel Training', href: '#offerings' },
    { name: 'PowerPoint Training', href: '#offerings' },
    { name: 'Communication Skills', href: '#offerings' },
    { name: 'Productivity Training', href: '#offerings' },
    { name: 'Train-the-Trainer', href: '#trainers' },
    { name: 'Corporate Programs', href: '#offerings' }
  ];

  const achievements = [
    { icon: BookOpen, text: '4 Published Books' },
    { icon: Users, text: '10,000+ Professionals Trained' },
    { icon: Award, text: '20+ Years Experience' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-upwise-blue-500 to-upwise-teal-500 rounded-lg flex items-center justify-center">
                <ChevronUp className="w-5 h-5 text-white font-bold" />
              </div>
              <span className="text-xl font-playfair font-semibold">
                Upwise
                <span className="text-sm font-inter font-normal text-upwise-blue-300 ml-1">
                  by Ritu Arora
                </span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering professionals to grow smarter, present sharper, and perform better 
              through expert-led corporate training and development programs.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                  <achievement.icon className="w-4 h-4 text-upwise-blue-400" />
                  <span>{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-upwise-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-upwise-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-upwise-blue-400" />
                <a 
                  href="mailto:hello@upwise.com" 
                  className="text-gray-300 hover:text-upwise-blue-400 transition-colors"
                >
                  hello@upwise.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-upwise-blue-400" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-upwise-blue-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-upwise-blue-400" />
                <a 
                  href="https://linkedin.com/in/rituarora" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-upwise-blue-400 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 p-4 bg-gradient-to-r from-upwise-blue-900/30 to-upwise-teal-900/30 rounded-lg border border-upwise-blue-800/30">
              <p className="text-sm text-gray-300 mb-3">Ready to transform your team?</p>
              <a 
                href="#contact"
                className="inline-block bg-upwise-blue-600 hover:bg-upwise-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Upwise by Ritu Arora. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-upwise-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-upwise-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-upwise-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
