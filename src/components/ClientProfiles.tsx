import React, { useState } from 'react';
import { Building, Users, Calendar, Compass, ArrowRight, Check } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface ClientProfilesProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const ClientProfiles: React.FC<ClientProfilesProps> = ({ currentLang, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>('owner_1_3');

  const segments = SITE_CONTENT.clientSegments;
  const currentSegment = segments.find((s) => s.id === activeTab) || segments[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'owner_1_3':
        return <Building className="w-5 h-5 text-royal" />;
      case 'operator_4_12':
        return <Users className="w-5 h-5 text-royal" />;
      case 'minpaku_180':
        return <Calendar className="w-5 h-5 text-royal" />;
      case 'outside_kyoto':
        return <Compass className="w-5 h-5 text-royal" />;
      default:
        return <Building className="w-5 h-5 text-royal" />;
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-jodhpur/30 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full mb-2">
            {currentLang === 'ja' ? '対象クライアント' : 'WHO WE SERVE IN JAPAN'}
          </div>
          <h2 className="text-3xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja'
              ? '日本全国の小規模・個人宿泊オーナーのために'
              : 'Tailored Solutions for Independent Operators'}
          </h2>
          <p className="text-xs md:text-sm text-royal-deep/70 mt-1 max-w-2xl">
            {currentLang === 'ja'
              ? '京都には3,226の簡易宿所許可施設と1,346の届出民泊があります（2026年7月）。単一許可の個人オーナーが全許可の49%を占めており、まさに私たちのコア顧客です。'
              : 'Kyoto has 3,226 licensed simple lodgings and 1,346 registered minpaku homes (July 2026). Single-licence holders comprise 49% of licences—that is our core focus.'}
          </p>
        </div>

        {/* Market Context Badge */}
        <div className="bg-white p-3.5 rounded-2xl border border-jodhpur/40 shadow-soft shrink-0 text-xs">
          <div className="font-mono font-bold text-royal text-sm tabular-nums">4,572 Properties</div>
          <div className="text-royal-deep/60 text-[11px]">3,226 Simple Lodging · 1,346 Minpaku</div>
        </div>
      </div>

      {/* Segment Filter Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {segments.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-royal text-white border-royal shadow-soft'
                  : 'bg-white text-royal-deep/80 border-jodhpur/40 hover:bg-luster'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-white' : 'bg-aster-light text-royal'
                  }`}
                >
                  {getIcon(s.id)}
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider ${
                    isActive ? 'text-aster-light' : 'text-royal-deep/50'
                  }`}
                >
                  {s.scale}
                </span>
              </div>
              <div className="text-xs font-bold leading-snug">
                {currentLang === 'ja' ? s.titleJa : s.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Segment Detail Card */}
      <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-royal bg-aster-light px-3 py-1 rounded-full">
              <span>{currentLang === 'ja' ? '規模区分:' : 'Portfolio Scale:'}</span>
              <span className="font-mono">{currentSegment.scale}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-royal-deep">
              {currentLang === 'ja' ? currentSegment.titleJa : currentSegment.title}
            </h3>

            {/* What they need */}
            <div className="p-4 rounded-xl bg-luster/60 border border-jodhpur/30 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-royal">
                {currentLang === 'ja' ? 'オーナーが直面する課題・ニーズ:' : 'What You Need:'}
              </div>
              <p className="text-xs md:text-sm text-royal-deep/80 leading-relaxed font-medium">
                {currentLang === 'ja' ? currentSegment.needsJa : currentSegment.needs}
              </p>
            </div>

            {/* Recommended workflow */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-royal-deep uppercase tracking-wider">
                {currentLang === 'ja' ? '推奨アプローチ:' : 'Recommended Action Roadmap:'}
              </div>
              <div className="space-y-1.5">
                {currentSegment.recommendedWorkflow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-royal-deep/80">
                    <div className="w-4 h-4 rounded-full bg-aster-light text-royal flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* First Offer Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-royal via-[#1a2d7a] to-royal-deep text-white rounded-2xl p-6 shadow-glow-royal flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-aster mb-2">
                {currentLang === 'ja' ? '最適なファーストステップ' : 'RECOMMENDED FIRST MANDATE'}
              </div>
              <div className="text-xl font-bold leading-snug">
                {currentLang === 'ja' ? currentSegment.firstOfferJa : currentSegment.firstOffer}
              </div>
              <p className="text-xs text-white/70 mt-3 leading-relaxed">
                {currentLang === 'ja'
                  ? '物件の予約エクスポートとOTA掲載設定をもとに、完全リモートで5営業日以内に診断結果を納品します。'
                  : 'Executed 100% remotely using booking exports and listing configurations within 5 business days.'}
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-xs py-3 rounded-pill shadow-glow-habanero transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{currentLang === 'ja' ? 'このオファーで相談する' : 'Request This Mandate'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
