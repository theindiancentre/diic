
import React from "react";
import { 
  Target, Award, MapPin, Users 
} from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

const Advantages = () => {
  const advantages = [
    {
      title: "Clear Market Demand",
      description: "Addressing the needs of 3.5+ million Indians in the UAE and growing bilateral ties.",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Sustainable Returns Model",
      description: "Carefully structured to deliver consistent long-term financial performance.",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Strategic Location",
      description: "Positioned as a gateway between East and West, enhancing market access.",
      icon: <MapPin className="h-8 w-8" />
    },
    {
      title: "Experienced Leadership",
      description: "Led by a team with deep industry expertise and regional knowledge.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <section 
      id="advantages" 
      className="py-24 relative text-white overflow-hidden"
    >
      {/* Enhanced parallax background */}
      <div 
        className="absolute inset-0 bg-diic-blue bg-cover bg-center -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(13, 76, 139, 0.9), rgba(0, 45, 98, 0.95)), url('/lovable-uploads/318ceba2-fa80-49f3-a09b-8cf821be1f77.png')",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement animation="fade-up" threshold={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 font-display">
            Strategic Advantages
          </h2>
          
          <div className="w-24 h-1 bg-diic-gold mx-auto mb-16"></div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AnimatedElement 
              key={index} 
              animation="zoom-in" 
              delay={index * 150}
              threshold={0.2}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="bg-diic-gold/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-diic-gold">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">{advantage.title}</h3>
                <p className="text-white/80 text-center">{advantage.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Counter stats with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { value: "3.5M+", label: "Indian Expatriates in UAE" },
            { value: "$60B+", label: "Bilateral Trade Volume" },
            { value: "11", label: "Integrated Service Sectors" },
            { value: "100%", label: "Commitment to Excellence" }
          ].map((stat, index) => (
            <AnimatedElement 
              key={index} 
              animation="fade-up" 
              delay={800 + (index * 150)}
              threshold={0.25}
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-diic-gold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default Advantages;
