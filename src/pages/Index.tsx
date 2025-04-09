
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import HeroSlider from "../components/Home/HeroSlider";
import FeaturedGallery from "../components/Home/FeaturedGallery";
import AboutSection from "../components/Home/AboutSection";

const Index = () => {
  return (
    <MainLayout hideFooter={false}>
      <div className="min-h-screen">
        <HeroSlider />
        <FeaturedGallery />
        <AboutSection />
        
        <section className="py-20 text-center bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-cormorant mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              I'm currently accepting new projects and would love to hear about your ideas.
            </p>
            <a 
              href="/contact" 
              className="inline-block border border-gray-300 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
