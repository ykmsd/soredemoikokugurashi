import React from 'react';
import Paragraph from '../Typography/Paragraph';

const LinkSection: React.FC = () => {
  return (
    <Paragraph className="text-white/80 lg:text-slate-600 font-title text-[0.6875rem] font-light">
      <a
        href="https://c.bunfree.net/c/tokyo40/4F/%E3%81%9D/21"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white lg:hover:text-slate-900 transition-colors"
      >
        文学フリマ東京（Port そ-21）
      </a>、
            <a
        href="https://ykmsd.booth.pm/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white lg:hover:text-slate-900 transition-colors"
      >
        BOOTH
      </a>
      で販売します。
    </Paragraph>
  );
};

export default LinkSection;