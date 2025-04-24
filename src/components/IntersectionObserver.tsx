
import React, { useEffect, useRef } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animationClass?: string;
  delay?: string; // Support for animation delay
  direction?: "up" | "down" | "left" | "right"; // Support for directional animations
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  animationClass = "animate-fade-in",
  delay = "",
  direction
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
  
  const getAnimationClass = () => {
    if (direction) {
      switch (direction) {
        case "up": return "animate-fade-in-up";
        case "down": return "animate-fade-in-down";
        case "left": return "animate-fade-in-left";
        case "right": return "animate-fade-in-right";
        default: return animationClass;
      }
    }
    return animationClass;
  };
  
  return (
    <div 
      ref={ref}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'} ${delay}`}
      style={{ transitionDelay: isVisible ? delay : "0ms" }}
    >
      {children}
    </div>
  );
};

export default IntersectionObserver;
