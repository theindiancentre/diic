
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface OptimizedScrollCueProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  duration?: number;
  distance?: number;
}

const OptimizedScrollCue: React.FC<OptimizedScrollCueProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  duration = 700,
  distance = 30,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  // Reduce animation complexity on mobile
  const mobileDistance = isMobile ? Math.min(distance, 20) : distance;
  const mobileDuration = isMobile ? Math.min(duration, 500) : duration;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${mobileDistance}px)`;
        case 'down': return `translateY(-${mobileDistance}px)`;
        case 'left': return `translateX(${mobileDistance}px)`;
        case 'right': return `translateX(-${mobileDistance}px)`;
        default: return `translateY(${mobileDistance}px)`;
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${mobileDuration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default OptimizedScrollCue;
