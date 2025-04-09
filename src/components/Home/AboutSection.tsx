
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Photographer portrait" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="page-title">About Me</h2>
            <p className="text-lg mb-6">
              I'm a contemporary photographer with over 10 years of experience capturing moments that tell compelling stories. My work focuses on finding beauty in simplicity and authenticity in every frame.
            </p>
            <p className="text-lg mb-8">
              Based in New York but working globally, I specialize in portrait, lifestyle, and commercial photography with a distinctive minimalist style that emphasizes natural light and genuine emotion.
            </p>
            <Link 
              to="/about"
              className="inline-block border border-gray-300 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
