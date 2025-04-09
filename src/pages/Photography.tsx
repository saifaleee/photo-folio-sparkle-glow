
import React from "react";
import MainLayout from "../components/Layout/MainLayout";

const Photography = () => {
  // Categories for filtering
  const categories = ["All", "Portrait", "Nature", "Architecture", "Events"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Sample photography items
  const photos = [
    { id: 1, category: "Portrait", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=80", title: "Natural Portrait" },
    { id: 2, category: "Nature", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=80", title: "Forest Light" },
    { id: 3, category: "Architecture", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&auto=format&fit=crop&q=80", title: "Urban Structure" },
    { id: 4, category: "Events", image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&auto=format&fit=crop&q=80", title: "Night Event" },
    { id: 5, category: "Portrait", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80", title: "Studio Portrait" },
    { id: 6, category: "Nature", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80", title: "Mountain Lake" },
    { id: 7, category: "Architecture", image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=80", title: "Modern Building" },
    { id: 8, category: "Events", image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&auto=format&fit=crop&q=80", title: "Corporate Reception" },
  ];

  // Filter photos based on active category
  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <MainLayout>
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">Photography</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of stunning photography work
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border ${
                  activeCategory === category
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-50"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="gallery-item">
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="gallery-item-img aspect-[3/4] object-cover"
                />
                <div className="gallery-item-overlay">
                  <h3 className="text-white text-lg font-cormorant">{photo.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Photography;
