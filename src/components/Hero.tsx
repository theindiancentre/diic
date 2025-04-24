
import React, { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import ScrollCue from "./ScrollCue";

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

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const offset = scrollPosition * 0.4;
        
        if (scrollPosition < heroHeight) {
          // Apply parallax effect to background
          heroRef.current.style.backgroundPositionY = `calc(50% + ${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 45, 98, 0.8), rgba(0, 103, 71, 0.8)), url('/lovable-uploads/3067b44f-9973-473b-b9cf-34a731ff49b2.png')`,
        transition: 'background-position-y 0.3s ease-out'
      }}
      ref={heroRef}
    >
      {/* Enhanced overlay with gradients and particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
      
      {/* Animated particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index}
            className="absolute bg-white/10 rounded-full blur-md animate-float"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <ScrollCue delay={100} className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
            alt="DIIC Logo" 
            className="h-24 md:h-32 animate-float"
          />
        </ScrollCue>

        <ScrollCue delay={300}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Dubai Indian Integrated Centre</span>
            <span className="block text-xl md:text-2xl lg:text-3xl text-diic-gold mt-4">
              A Strategic Initiative in the UAE
            </span>
          </h1>
        </ScrollCue>
        
        <ScrollCue delay={500}>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Building bridges between nations through sustainable investments
            and social value creation on an integrated platform.
          </p>
        </ScrollCue>

        <ScrollCue delay={700} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollLink
            to="vision"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className="btn-primary"
          >
            Discover Our Vision
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className="btn-secondary"
          >
            Connect With Us
          </ScrollLink>
        </ScrollCue>
      </div>

      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-80}
          duration={700}
          className="text-white/80 hover:text-white cursor-pointer transition-colors"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-1 opacity-70">Explore</span>
            <ChevronDown className="w-8 h-8" />
          </div>
        </ScrollLink>
      </div>

      {/* Enhanced animated overlay decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-diic-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-diic-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-diic-green/10 rounded-full blur-2xl animate-pulse-slow" 
           style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse-slow"
           style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;
