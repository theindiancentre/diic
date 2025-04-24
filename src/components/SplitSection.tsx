
import React from 'react';

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
      <div className={`${reverse ? 'md:order-2' : ''} ${leftClassName}`}>
        {leftContent}
      </div>
      
      <div className={`${reverse ? 'md:order-1' : ''} ${rightClassName}`}>
        {rightContent}
      </div>
    </div>
  );
};

export default SplitSection;
