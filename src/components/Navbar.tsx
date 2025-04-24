
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Vision", to: "vision" },
    { name: "Why DIIC", to: "opportunity" },
    { name: "Services", to: "services" },
    { name: "Advantages", to: "advantages" },
    { name: "Contact", to: "contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
              alt="DIIC Logo" 
              className="h-10 mr-2"
            />
            <span className={`font-display font-bold text-xl ${isScrolled ? 'text-diic-blue' : 'text-white'}`}>
              Dubai Indian Integrated Centre
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className={`cursor-pointer font-medium hover:text-diic-gold transition-colors relative group ${
                  isScrolled ? "text-diic-blue" : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-diic-gold transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={isScrolled ? "text-diic-blue" : "text-white"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg absolute left-0 right-0 top-full border-t">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={700}
                  onClick={toggleMobileMenu}
                  className="text-diic-blue hover:text-diic-gold transition-colors py-2 border-b border-gray-100"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
