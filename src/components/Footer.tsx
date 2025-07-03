'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal'; // Make sure this path matches your project

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Upwise</h3>
              <p className="text-gray-400 mb-6">
                Empowering people and teams with powerful training programs designed for growth, clarity, and impact.
              </p>
                <Button
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                Get Started Today
                </Button>
            </div>
          </Reveal>

          {/* Column 2 - Quick Links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#programs" className="hover:text-white">Programs</a></li>
                <li><a href="#trainers" className="hover:text-white">Trainer Kit</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
          </Reveal>

          {/* Column 3 - Services */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Training Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Excel & PowerPoint</li>
                <li>Communication Skills</li>
                <li>Productivity Programs</li>
                <li>Train-the-Trainer</li>
              </ul>
            </div>
          </Reveal>

          {/* Column 4 - Contact Info */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  hello@upwise.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white" />
                  New Delhi, India
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Footer Bottom */}
        <Reveal delay={0.4}>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Upwise by Ritu Arora. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
