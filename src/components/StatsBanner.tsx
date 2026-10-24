import React from 'react';
import { Language } from '../data/content';

interface StatsBannerProps {
  currentLang: Language;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ currentLang }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 my-6">
      <div className="relative bg-gradient-to-r from-royal via-[#1a2d7a] to-royal-deep rounded-card p-8 md:p-10 text-white overflow-hidden shadow-glow-royal">
        {/* Abstract gradient mesh overlay */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-aster/20 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -top-20 w-60 h-60 rounded-full bg-habanero/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {/* Stat 1: Scale */}
          <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums">
                  101,996
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                  {currentLang === 'ja' ? '実証分析' : 'Empirical Pool'}
                </span>
              </div>
              <div className="text-sm font-semibold text-white/95">
                {currentLang === 'ja' ? '公開レビューを読破' : 'Public Guest Reviews'}
              </div>
            </div>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              {currentLang === 'ja'
                ? '367軒の京都町家、20言語、2023年8月〜2026年10月のデータを網羅。'
                : 'Across 367 Kyoto properties in 20 languages, August 2023 to October 2026.'}
            </p>
          </div>

          {/* Stat 2: Price Parity */}
          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col justify-between">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2 font-mono tabular-nums">
                ¥47k <span className="text-xl font-normal text-white/70">vs</span> ¥52k
              </div>
              <div className="text-sm font-semibold text-white/95">
                {currentLang === 'ja' ? '上位・下位の宿泊単価はほぼ同一' : 'Price Parity Gap'}
              </div>
            </div>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              {currentLang === 'ja'
                ? '上位25%と下位25%の町家は同じ立地・建物で同じ価格を提示。差は運営手法にあります。'
                : 'Top and bottom quarter machiya ask about the same price. The gap is how the house is run.'}
            </p>
          </div>

          {/* Stat 3: Host Praise Spread */}
          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col justify-between">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2 font-mono tabular-nums">
                43% <span className="text-xl font-normal text-white/70">vs</span> 14%
              </div>
              <div className="text-sm font-semibold text-white/95">
                {currentLang === 'ja' ? 'ホストへの称賛コメント率' : 'Host Praise Spread'}
              </div>
            </div>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              {currentLang === 'ja'
                ? '上位町家の好意的レビューの43%がホストの対応を評価（下位はわずか14%）。'
                : 'Guests praise the host in 43% of positive comments at top houses and only 14% at the bottom.'}
            </p>
          </div>

          {/* Stat 4: Rating Drop */}
          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col justify-between">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-habanero mb-2 font-mono tabular-nums">
                -0.36 pt
              </div>
              <div className="text-sm font-semibold text-white/95">
                {currentLang === 'ja' ? '「評価4」1件によるスコア下落' : 'One 4-Star Penalty'}
              </div>
            </div>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              {currentLang === 'ja'
                ? '年平均13件の町家では、「星4」が1件つくだけで表示スコアが即日0.36点急落。'
                : 'One review of 4 takes 0.36 off the score guests see on the day it appears.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
