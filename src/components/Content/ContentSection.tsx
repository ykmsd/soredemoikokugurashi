import React, { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section className={`mb-16 ${className}`}>
      {children}
    </section>
  );
};

export default ContentSection;