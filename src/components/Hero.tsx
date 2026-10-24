import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface HeroProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  onOpenResearchModal: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenConsultation, onOpenResearchModal }) => {
  const [activeHeadlineIndex, setActiveHeadlineIndex] = useState(0);

  const headlines = SITE_CONTENT.heroTaglines;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Proposition & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Nouveau / Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-aster/40 shadow-sm">
            <span className="bg-habanero text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
              {currentLang === 'ja' ? '最新実証研究' : 'OCTOBER 2026'}
            </span>
            <span className="text-xs font-semibold text-royal">
              {currentLang === 'ja'
                ? '京都町家 101,996件の公開レビュー実態調査'
                : '101,996 Kyoto Guest Reviews Empirical Study'}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-royal-deep tracking-tight leading-[1.12]">
              {headlines[activeHeadlineIndex][currentLang]}
            </h1>

            {/* Headline Switcher Pill Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] font-semibold text-royal-deep/60 mr-1">
                {currentLang === 'ja' ? '視点を切替:' : 'Focus:'}
              </span>
              {headlines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeadlineIndex(idx)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeHeadlineIndex === idx
                      ? 'bg-royal text-white shadow-sm'
                      : 'bg-white text-royal-deep/70 hover:bg-aster-light border border-jodhpur/40'
                  }`}
                >
                  {idx === 0
                    ? currentLang === 'ja'
                      ? '京都の町家を数値化'
                      : 'Measured'
                    : idx === 1
                    ? currentLang === 'ja'
                      ? '10万レビューの証拠'
                      : '101,996 Reviews'
                    : currentLang === 'ja'
                    ? '自ら運営するオーナー発'
                    : 'Owner-Run'}
                </button>
              ))}
            </div>
          </div>

          {/* Lead Subtitle */}
          <p className="text-base md:text-lg text-royal-deep/80 max-w-xl leading-relaxed font-normal">
            {currentLang === 'ja'
              ? 'BFO Consultingは、公開レビューと予約データを日本の小規模宿泊オーナーの実践的な運営判断に変えます。私たち自身も京都で町家を運営しています。'
              : 'BFO Consulting turns public guest and booking data into operating decisions for small accommodation owners in Japan. We run machiya in Kyoto ourselves.'}
          </p>

          <p className="text-xs md:text-sm text-royal-deep/70 max-w-xl leading-relaxed border-l-2 border-aster pl-3">
            {currentLang === 'ja'
              ? '「何が町家の評価を分けるのか」を探したとき、見つかったのは大手ホテルの研究か予約サイトの販促資料だけでした。京都の町家に特化したものは皆無でした。だから私たちは20言語、367軒、101,996件のレビューを精読し、数えました。'
              : 'When we looked for research on what makes guests rate one house above another, we found hotel studies and vendor marketing. Nothing was built on Kyoto machiya. So we read 101,996 public guest reviews across 367 Kyoto properties, in 20 languages, and counted.'}
          </p>

          {/* Dual Pill Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-sm px-7 py-3.5 rounded-pill shadow-glow-habanero transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>{currentLang === 'ja' ? 'OTAチャネル診断を依頼する' : 'Commission Portfolio Audit'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenResearchModal('guest_review_study')}
              className="bg-white hover:bg-luster text-royal font-bold text-sm px-6 py-3.5 rounded-pill border border-aster/50 shadow-soft transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-royal" />
              <span>{currentLang === 'ja' ? '無料サンプル白書を見る' : 'View Study Sample (61p)'}</span>
            </button>
          </div>

          {/* Micro Highlights List */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-semibold text-royal-deep/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-habanero shrink-0" />
              <span>{currentLang === 'ja' ? '完全中立（特定OTA・ベンダーの紐づきなし）' : '100% Independent & Unbiased'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-habanero shrink-0" />
              <span>{currentLang === 'ja' ? '著作権法第30条の4に基づく適法分析' : 'Art. 30-4 Copyright Act Compliant'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-habanero shrink-0" />
              <span>{currentLang === 'ja' ? '180日上限・京都新宿泊税（2026年3月）対応' : '180-Day & Kyoto Tax Tiers Built In'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Ribbon & Proof Metrics Graphic */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[430px] rounded-3xl bg-gradient-to-tr from-aster-light/60 via-white to-white p-6 border border-white shadow-elevated flex items-center justify-center overflow-hidden">
            {/* Ambient radiant blurs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-aster/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-habanero/20 rounded-full blur-3xl pointer-events-none" />

            {/* Minimalist 3D Ribbon Graphic (Pure SVG) */}
            <svg
              className="w-full h-auto drop-shadow-2xl z-10 animate-pulse duration-1000"
              fill="none"
              viewBox="0 0 400 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bfoRibbonGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#223382" />
                  <stop offset="50%" stopColor="#9BACD8" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
                <linearGradient id="bfoInnerLoop" x1="100%" x2="0%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#F98513" />
                  <stop offset="60%" stopColor="#223382" />
                  <stop offset="100%" stopColor="#111144" />
                </linearGradient>
              </defs>
              {/* Back Loop */}
              <path
                d="M70,120 C100,50 180,50 220,120 C260,190 320,180 340,120 C360,60 280,60 230,110 C180,160 110,180 70,120 Z"
                fill="url(#bfoInnerLoop)"
                opacity="0.88"
              />
              {/* Front Reflective Loop */}
              <path
                d="M50,110 C70,30 200,40 250,110 C290,170 340,160 350,110 C360,50 250,60 190,130 C140,190 70,170 50,110 Z"
                fill="url(#bfoRibbonGrad)"
                opacity="0.92"
              />
              {/* Highlight gloss */}
              <path
                d="M60,105 C80,45 190,55 240,115 C280,165 330,155 345,115"
                opacity="0.75"
                stroke="white"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>

            {/* Floating Metric 1 (Top Left): Empirical Pool */}
            <div className="absolute top-5 left-4 z-20 bg-white/95 backdrop-blur-md border border-aster/40 px-3.5 py-2.5 rounded-2xl shadow-soft flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-aster-light text-royal flex items-center justify-center font-black text-sm">
                <TrendingUp className="w-4 h-4 text-royal" />
              </div>
              <div>
                <div className="text-xs font-bold text-royal tabular-nums">101,996 Reviews</div>
                <div className="text-[10px] text-royal-deep/60">367 Kyoto Machiya</div>
              </div>
            </div>

            {/* Floating Metric 2 (Bottom Right): Single Licence Market */}
            <div className="absolute bottom-5 right-4 z-20 bg-white/95 backdrop-blur-md border border-aster/40 px-3.5 py-2.5 rounded-2xl shadow-soft flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-habanero/15 text-habanero flex items-center justify-center font-black text-sm">
                <Building2 className="w-4 h-4 text-habanero" />
              </div>
              <div>
                <div className="text-xs font-bold text-royal-deep tabular-nums">49% Independent</div>
                <div className="text-[10px] text-royal-deep/60">Single-Licence Holders</div>
              </div>
            </div>

            {/* Floating Micro Badge (Center Right) */}
            <div className="absolute top-1/2 -right-2 z-20 -translate-y-1/2 bg-royal text-white px-2.5 py-1 rounded-full shadow text-[10px] font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-habanero" />
              <span>¥47k vs ¥52k Parity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
