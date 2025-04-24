
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/#hero" },
    { name: "Vision", to: "/#vision" },
    { name: "Why DIIC", to: "/#opportunity" },
    { name: "Services", to: "/#services" },
    { name: "Advantages", to: "/#advantages" },
    { name: "Contact", to: "/#contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll to section when clicking navigation links
  const handleNavClick = (sectionId: string) => {
    // Close mobile menu first if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // After a small delay, scroll to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop - 70, // Account for header height
          behavior: "smooth"
        });
      }
    }, 10);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
              alt="DIIC Logo" 
              className="h-9 md:h-10 mr-2"
            />
            <span className={`font-display font-bold text-base md:text-xl ${isScrolled ? 'text-diic-blue' : 'text-white'}`}>
              {isMobile ? "DIIC" : "Dubai Indian Integrated Centre"}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => handleNavClick(link.to.replace('/#', ''))}
                className={`cursor-pointer font-medium hover:text-diic-gold transition-colors relative group ${
                  isScrolled ? "text-diic-blue" : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-diic-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className={`p-2 ${isScrolled ? "text-diic-blue" : "text-white"}`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Optimized for touch */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg absolute left-0 right-0 top-full border-t">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => handleNavClick(link.to.replace('/#', ''))}
                  className="text-diic-blue hover:text-diic-gold hover:bg-gray-50 transition-colors py-3 px-6 border-b border-gray-100 mobile-touch-target"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
