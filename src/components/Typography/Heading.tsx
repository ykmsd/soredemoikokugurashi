import React, { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  level = 1, 
  children, 
  className = '' 
}) => {
  const baseStyles = "font-display font-bold leading-tight mb-6 text-slate-800";
  
  const styles = {
    1: "text-6xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };
  
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${baseStyles} ${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;