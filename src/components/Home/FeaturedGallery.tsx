
import React from "react";
import { Link } from "react-router-dom";
import GalleryGrid from "../Gallery/GalleryGrid";

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
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  }
];

const FeaturedGallery = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="page-title">Featured Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of my most recent photography projects spanning multiple styles and concepts.
          </p>
        </div>
        
        <GalleryGrid items={galleryItems} />
        
        <div className="mt-12 text-center">
          <Link 
            to="/gallery" 
            className="inline-block border border-gray-300 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
