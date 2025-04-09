
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-cormorant tracking-wider">
              NOVO
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <p>© {new Date().getFullYear()} Novo. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://instagram.com" className="hover:text-gray-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-600 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
