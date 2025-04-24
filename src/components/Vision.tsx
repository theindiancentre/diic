
import React, { useEffect, useRef } from "react";

const Vision = () => {
  const visionRef = useRef<HTMLDivElement>(null);
  
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

    if (visionRef.current) {
      const elements = visionRef.current.querySelectorAll('.reveal-text');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-20 bg-white" ref={visionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Our Vision & Objective</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/9848da28-d512-433a-80ae-7f5eb05dcb43.png" 
                  alt="DIIC Building" 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-diic-gold/10 rounded-full blur-xl -z-0"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-diic-blue/10 rounded-full blur-lg -z-0"></div>
            </div>
            
            <div className="md:w-1/2">
              <p className="reveal-text text-lg text-gray-700 mb-6">
                The Dubai Indian Integrated Centre (DIIC) aims to establish a sustainable investment avenue 
                that creates exceptional social value through an integrated platform of services. 
              </p>
              
              <p className="reveal-text text-lg text-gray-700 mb-6">
                Our objective is to build a comprehensive ecosystem that bridges the gap between UAE and India,
                fostering economic growth while ensuring community well-being and cultural connection.
              </p>
              
              <div className="reveal-text flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-diic-blue text-white flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-diic-blue">Sustainable Investment</h3>
                    <p className="text-gray-600">Creating long-term financial returns while supporting economic growth</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-diic-gold text-diic-blue flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-diic-blue">Social Value</h3>
                    <p className="text-gray-600">Enhancing community well-being through integrated services</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-diic-green text-white flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-diic-blue">Integration</h3>
                    <p className="text-gray-600">Building bridges between UAE and India through commerce and culture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
