
import React from "react";
import { Check } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

const Opportunity = () => {
  return (
    <section 
      id="opportunity" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-up" threshold={0.2}>
          <h2 className="section-heading text-center mb-16">Why DIIC?</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fade-right" threshold={0.2}>
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
          </AnimatedElement>
          
          <div>
            <AnimatedElement animation="fade-up" threshold={0.2}>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-diic-blue mb-6">
                The Market Opportunity
              </h3>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={200} threshold={0.2}>
              <p className="text-lg text-gray-700 mb-8">
                The Dubai Indian Integrated Centre addresses a significant market need by creating a comprehensive 
                platform that brings together multiple service sectors under one unified ecosystem.
              </p>
            </AnimatedElement>
            
            <ul className="space-y-4">
              {[
                "Growing UAE-India economic relationship with bilateral trade exceeding $60 billion",
                "3.5+ million Indian expatriates in the UAE seeking integrated services",
                "Increasing demand for specialized healthcare, education and financial services",
                "Strategic location serving as a gateway between East and West",
                "Unprecedented opportunity to create shared value across multiple sectors"
              ].map((item, index) => (
                <AnimatedElement key={index} animation="fade-up" delay={300 + (index * 100)} threshold={0.15}>
                  <li className="flex items-start">
                    <span className="bg-diic-green/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-5 w-5 text-diic-green" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                </AnimatedElement>
              ))}
            </ul>
            
            <AnimatedElement animation="fade-up" delay={800} threshold={0.2}>
              <div className="mt-10 p-4 bg-diic-blue/5 border-l-4 border-diic-blue rounded-r-lg">
                <p className="text-diic-deepBlue italic">
                  "DIIC represents a unique opportunity to create an integrated ecosystem that serves the growing 
                  Indian diaspora while fostering deeper UAE-India connections."
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
