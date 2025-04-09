
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  width?: number;
  height?: number;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, columns = 3 }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    
    const currentIndex = items.findIndex(item => item.id === selectedItem.id);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    } else {
      newIndex = (currentIndex + 1) % items.length;
    }
    
    setSelectedItem(items[newIndex]);
  };

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-3 md:gap-5`}>
        {items.map((item) => (
          <div 
            key={item.id}
            className="gallery-item aspect-square"
            onClick={() => openLightbox(item)}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="gallery-item-img"
            />
            <div className="gallery-item-overlay">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-cormorant">{item.title}</h3>
                <p className="text-sm uppercase tracking-wider mt-1">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl bg-black/95 border-none p-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedItem && (
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title}
                className="max-h-[85vh] max-w-full object-contain"
              />
            )}
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>
            
            {selectedItem && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-cormorant">{selectedItem.title}</h3>
                <p className="text-sm uppercase tracking-wider mt-1">{selectedItem.category}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryGrid;
