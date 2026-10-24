import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Language } from '../data/content';

export type PageTab = 'home' | 'services' | 'portfolio' | 'contact';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  currentLang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  currentLang,
  onToggleLang,
}) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-surface-pure/95 backdrop-blur-xl border border-jodhpur/50 shadow-soft rounded-pill px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-200">
        {/* Brand Zone */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-md group-hover:scale-105 transition-transform">
            BFO
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-royal-deep leading-none">
              BFO CONSULTING
            </span>
            <span className="text-sm uppercase font-semibold tracking-wider text-aster mt-0.5 hidden xs:block">
              {currentLang === 'ja' ? '京都町家データ分析' : 'Kyoto Machiya Data'}
            </span>
          </div>
        </button>

        {/* 4 Page Nav Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectTab('home')}
            className={`px-3 py-1.5 rounded-pill text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-royal text-white shadow-sm'
                : 'text-royal-deep/75 hover:text-royal hover:bg-luster'
            }`}
          >
            {currentLang === 'ja' ? '会社概要' : 'Home'}
          </button>
          <button
            onClick={() => onSelectTab('services')}
            className={`px-3 py-1.5 rounded-pill text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'services'
                ? 'bg-royal text-white shadow-sm'
                : 'text-royal-deep/75 hover:text-royal hover:bg-luster'
            }`}
          >
            {currentLang === 'ja' ? 'サービス' : 'Services'}
          </button>
          <button
            onClick={() => onSelectTab('portfolio')}
            className={`px-3 py-1.5 rounded-pill text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'portfolio'
                ? 'bg-royal text-white shadow-sm'
                : 'text-royal-deep/75 hover:text-royal hover:bg-luster'
            }`}
          >
            {currentLang === 'ja' ? 'レポート・分析' : 'Portfolio'}
          </button>
          <button
            onClick={() => onSelectTab('contact')}
            className={`px-3 py-1.5 rounded-pill text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-royal text-white shadow-sm'
                : 'text-royal-deep/75 hover:text-royal hover:bg-luster'
            }`}
          >
            {currentLang === 'ja' ? 'お問い合わせ' : 'Contact'}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center gap-1 text-sm font-bold text-royal bg-aster-light hover:bg-aster/30 px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
            title="Toggle Language / 言語切替"
            aria-label="Toggle language between English and Japanese"
          >
            <Globe className="w-3.5 h-3.5 text-royal" />
            <span className={currentLang === 'en' ? 'text-royal' : 'text-royal/60'}>EN</span>
            <span className="text-aster">/</span>
            <span className={currentLang === 'ja' ? 'text-royal' : 'text-royal/60'}>JA</span>
          </button>

          <button
            onClick={() => onSelectTab('contact')}
            className="bg-habanero hover:bg-habanero-hover text-white text-sm font-bold px-4 py-2 rounded-pill shadow-soft transition-all duration-200 hidden sm:flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Secondary Tab Strip */}
      <div className="flex md:hidden items-center justify-center gap-1 mt-2 max-w-sm mx-auto bg-white/90 backdrop-blur-md p-1 rounded-pill border border-jodhpur/40 shadow-sm">
        <button
          onClick={() => onSelectTab('home')}
          className={`flex-1 py-1 text-sm font-bold rounded-pill text-center transition-all ${
            activeTab === 'home' ? 'bg-royal text-white' : 'text-royal-deep/70'
          }`}
        >
          {currentLang === 'ja' ? '概要' : 'Home'}
        </button>
        <button
          onClick={() => onSelectTab('services')}
          className={`flex-1 py-1 text-sm font-bold rounded-pill text-center transition-all ${
            activeTab === 'services' ? 'bg-royal text-white' : 'text-royal-deep/70'
          }`}
        >
          {currentLang === 'ja' ? 'サービス' : 'Services'}
        </button>
        <button
          onClick={() => onSelectTab('portfolio')}
          className={`flex-1 py-1 text-sm font-bold rounded-pill text-center transition-all ${
            activeTab === 'portfolio' ? 'bg-royal text-white' : 'text-royal-deep/70'
          }`}
        >
          {currentLang === 'ja' ? '分析' : 'Portfolio'}
        </button>
        <button
          onClick={() => onSelectTab('contact')}
          className={`flex-1 py-1 text-sm font-bold rounded-pill text-center transition-all ${
            activeTab === 'contact' ? 'bg-royal text-white' : 'text-royal-deep/70'
          }`}
        >
          {currentLang === 'ja' ? '連絡' : 'Contact'}
        </button>
      </div>
    </header>
  );
};
