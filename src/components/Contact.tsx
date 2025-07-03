import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal'; // ✅ Add this line

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@upwise.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      content: "linkedin.com/in/rituarora",
      description: "Follow for latest updates"
    }
  ];

  const services = [
    "Excel Training",
    "PowerPoint Training",
    "Communication Skills",
    "Productivity Training",
    "Train-the-Trainer Program",
    "Custom Corporate Training",
    "Trainer Culture Kit",
    "Other"
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50" style={{ marginLeft: 120, marginRight: 120 }}>
      <div className="container-custom">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your team's capabilities? Let's discuss how our training programs 
              can drive performance improvements in your organization.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're looking to upskill your team, become a certified trainer, or explore 
                  our Trainer Culture Kit, we're here to help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-upwise-blue-100 to-upwise-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-upwise-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-upwise-blue-600 font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto p-4 border-upwise-blue-200 hover:bg-upwise-blue-50"
                    onClick={() => window.open('https://calendly.com/upwise', '_blank')}
                  >
                    <Calendar className="w-5 h-5 mr-3 text-upwise-blue-600" />
                    <div>
                      <div className="font-medium">Schedule a Demo</div>
                      <div className="text-sm text-gray-600">Book a 30-minute consultation</div>
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto p-4 border-upwise-teal-200 hover:bg-upwise-teal-50"
                    onClick={() => window.open('https://linkedin.com/in/rituarora', '_blank')}
                  >
                    <MessageSquare className="w-5 h-5 mr-3 text-upwise-teal-600" />
                    <div>
                      <div className="font-medium">LinkedIn Message</div>
                      <div className="text-sm text-gray-600">Connect directly with Ritu</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          
            <div className="lg:col-span-2">
              <Reveal>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in</label>
                      <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area of interest" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your training needs, team size, timeline, or any specific requirements..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-upwise-blue-600 hover:bg-upwise-blue-700 text-white group"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </Reveal>
            </div>
         
        </div>

        {/* Newsletter Signup */}
        <Reveal>
          <div className="mt-20 text-center bg-gradient-to-r from-upwise-blue-600 to-upwise-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-upwise-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights on professional development, training tips, and exclusive program updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 flex-1"
              />
              <Button className="bg-white text-upwise-blue-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
