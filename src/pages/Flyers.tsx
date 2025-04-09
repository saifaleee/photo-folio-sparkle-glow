
import React from "react";
import MainLayout from "../components/Layout/MainLayout";

const Flyers = () => {
  return (
    <MainLayout>
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">Animated Flyers</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our collection of eye-catching animated flyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Animated Flyer items */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  {/* In a real implementation, these would be videos or animated GIFs */}
                  <img 
                    src={`https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&auto=format&fit=crop&q=80`} 
                    alt={`Flyer ${item}`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      {/* Play button icon */}
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-black ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cormorant mb-2">Animated Flyer {item}</h3>
                  <p className="text-gray-600">An eye-catching animated promotion designed to grab attention and deliver your message effectively.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Flyers;
