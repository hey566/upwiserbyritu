import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

const Offerings = () => {
  // Animation timing configuration
  const baseDelay = 0.1;
  const stepDelay = 0.15;
  const baseDuration = 0.6;

  const keyOfferings = [
    {
      title: "Corporate Training",
      description: "Excel, PPT, Communication skills development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      features: [
        "Advanced Excel techniques",
        "PowerPoint mastery",
        "Effective communication",
        "Business presentation skills"
      ]
    },
    {
      title: "Train the Trainer",
      description: "For aspiring corporate coaches",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      features: [
        "Certification program",
        "Instructional design",
        "Adult learning principles",
        "Classroom facilitation"
      ]
    },
    {
      title: "1:1 Coaching",
      description: "Personalized professional upskilling",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      features: [
        "Customized learning plans",
        "Executive coaching",
        "Leadership development",
        "Career guidance"
      ]
    },
    {
      title: "Micro-Content",
      description: "Toolkits, videos, and books",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      features: [
        "Quick reference guides",
        "Instructional videos",
        "E-books and workbooks",
        "Templates and frameworks"
      ]
    }
  ];

  return (
    <section id="key-offerings" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 md:mx-[120px] mx-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Reveal delay={baseDelay}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient bg-gradient-to-r from-[#0284c7] to-[#0d9488] bg-clip-text text-transparent">Key Offerings</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for professional development and corporate learning
            </p>
          </div>
        </Reveal>

        {/* Key Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyOfferings.map((offering, index) => (
            <Reveal 
              key={index}
              delay={baseDelay + stepDelay * (1 + index * 0.5)}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group">
                <div className="relative h-48 w-full">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="bg-gradient-to-r from-[#0284c7] to-[#0d9488] bg-clip-text text-transparent">
                      {offering.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-4">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <Reveal 
                      
                        key={idx}
                        delay={baseDelay + stepDelay * (2 + index * 0.5 + idx * 0.1)}
                      >
                        <li className="flex items-start">
                          <svg className="w-4 h-4 mt-1 mr-2 text-[#0284c7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;