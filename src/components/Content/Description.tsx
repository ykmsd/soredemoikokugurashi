import React from 'react';
import Paragraph from '../Typography/Paragraph';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <Paragraph
      size="lg"
      className="text-white/90 lg:text-slate-600 mb-8 font-light font-title text-sm lg:text-base leading-relaxed"
    >
      {text}
    </Paragraph>
  );
};

export default Description;