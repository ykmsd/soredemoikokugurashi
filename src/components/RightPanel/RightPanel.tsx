import React, { ReactNode } from 'react';

interface RightPanelProps {
  children: ReactNode;
}

const RightPanel: React.FC<RightPanelProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="p-8 lg:p-16 fade-in max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default RightPanel;