import React from 'react';
import Title from './Title';
import Description from './Description';
import LinkSection from './LinkSection';

const TitleSection: React.FC = () => {
  return (
    <header className="lg:mb-12 mb-0">
      <Title
        title="それでも異国暮らし"
        subtitle="帰る？帰らない？漂う私たちの話"
      />
      <Description
        text="アメリカ、カナダ、デンマーク、ノルウェー、フランスで働くエンジニアとデザイナー８人に聞いてみた。いつか日本に帰る？それとも帰らない？誰にも打ち明けられない、異国で移民として暮らす日々を綴ったエッセイ集。"
      />
      <div className="lg:hidden">
        <LinkSection />
      </div>
    </header>
  );
};

export default TitleSection;