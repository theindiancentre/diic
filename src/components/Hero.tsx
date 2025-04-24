
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import OptimizedScrollCue from "./OptimizedScrollCue";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1
    });

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.reveal-text');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Optimized parallax effect that only runs on desktop
  useEffect(() => {
    if (isMobile) return; // Skip parallax on mobile for performance

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        setScrollPosition(scrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Calculate parallax offset only for desktop
  const parallaxOffset = isMobile ? 0 : scrollPosition * 0.2;

  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 45, 98, 0.85), rgba(0, 103, 71, 0.85)), url('/lovable-uploads/3067b44f-9973-473b-b9cf-34a731ff49b2.png')`,
        backgroundPositionY: isMobile ? 'center' : `calc(50% + ${parallaxOffset}px)`,
        transition: isMobile ? 'none' : 'background-position-y 0.1s ease-out'
      }}
      ref={heroRef}
    >
      {/* Enhanced overlay with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
      
      {/* Animated particle effects - reduced for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(isMobile ? 5 : 10)].map((_, index) => (
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
      )}

      <div className="container mx-auto px-4 z-10 text-center">
        <OptimizedScrollCue delay={100} className="flex justify-center mb-6 md:mb-8">
          <img 
            src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
            alt="DIIC Logo" 
            className="h-20 md:h-28 animate-float"
          />
        </OptimizedScrollCue>

        <OptimizedScrollCue delay={300}>
          <h1 className="mobile-h1 font-display font-bold text-white mb-4 md:mb-6">
            <span className="block">Dubai Indian Integrated Centre</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-diic-gold mt-3 md:mt-4">
              A Strategic Initiative in the UAE
            </span>
          </h1>
        </OptimizedScrollCue>
        
        <OptimizedScrollCue delay={500}>
          <p className="mobile-body text-white/90 max-w-3xl mx-auto mb-8 md:mb-12">
            Redefining community service & economic engagement for the 
            Indian diaspora in the UAE through a fully integrated platform.
          </p>
        </OptimizedScrollCue>

        <OptimizedScrollCue delay={700} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollLink
            to="vision"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="btn-primary w-full sm:w-auto text-center"
          >
            Discover Our Vision
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="btn-secondary w-full sm:w-auto text-center"
          >
            Connect With Us
          </ScrollLink>
        </OptimizedScrollCue>
      </div>

      {/* Enhanced scroll down indicator - mobile friendly */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
          className="text-white/80 hover:text-white cursor-pointer transition-colors mobile-touch-target flex flex-col items-center p-2"
        >
          <span className="text-xs uppercase tracking-widest mb-1 opacity-70">Explore</span>
          <ChevronDown className="w-6 h-6" />
        </ScrollLink>
      </div>

      {/* Reduced decorative elements for better mobile performance */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-diic-gold/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-diic-blue/10 rounded-full blur-2xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
