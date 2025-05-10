import React, { ReactNode, useCallback } from 'react';
import { Send } from 'lucide-react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import TitleSection from '../Content/TitleSection';
import TextSection from '../Content/TextSection';

interface SplitLayoutProps {
  imageUrl: string;
  children: ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ imageUrl, children }) => {
  const handleShareBsky = useCallback(() => {
    const text = "それでも異国暮らし - アメリカ、カナダ、デンマーク、ノルウェー、フランスで働くエンジニアとデザイナー８人による異国暮らしのエッセイ集";
    const url = "https://soredemoikokugurashi.com";
    window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white">
      <div className="flex flex-col lg:flex-col lg:h-[100vh] lg:w-[40%] lg:fixed lg:left-0 bg-[rgb(11,61,130)] min-h-[calc(100vh-4rem)] lg:min-h-0">
        <div className="w-full h-[60vh] min-h-[400px] lg:w-full lg:h-full">
          <LeftPanel imageUrl={imageUrl} />
        </div>
        <div className="w-full lg:hidden bg-[rgb(11,61,130)] p-8 flex justify-center flex-1">
          <div className="max-w-xl w-full">
            <TitleSection />
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] lg:ml-[40%] w-full mt-0 lg:mt-0 bg-white">
        <RightPanel>
          <div className="hidden lg:block">
            <TitleSection />
          </div>
          <TextSection />
          <footer className="mt-24 pt-8 border-t border-slate-200/10 text-slate-400 text-sm flex items-center justify-between">
            <p>© 2025 Port</p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShareBsky}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Share on Bluesky"
              >
                <Send size={16} className="opacity-75 hover:opacity-100 transition-opacity" />
              </button>
              <a
                href="https://github.com/ykmsd/soredemoikokugurashi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <img
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </footer>
        </RightPanel>
      </div>
    </div>
  );
};

export default SplitLayout;