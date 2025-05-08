import React from 'react';

interface LeftPanelProps {
  imageUrl: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full bg-[rgb(11,61,130)] flex items-center justify-center">
      <img 
        loading="eager"
        fetchpriority="high"
        src={imageUrl}
        alt="それでも異国暮らし　飛行機の窓から見る夜景のイラスト　帰る？帰らない？漂う私たちの話　Port"
        className="w-[90%] h-[90%] lg:w-[80%] lg:h-[80%]"
        style={{ 
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default LeftPanel;