
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Opportunity from "@/components/Opportunity";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { initScrollHandlers, updateScrollProgress } from "@/lib/smoothScroll";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Add a class to the body when page is loaded for page transition effects
    document.body.classList.add('page-loaded');

    // Initialize scroll handlers including progress bar
    const cleanup = initScrollHandlers();

    // Track scroll position for animations with performance optimization
    const handleScroll = () => {
      // Update scroll progress indicator
      updateScrollProgress();
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const scrollTriggers = document.querySelectorAll('.scroll-trigger');
        
        scrollTriggers.forEach(el => {
          if (!el.classList.contains('visible')) {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.8;
            
            if (isVisible) {
              el.classList.add('visible');
            }
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case elements are already in view
    handleScroll();

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('page-loaded');
      cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Vision />
      <Opportunity />
      <Services />
      <Advantages />
      <Contact />
      <Footer />
      
      {/* Mobile-optimized floating action button for quick navigation to contact */}
      <div className="fixed bottom-6 right-6 z-40 animate-float">
        <a 
          href="#contact"
          className="bg-diic-gold hover:bg-diic-gold/90 text-diic-blue w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform transition-all hover:scale-110 mobile-touch-target"
          aria-label="Connect With Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>

      {/* Optimized Progress indicator */}
      <div className="fixed left-0 top-0 h-1 bg-diic-gold z-50" id="scroll-progress" style={{ width: '0%' }} />
    </div>
  );
};

export default Index;
