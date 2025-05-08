import React from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-white lg:text-slate-900 font-title font-normal text-xl lg:text-2xl mb-2 lg:mb-[0.5rem]">
        {title}
      </h1>
      <h2 className="text-white/90 lg:text-slate-600 font-title font-normal text-base lg:text-lg">
        {subtitle}
      </h2>
    </div>
  );
};

export default Title;