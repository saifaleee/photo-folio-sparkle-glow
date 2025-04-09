
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-cormorant tracking-wider">
            NOVO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/designs" className="nav-link">Designs</Link>
            <Link to="/flyers" className="nav-link">Animated Flyers</Link>
            <Link to="/photography" className="nav-link">Photography</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* WhatsApp Contact Button */}
          <a 
            href="https://wa.me/971545437019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-black/80 transition-colors"
          >
            <WhatsApp size={18} />
            <span>Contact Us</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-20 left-0 w-full h-screen bg-white z-40 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/designs" className="text-xl" onClick={() => setIsOpen(false)}>Designs</Link>
            <Link to="/flyers" className="text-xl" onClick={() => setIsOpen(false)}>Animated Flyers</Link>
            <Link to="/photography" className="text-xl" onClick={() => setIsOpen(false)}>Photography</Link>
            <Link to="/contact" className="text-xl" onClick={() => setIsOpen(false)}>Contact</Link>
            
            {/* WhatsApp Contact Button (Mobile) */}
            <a 
              href="https://wa.me/971545437019" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md w-fit"
              onClick={() => setIsOpen(false)}
            >
              <WhatsApp size={18} />
              <span>Contact Us</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
