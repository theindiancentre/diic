
import React from 'react';
import ScrollCue from './ScrollCue';

interface SplitSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  reverse?: boolean;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  leftContent,
  rightContent,
  reverse = false,
  className = '',
  leftClassName = '',
  rightClassName = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${className}`}>
      <ScrollCue 
        direction={reverse ? 'right' : 'left'} 
        className={`${reverse ? 'md:order-2' : ''} ${leftClassName}`}
        delay={100}
      >
        {leftContent}
      </ScrollCue>
      
      <ScrollCue 
        direction={reverse ? 'left' : 'right'} 
        className={`${reverse ? 'md:order-1' : ''} ${rightClassName}`}
        delay={300}
      >
        {rightContent}
      </ScrollCue>
    </div>
  );
};

export default SplitSection;
