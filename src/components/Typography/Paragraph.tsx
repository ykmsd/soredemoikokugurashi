import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className = '',
  size = 'md'
}) => {
  const baseStyles = "font-body leading-relaxed mb-6 text-slate-600";
  
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  
  return (
    <p className={`${baseStyles} ${sizes[size]} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;