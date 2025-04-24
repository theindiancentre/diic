
import React, { useEffect, useRef, useState } from 'react';

interface ScrollCueProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  delay?: number;
  className?: string;
}

const ScrollCue: React.FC<ScrollCueProps> = ({
  children,
  direction = 'up',
  threshold = 0.1,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Set initial and animated states based on direction
  const getInitialStyles = (): React.CSSProperties => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return { transform: 'translateY(30px)', opacity: 0 };
        case 'down':
          return { transform: 'translateY(-30px)', opacity: 0 };
        case 'left':
          return { transform: 'translateX(30px)', opacity: 0 };
        case 'right':
          return { transform: 'translateX(-30px)', opacity: 0 };
        default:
          return { opacity: 0 };
      }
    }
    return {};
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        ...getInitialStyles(),
        transitionDelay: `${delay}ms`,
        ...(isVisible && { transform: 'translate(0, 0)', opacity: 1 }),
      }}
    >
      {children}
    </div>
  );
};

export default ScrollCue;
