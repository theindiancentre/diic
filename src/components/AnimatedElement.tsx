
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | 'fade-up' 
    | 'fade-down' 
    | 'fade-left' 
    | 'fade-right' 
    | 'zoom-in' 
    | 'zoom-out'
    | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });
  
  // Calculate animation styles based on type
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { opacity: 0, transform: 'translateY(30px)' };
        case 'fade-down':
          return { opacity: 0, transform: 'translateY(-30px)' };
        case 'fade-left':
          return { opacity: 0, transform: 'translateX(30px)' };
        case 'fade-right':
          return { opacity: 0, transform: 'translateX(-30px)' };
        case 'zoom-in':
          return { opacity: 0, transform: 'scale(0.95)' };
        case 'zoom-out':
          return { opacity: 0, transform: 'scale(1.05)' };
        case 'none':
          return {};
        default:
          return { opacity: 0 };
      }
    }
    return { opacity: 1, transform: 'translate(0, 0) scale(1)' };
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all will-change-transform ${className}`}
      style={{
        ...getAnimationStyles(),
        transitionProperty: 'transform, opacity',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      }}
    >
      {children}
    </div>
  );
};
