
import React, { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 45, 98, 0.8), rgba(0, 103, 71, 0.8)), url('/lovable-uploads/3067b44f-9973-473b-b9cf-34a731ff49b2.png')`
      }}
      ref={heroRef}
    >
      {/* Overlay with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
            alt="DIIC Logo" 
            className="h-24 md:h-32 animate-float"
          />
        </div>

        <h1 className="reveal-text font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="block">Dubai Indian Integrated Centre</span>
          <span className="block text-xl md:text-2xl lg:text-3xl text-diic-gold mt-4">
            A Strategic Initiative in the UAE
          </span>
        </h1>
        
        <p className="reveal-text text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 delay-300">
          Building bridges between nations through sustainable investments
          and social value creation on an integrated platform.
        </p>

        <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollLink
            to="vision"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className="bg-diic-gold hover:bg-diic-gold/90 text-diic-blue font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Discover Our Vision
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Connect With Us
          </ScrollLink>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-80}
          duration={700}
          className="text-white/80 hover:text-white cursor-pointer transition-colors"
        >
          <ChevronDown className="w-10 h-10" />
        </ScrollLink>
      </div>

      {/* Animated overlay decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-diic-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-diic-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
