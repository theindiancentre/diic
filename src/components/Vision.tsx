
import React from "react";
import SplitSection from "./SplitSection";
import { AnimatedElement } from "./AnimatedElement";

const Vision = () => {
  const imageContent = (
    <div className="relative overflow-hidden group">
      <AnimatedElement animation="fade-right" threshold={0.2} className="relative z-10">
        <img 
          src="/lovable-uploads/9848da28-d512-433a-80ae-7f5eb05dcb43.png" 
          alt="DIIC Building" 
          className="rounded-lg shadow-xl w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatedElement>
      
      {/* Decorative elements with enhanced animation */}
      <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-diic-gold/10 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-diic-blue/10 rounded-full blur-lg -z-10 animate-pulse-slow"></div>
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-diic-gold/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-8 -left-6 w-8 h-8 border-2 border-diic-blue/30 rounded-full"></div>
    </div>
  );

  const textContent = (
    <div>
      <AnimatedElement animation="fade-up" threshold={0.2}>
        <h2 className="section-heading mb-8">Our Vision & Objective</h2>
      </AnimatedElement>
      
      <AnimatedElement animation="fade-up" delay={200} threshold={0.2}>
        <p className="text-lg text-gray-700 mb-6">
          The Dubai Indian Integrated Centre (DIIC) aims to establish a sustainable investment avenue 
          that creates exceptional social value through an integrated platform of services. 
        </p>
      </AnimatedElement>
      
      <AnimatedElement animation="fade-up" delay={400} threshold={0.2}>
        <p className="text-lg text-gray-700 mb-8">
          Our objective is to build a comprehensive ecosystem that bridges the gap between UAE and India,
          fostering economic growth while ensuring community well-being and cultural connection.
        </p>
      </AnimatedElement>
      
      <div className="flex flex-col space-y-6">
        {[
          {
            number: 1,
            title: "Sustainable Investment",
            description: "Creating long-term financial returns while supporting economic growth",
            color: "bg-diic-blue",
            textColor: "text-white"
          },
          {
            number: 2,
            title: "Social Value",
            description: "Enhancing community well-being through integrated services",
            color: "bg-diic-gold",
            textColor: "text-diic-blue"
          },
          {
            number: 3,
            title: "Integration",
            description: "Building bridges between UAE and India through commerce and culture",
            color: "bg-diic-green",
            textColor: "text-white"
          }
        ].map((item, index) => (
          <AnimatedElement key={index} animation="fade-up" delay={600 + (index * 200)} threshold={0.2}>
            <div className="flex items-center group">
              <div className={`w-14 h-14 rounded-full ${item.color} ${item.textColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <span className="font-bold text-lg">{item.number}</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-diic-blue">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SplitSection 
            leftContent={imageContent}
            rightContent={textContent}
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
