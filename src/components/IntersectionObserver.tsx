
import React, { useEffect, useRef } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animationClass?: string;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  animationClass = "animate-fade-in"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);
  
  return (
    <div 
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default IntersectionObserver;
