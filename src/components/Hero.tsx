
import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedElement } from "./AnimatedElement";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Enhanced parallax effect
  useEffect(() => {
    if (isMobile) return; // Skip parallax on mobile for performance
    
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Calculate parallax offset for better performance
  const parallaxOffset = isMobile ? 0 : scrollPosition * 0.15;
  const opacityFade = Math.max(1 - scrollPosition * 0.002, 0);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{ 
        perspective: '1000px'
      }}
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 45, 98, 0.85), rgba(0, 103, 71, 0.85)), url('/lovable-uploads/3067b44f-9973-473b-b9cf-34a731ff49b2.png')`,
          backgroundPositionY: isMobile ? 'center' : `calc(50% + ${parallaxOffset}px)`,
          transform: isMobile ? 'none' : `translateZ(-${parallaxOffset * 0.5}px)`,
          opacity: opacityFade,
          transition: isMobile ? 'none' : 'transform 0.1s ease-out'
        }}
      />
      
      {/* Enhanced overlay with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 z-0"></div>
      
      {/* Dynamic particle effects - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 5 : 15)].map((_, index) => (
          <div 
            key={index}
            className="absolute bg-white/10 rounded-full blur-md animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-20 text-center relative">
        <AnimatedElement animation="zoom-in" delay={100} duration={1000} className="mb-6 md:mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
            alt="DIIC Logo" 
            className="h-20 md:h-28 animate-float"
          />
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={300} duration={1000}>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            <span className="block">Dubai Indian Integrated Centre</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-diic-gold mt-3 md:mt-4">
              A Strategic Initiative in the UAE
            </span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={500} duration={1000}>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12">
            Redefining community service & economic engagement for the 
            Indian diaspora in the UAE through a fully integrated platform.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={700} duration={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScrollLink
              to="vision"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="btn-primary w-full sm:w-auto text-center"
            >
              Discover Our Vision
            </ScrollLink>
            
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Connect With Us
            </ScrollLink>
          </div>
        </AnimatedElement>
      </div>

      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="text-white/80 hover:text-white cursor-pointer transition-colors flex flex-col items-center p-2"
          aria-label="Scroll to Vision section"
        >
          <span className="text-xs uppercase tracking-widest mb-1 opacity-80">Explore</span>
          <ChevronDown className="w-6 h-6" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
