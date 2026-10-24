import React from 'react';
import { Download, BookOpen, CheckSquare, Layers } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface ResearchProductsProps {
  currentLang: Language;
  onOpenSampleModal: (productId: string) => void;
}

export const ResearchProducts: React.FC<ResearchProductsProps> = ({ currentLang, onOpenSampleModal }) => {
  const products = SITE_CONTENT.researchProducts;

  const getProductCover = (id: string) => {
    switch (id) {
      case 'guest_review_study':
        return (
          <div className="relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-royal via-[#1a2d7a] to-royal-deep h-44 flex flex-col justify-between p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="bg-habanero text-white text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">
                Flagship Research
              </span>
              <span className="text-xs font-mono text-white/70">61 Pages</span>
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                <BookOpen className="w-4 h-4 text-aster" />
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aster">
                101,996 REVIEWS · 367 PROPERTIES
              </div>
              <div className="text-sm font-extrabold leading-snug">Kyoto Machiya Study</div>
            </div>
          </div>
        );
      case 'owners_checklist':
        return (
          <div className="relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#1b2b65] via-royal to-royal-deep h-44 flex flex-col justify-between p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="bg-royal-deep text-white text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow border border-white/20">
                Operations Kit
              </span>
              <span className="text-xs font-mono text-white/70">54 Items</span>
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                <CheckSquare className="w-4 h-4 text-habanero" />
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aster">
                CLEANER & HOST CARDS · EN/JA/ZH
              </div>
              <div className="text-sm font-extrabold leading-snug">Machiya Owner's Checklist</div>
            </div>
          </div>
        );
      case 'otas_guide':
        return (
          <div className="relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-royal-deep via-[#111144] to-[#201d4a] h-44 flex flex-col justify-between p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="bg-royal text-white text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">
                Distribution Manual
              </span>
              <span className="text-xs font-mono text-white/70">38 Pages</span>
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                <Layers className="w-4 h-4 text-aster" />
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aster">
                7 PORTALS · NET RATE ON ¥100
              </div>
              <div className="text-sm font-extrabold leading-snug">Operator's Guide to OTAs</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="research-products" className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-jodhpur/30">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-habanero bg-habanero/10 px-3 py-1 rounded-full mb-2">
            {currentLang === 'ja' ? '研究成果・刊行物' : 'RESEARCH PRODUCTS'}
          </div>
          <h2 className="text-3xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja'
              ? '独自の調査出版物（各誌無料サンプル提供中）'
              : 'Independent Kyoto Research Publications'}
          </h2>
        </div>
        <div className="text-xs font-semibold text-royal-deep/65 mt-2 md:mt-0 font-mono">
          {currentLang === 'ja' ? '2026年10月 最新版 // 無料サンプルあり' : 'OCTOBER 2026 EDITIONS · FREE SAMPLES'}
        </div>
      </div>

      {/* 3 Publication Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <article
            key={item.id}
            className="bg-surface-pure rounded-2xl p-5 border border-jodhpur/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              {getProductCover(item.id)}

              <div className="text-xs font-semibold text-aster uppercase tracking-wider mb-1 font-mono">
                {item.edition} · {item.pagesOrItems}
              </div>

              <h3 className="text-base font-bold text-royal-deep leading-snug">
                {currentLang === 'ja' ? item.titleJa : item.title}
              </h3>

              <p className="text-xs text-royal-deep/70 mt-2 leading-relaxed">
                {currentLang === 'ja' ? item.descriptionJa : item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-jodhpur/30 flex items-center justify-between">
              <span className="text-xs font-bold text-royal uppercase tracking-wider">
                {item.coverTag}
              </span>

              <button
                type="button"
                onClick={() => onOpenSampleModal(item.id)}
                className="text-xs font-bold text-habanero hover:text-habanero-hover flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{currentLang === 'ja' ? 'サンプルを見る' : 'Preview Sample'}</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
