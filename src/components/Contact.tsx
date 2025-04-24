
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
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

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.reveal-text');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-white" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-diic-blue to-diic-deepBlue rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/318ceba2-fa80-49f3-a09b-8cf821be1f77.png" 
                  alt="DIIC Building" 
                  className="h-full w-full object-cover"
                  style={{ minHeight: "400px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-diic-blue/80 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
                    The DIIC Invitation
                  </h3>
                  <p className="text-white/90 text-lg">
                    Shape a Future of Shared Growth and Connection
                  </p>
                </div>
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-12">
                <div className="reveal-text">
                  <p className="text-white/90 leading-relaxed mb-8">
                    This invitation extends beyond conventional investment metrics towards the creation of enduring, 
                    shared value. The Indian Integrated Centre represents the culmination of visionary planning and 
                    tangible community commitment – a meticulously designed ecosystem poised for sustainable growth 
                    and profound social integration. We seek strategic partners prepared to engage with a unique 
                    opportunity where economic vitality and community well-being are mutually reinforcing. If you 
                    share our conviction in building this integrated future, we invite you to discuss this landmark 
                    opportunity further.
                  </p>
                  
                  <div className="border-t border-white/20 pt-6 mb-6">
                    <h4 className="text-white text-xl font-semibold mb-4">Please direct your inquiries to:</h4>
                    <p className="text-diic-gold font-bold text-lg">Chairman Jaber Ahmed Darwish</p>
                    
                    <div className="flex flex-col space-y-3 mt-4">
                      <a 
                        href="mailto:contact@diic.ae" 
                        className="flex items-center text-white/80 hover:text-white transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        <span>contact@diic.ae</span>
                      </a>
                      
                      <a 
                        href="tel:+97142123456" 
                        className="flex items-center text-white/80 hover:text-white transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        <span>+971 4 212 3456</span>
                      </a>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-diic-gold hover:bg-diic-gold/90 text-diic-blue font-medium mt-4 px-8 py-6 h-auto rounded-full transition-all transform hover:scale-105"
                  >
                    Connect With Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
