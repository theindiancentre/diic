
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  imageUrl: string;
  overlayColor?: string;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  imageUrl,
  overlayColor = 'rgba(0, 45, 98, 0.7)',
  speed = 0.5,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const sectionPosition = sectionRef.current.offsetTop;
        const offset = scrollPosition - sectionPosition;
        
        if (
          scrollPosition + window.innerHeight > sectionPosition &&
          scrollPosition < sectionPosition + sectionRef.current.offsetHeight
        ) {
          // Apply the parallax effect by updating the background position
          const yPos = offset * speed;
          sectionRef.current.style.backgroundPosition = `center ${yPos}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-cover bg-center transition-all duration-500 ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
