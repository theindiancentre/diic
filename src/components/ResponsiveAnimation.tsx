
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResponsiveAnimationProps {
  children: React.ReactNode;
  className?: string;
  mobileAnimation?: string;
  desktopAnimation?: string;
  delay?: number;
  triggerOnce?: boolean;
}

/**
 * A component that applies different animations based on device type
 * and optimizes animations for mobile devices
 */
const ResponsiveAnimation: React.FC<ResponsiveAnimationProps> = ({
  children,
  className = '',
  mobileAnimation = 'fade-in-up',
  desktopAnimation = 'fade-in-up',
  delay = 0,
  triggerOnce = true,
}) => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationClass = isMobile ? mobileAnimation : desktopAnimation;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [triggerOnce]);

  return (
    <div 
      ref={elementRef}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? `animate-${animationClass}` : 'opacity-0'}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ResponsiveAnimation;
