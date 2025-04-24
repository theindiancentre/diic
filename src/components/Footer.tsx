
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-diic-deepBlue py-12 text-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
              alt="DIIC Logo" 
              className="h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">Dubai Indian Integrated Centre</h3>
              <p className="text-sm text-white/60">A Strategic Initiative in the UAE</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {["Home", "Vision", "Why DIIC", "Services", "Advantages", "Contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item === "Home" ? "hero" : item === "Why DIIC" ? "opportunity" : item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dubai Indian Integrated Centre. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
