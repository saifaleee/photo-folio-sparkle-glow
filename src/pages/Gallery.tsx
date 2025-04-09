
import React, { useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import GalleryGrid from "../components/Gallery/GalleryGrid";

// Example gallery items - in a real app you'd likely fetch these from an API
const galleryItems = [
  {
    id: 1,
    title: "Watercolor Dreams",
    category: "Portrait",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Urban Explorer",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Creative Workspace",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Code Poetry",
    category: "Conceptual",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Digital Canvas",
    category: "Abstract",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Light Study",
    category: "Experimental",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Morning Ritual",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Architectural Lines",
    category: "Urban",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Creative Process",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Portrait", "Lifestyle", "Commercial", "Conceptual", "Abstract", "Experimental", "Urban"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <MainLayout>
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my collection of photography work across various styles and categories.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="animate-fade-in">
            <GalleryGrid items={filteredItems} columns={3} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
