
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  // Navigation links for the footer
  const navLinks = [
    { name: "Home", to: "/#hero" },
    { name: "Vision", to: "/#vision" },
    { name: "Why DIIC", to: "/#opportunity" },
    { name: "Services", to: "/#services" },
    { name: "Advantages", to: "/#advantages" },
    { name: "Contact", to: "/#contact" }
  ];
  
  return (
    <footer className="bg-diic-deepBlue py-10 md:py-12 text-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
              alt="DIIC Logo" 
              className="h-10 md:h-12 mr-3 md:mr-4"
            />
            <div>
              <h3 className="text-base md:text-lg font-semibold text-white">Dubai Indian Integrated Centre</h3>
              <p className="text-xs md:text-sm text-white/60">A Strategic Initiative in the UAE</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-6 md:mb-0">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white/70 hover:text-white transition-colors cursor-pointer mobile-touch-target"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Dubai Indian Integrated Centre. All rights reserved.
          </p>
          
          <div className="flex space-x-5 md:space-x-6">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm mobile-touch-target">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm mobile-touch-target">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
