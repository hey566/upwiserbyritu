import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const Blog = () => {
  // Animation timing configuration
  const baseDelay = 0.1;
  const stepDelay = 0.15;
  const baseDuration = 0.6;

  const featuredPosts = [
    {
      id: 1,
      title: "5 Advanced Excel Hacks for Corporate Professionals",
      excerpt: "Transform your spreadsheets with these time-saving techniques used by top analysts.",
      category: "Productivity",
      date: "July 4, 2025",
      slug: "/blog/excel-hacks",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
        alt: "Excel dashboard on computer screen",
        credit: "Photo by Windows on Unsplash"
      }
    },
    {
      id: 2,
      title: "Designing High-Impact PowerPoint Decks in 2025",
      excerpt: "Learn the visual storytelling frameworks that make executives pay attention.",
      category: "Communication",
      date: "June 28, 2025",
      slug: "/blog/powerpoint-tips",
      image: {
        src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
        alt: "Professional presentation on laptop",
        credit: "Photo by Firmbee.com on Unsplash"
      }
    },
    {
      id: 3,
      title: "Ritu Arora's Methodology for Effective Corporate Training",
      excerpt: "Behind-the-scenes of Upwise's proven framework for adult learning.",
      category: "Leadership",
      date: "June 20, 2025",
      slug: "/blog/train-the-trainer",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
        alt: "Corporate training session in progress",
        credit: "Photo by Campaign Creators on Unsplash"
      }
    }
  ];

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 md:mx-[120px] mx-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Reveal delay={baseDelay}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upwise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Resources</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights on professional development, corporate training, and career growth
            </p>
          </div>
        </Reveal>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Reveal 
              key={post.id}
              delay={baseDelay + stepDelay * (1 + index * 0.5)}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group">
                {/* Image Container with Category Tag */}
                <div className="relative h-48 w-full">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <Reveal delay={baseDelay + stepDelay * (2 + index * 0.5)}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-blue-600">BLOG POST</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </Reveal>
                  
                  <Reveal delay={baseDelay + stepDelay * (2.2 + index * 0.5)}>
                    <Link href={post.slug}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </Reveal>
                  
                  <Reveal delay={baseDelay + stepDelay * (2.4 + index * 0.5)}>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </Reveal>
                  
                  <Reveal delay={baseDelay + stepDelay * (2.6 + index * 0.5)}>
                    <Link href={post.slug}>
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                        Read Article
                      </button>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal delay={baseDelay + stepDelay * 4}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Want more professional growth resources?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals getting our monthly insights on Excel, PowerPoint, and career advancement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Reveal delay={baseDelay + stepDelay * 4.5}>
                  <Link href="/blog/archive">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                      Browse All Articles
                    </button>
                  </Link>
                </Reveal>
                <Reveal delay={baseDelay + stepDelay * 4.7}>
                  <Link href="/newsletter">
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      Subscribe to Newsletter
                    </button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;