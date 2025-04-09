
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Camera, Award, Clock, Map } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">About Me</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about my journey, approach, and the passion behind my photography.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Photographer portrait" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            
            <div className="animate-fade-in space-y-6">
              <h2 className="text-3xl font-cormorant font-light">Hello, I'm Alex</h2>
              <p className="text-lg">
                I'm a professional photographer with over 10 years of experience specializing in portrait, lifestyle, and commercial photography. My passion lies in capturing authentic moments and creating visual stories that resonate.
              </p>
              <p className="text-lg">
                After studying Fine Arts and Photography at the School of Visual Arts in New York, I worked with leading magazines and brands before establishing my own studio in 2015. My work has been featured in numerous publications and exhibitions around the world.
              </p>
              <p className="text-lg">
                My approach combines technical precision with artistic vision, allowing me to create images that are both beautiful and meaningful. I believe that photography is not just about taking pictures, but about creating experiences and preserving memories.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 text-center animate-scale-in">
              <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-cormorant mb-2">Photography Style</h3>
              <p className="text-gray-600">
                Clean, minimalist aesthetic with an emphasis on natural light and authentic moments.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 text-center animate-scale-in">
              <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-cormorant mb-2">Experience</h3>
              <p className="text-gray-600">
                Over a decade of professional experience working with leading brands and publications.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 text-center animate-scale-in">
              <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-cormorant mb-2">Availability</h3>
              <p className="text-gray-600">
                Currently accepting new projects and collaborations for the upcoming season.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 text-center animate-scale-in">
              <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-cormorant mb-2">Location</h3>
              <p className="text-gray-600">
                Based in New York City, available for assignments worldwide.
              </p>
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-cormorant font-light mb-6">Let's Create Something Beautiful Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              I'm always excited to collaborate on new projects and bring creative visions to life.
            </p>
            <a 
              href="/contact" 
              className="inline-block border border-gray-300 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
