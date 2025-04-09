
import React from "react";
import MainLayout from "../components/Layout/MainLayout";

const Designs = () => {
  return (
    <MainLayout>
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">Our Designs</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our creative design work and portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Design items will go here */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&auto=format&fit=crop&q=80`} 
                  alt={`Design ${item}`} 
                  className="gallery-item-img"
                />
                <div className="gallery-item-overlay">
                  <h3 className="text-white text-xl font-cormorant">Design Project {item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Designs;
