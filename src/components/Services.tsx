
import React, { useEffect, useRef, useState } from "react";
import { 
  Heart, Book, Home, Building, Briefcase, Coins, 
  FileText, Globe, Image, Presentation, Trophy 
} from "lucide-react";
import ServicesCarousel from "./ServicesCarousel";
import ScrollCue from "./ScrollCue";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Services = () => {
  const [isConnectorVisible, setIsConnectorVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const services: Service[] = [
    {
      title: "Healthcare",
      description: "State-of-the-art medical facilities providing comprehensive care to the community.",
      icon: <Heart className="h-6 w-6" />,
      color: "text-red-500"
    },
    {
      title: "Education",
      description: "Excellence in learning with programs catering to all age groups and specializations.",
      icon: <Book className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Real Estate",
      description: "Premium property solutions for residential and commercial requirements.",
      icon: <Home className="h-6 w-6" />,
      color: "text-emerald-500"
    },
    {
      title: "Retail",
      description: "Diverse shopping experiences featuring both local and international brands.",
      icon: <Building className="h-6 w-6" />,
      color: "text-amber-500"
    },
    {
      title: "Insurance",
      description: "Comprehensive coverage options safeguarding individuals and businesses.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "text-indigo-500"
    },
    {
      title: "Finance",
      description: "Expert financial services including banking, investments, and wealth management.",
      icon: <Coins className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "Legal",
      description: "Professional legal guidance for personal and business matters.",
      icon: <FileText className="h-6 w-6" />,
      color: "text-gray-700"
    },
    {
      title: "Technology",
      description: "Cutting-edge tech solutions and digital infrastructure services.",
      icon: <Globe className="h-6 w-6" />,
      color: "text-sky-500"
    },
    {
      title: "Media",
      description: "Creative content production and strategic communication services.",
      icon: <Image className="h-6 w-6" />,
      color: "text-purple-500"
    },
    {
      title: "Culture",
      description: "Vibrant celebrations of heritage through events and community programs.",
      icon: <Presentation className="h-6 w-6" />,
      color: "text-orange-500"
    },
    {
      title: "Sports",
      description: "World-class sporting facilities and recreational activities for all ages.",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-500"
    }
  ];
  
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'services-container') {
            setIsConnectorVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1
    });

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.reveal-text, .stagger-card, #services-container');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-gray-50" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <ScrollCue delay={100}>
          <h2 className="section-heading text-center mb-4">Integrated Services Ecosystem</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            DIIC offers a comprehensive range of services under one unified platform, 
            creating a seamlessly integrated ecosystem that enhances value for all stakeholders.
          </p>
        </ScrollCue>
        
        {/* Central hub with connections - enhanced with better animations */}
        <div className="relative mb-16">
          <div 
            id="services-container" 
            className={`relative mx-auto w-48 h-48 rounded-full flex items-center justify-center bg-white shadow-xl border-4 border-diic-gold ${isConnectorVisible ? 'connector-visible' : ''}`}
          >
            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-diic-gold/10"></div>
            <img 
              src="/lovable-uploads/bc32de25-b932-4514-8a51-7de37f2b74a3.png" 
              alt="DIIC Logo" 
              className="h-24 animate-float"
            />
            
            {/* Enhanced SVG Connector Lines */}
            <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d4c8b" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              
              {/* Top connection */}
              <path d="M100,0 L100,50" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              
              {/* Right connection */}
              <path d="M200,100 L150,100" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              
              {/* Bottom connection */}
              <path d="M100,200 L100,150" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              
              {/* Left connection */}
              <path d="M0,100 L50,100" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              
              {/* Diagonal connections */}
              <path d="M35,35 L65,65" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              <path d="M165,35 L135,65" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              <path d="M35,165 L65,135" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
              <path d="M165,165 L135,135" className="path" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Services carousel for a more interactive experience */}
        <ScrollCue delay={300}>
          <ServicesCarousel services={services} className="mb-16" />
        </ScrollCue>
        
        {/* Services grid - traditional view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card stagger-card opacity-0 animate-fade-in`}
              onClick={() => setSelectedService(service)}
              onMouseEnter={() => setSelectedService(service)}
              onMouseLeave={() => setSelectedService(null)}
            >
              <div className={`mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-diic-blue mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-diic-blue to-diic-gold transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom text */}
        <ScrollCue delay={500} className="mt-16 text-center">
          <p className="italic text-gray-600 max-w-2xl mx-auto">
            Each service within the DIIC ecosystem is designed to complement and enhance the others,
            creating a seamless experience for all users and maximizing value creation.
          </p>
        </ScrollCue>

        {/* Floating service detail panel that appears when hovering over a service */}
        {selectedService && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-2xl border border-gray-200 z-50 max-w-md w-full transition-all duration-300 opacity-100">
            <div className="flex items-center mb-4">
              <div className={`mr-3 ${selectedService.color}`}>
                {selectedService.icon}
              </div>
              <h4 className="text-xl font-bold text-diic-blue">{selectedService.title}</h4>
            </div>
            <p className="text-gray-700">{selectedService.description}</p>
            <div className="mt-4 flex justify-end">
              <button className="text-diic-blue hover:text-diic-gold transition-colors">Learn more</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
