import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import OptimizedScrollCue from "./OptimizedScrollCue";
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
  return <section id="contact" className="py-16 md:py-24 bg-white" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <OptimizedScrollCue delay={100}>
            <div className="cta-container overflow-hidden rounded-lg md:rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image side */}
                <div className="relative hidden md:block">
                  <img src="/lovable-uploads/318ceba2-fa80-49f3-a09b-8cf821be1f77.png" alt="DIIC Building" className="h-full w-full object-cover" style={{
                  minHeight: "400px"
                }} />
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
                
                {/* Mobile visible header */}
                <div className="md:hidden bg-diic-blue p-6 text-center">
                  <h3 className="text-2xl font-bold text-white font-display mb-2">
                    The DIIC Invitation
                  </h3>
                  <p className="text-white/90">
                    Shape a Future of Shared Growth and Connection
                  </p>
                </div>
                
                {/* Content side */}
                <div className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-diic-blue to-diic-deepBlue">
                  <div className="reveal-text">
                    <p className="text-white/90 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                      This invitation extends beyond conventional investment metrics towards the creation of enduring, 
                      shared value. The Indian Integrated Centre represents the culmination of visionary planning and 
                      tangible community commitment – a meticulously designed ecosystem poised for sustainable growth 
                      and profound social integration. We seek strategic partners prepared to engage with a unique 
                      opportunity where economic vitality and community well-being are mutually reinforcing. If you 
                      share our conviction in building this integrated future, we invite you to discuss this landmark 
                      opportunity further.
                    </p>
                    
                    <div className="border-t border-white/20 pt-5 mb-5">
                      <h4 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Please direct your inquiries to:</h4>
                      <p className="text-diic-gold font-bold text-lg md:text-xl mx-0 my-0">Jaber Ahmed Darwish, Chairman </p>
                      
                      <div className="flex flex-col space-y-3 mt-4">
                        <a href="mailto:contact@diic.ae" className="flex items-center text-white/80 hover:text-white transition-colors mobile-touch-target">
                          <Mail className="h-5 w-5 mr-2" />
                          <span>chairman@theindiancentre.com</span>
                        </a>
                        
                        <a href="tel:+97142123456" className="flex items-center text-white/80 hover:text-white transition-colors mobile-touch-target">
                          <Phone className="h-5 w-5 mr-2" />
                          <span>+971 4 212 3456</span>
                        </a>
                      </div>
                    </div>
                    
                    <Button className="bg-diic-gold hover:bg-diic-gold/90 text-diic-blue font-medium mt-4 px-6 py-5 h-auto w-full sm:w-auto rounded-full transition-all transform hover:scale-105">
                      Connect With Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </OptimizedScrollCue>
        </div>
      </div>
    </section>;
};
export default Contact;