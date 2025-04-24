
import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const Opportunity = () => {
  const opportunityRef = useRef<HTMLDivElement>(null);
  
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

    if (opportunityRef.current) {
      const elements = opportunityRef.current.querySelectorAll('.reveal-text');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="opportunity" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={opportunityRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Why DIIC?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e5eff213-0c1d-4bf7-acf7-6a38c507f6d1.png" 
                alt="DIIC Opportunity" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-diic-gold/20 blur-lg"></div>
              <div className="absolute -top-5 -left-5 w-40 h-40 rounded-full bg-diic-blue/10 blur-xl"></div>
              
              {/* Flag overlay */}
              <div className="absolute top-4 right-4 flex space-x-3">
                <img 
                  src="/lovable-uploads/e5eff213-0c1d-4bf7-acf7-6a38c507f6d1.png" 
                  alt="UAE Flag" 
                  className="h-8 w-12 object-cover shadow-md"
                />
                <img 
                  src="/lovable-uploads/e5eff213-0c1d-4bf7-acf7-6a38c507f6d1.png" 
                  alt="Indian Flag" 
                  className="h-8 w-12 object-cover shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="reveal-text text-2xl md:text-3xl font-display font-bold text-diic-blue mb-6">
              The Market Opportunity
            </h3>
            
            <p className="reveal-text text-lg text-gray-700 mb-8">
              The Dubai Indian Integrated Centre addresses a significant market need by creating a comprehensive 
              platform that brings together multiple service sectors under one unified ecosystem.
            </p>
            
            <ul className="space-y-4">
              {[
                "Growing UAE-India economic relationship with bilateral trade exceeding $60 billion",
                "3.5+ million Indian expatriates in the UAE seeking integrated services",
                "Increasing demand for specialized healthcare, education and financial services",
                "Strategic location serving as a gateway between East and West",
                "Unprecedented opportunity to create shared value across multiple sectors"
              ].map((item, index) => (
                <li key={index} className="reveal-text flex items-start">
                  <span className="bg-diic-green/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-diic-green" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="reveal-text mt-10 p-4 bg-diic-blue/5 border-l-4 border-diic-blue rounded-r-lg">
              <p className="text-diic-deepBlue italic">
                "DIIC represents a unique opportunity to create an integrated ecosystem that serves the growing 
                Indian diaspora while fostering deeper UAE-India connections."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
