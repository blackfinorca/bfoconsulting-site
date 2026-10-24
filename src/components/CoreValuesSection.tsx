import React from 'react';
import { Layers, DollarSign, Calculator, ShieldCheck, CheckSquare, ArrowRight } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface CoreValuesSectionProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ currentLang, onOpenConsultation }) => {
  const getIcon = (key: string) => {
    switch (key) {
      case 'scale':
        return <Layers className="w-5 h-5 text-royal" />;
      case 'cost_on_problem':
        return <DollarSign className="w-5 h-5 text-royal" />;
      case 'yen_not_adjectives':
        return <Calculator className="w-5 h-5 text-royal" />;
      case 'japan_rules':
        return <ShieldCheck className="w-5 h-5 text-royal" />;
      case 'ready_to_use':
        return <CheckSquare className="w-5 h-5 text-royal" />;
      default:
        return <Layers className="w-5 h-5 text-royal" />;
    }
  };

  return (
    <section id="evidence" className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Section Header & Philosophy */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aster-light text-royal text-xs font-bold uppercase tracking-wider mb-3">
            {currentLang === 'ja' ? '5つの提供価値' : 'VALUE TO OWNERS'}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-royal-deep tracking-tight leading-tight">
            {currentLang === 'ja'
              ? '自館のレビューだけでは見えない、5つの決定的な証拠。'
              : 'Five things owners get from us that they cannot get by reading their own reviews.'}
          </h2>
          <p className="text-sm md:text-base text-royal-deep/75 mt-4 leading-relaxed">
            {currentLang === 'ja'
              ? '一軒の町家が集めるレビューは年間わずか13件程度。見られるのは自分のカレンダーだけです。私たちは数千人の宿泊客が書いた内容と市場の料金を統合し、今週すぐ実行できるチェックリスト、適正単価、OTA設定に落とし込みます。'
              : "A single house collects about 13 reviews a year and sees only its own calendar. We pool what thousands of guests have written and what the market charges, then turn it into a checklist, a rate, and a channel setting an owner can act on this week."}
          </p>

          <div className="mt-6 p-4 rounded-2xl bg-white border border-jodhpur/50 shadow-soft">
            <div className="text-xs font-bold text-royal uppercase tracking-wider mb-1">
              {currentLang === 'ja' ? '独立した第三者の立場' : 'Independent Research Standard'}
            </div>
            <p className="text-xs text-royal-deep/70 leading-relaxed">
              {currentLang === 'ja'
                ? '予約サイト、サイトコントローラー、備品ベンダーからの金銭受領や事前審査は一切ありません。'
                : 'No booking platform, channel manager, or supplier pays us or has reviewed our work.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-royal font-bold text-sm mt-6 hover:text-habanero transition-colors cursor-pointer"
          >
            <span>{currentLang === 'ja' ? '自館のデータ診断について相談する' : 'Discuss a diagnostic for your house'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: The 5 Values Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {SITE_CONTENT.coreValues.map((val, idx) => (
            <div
              key={val.key}
              className="bg-surface-pure rounded-2xl p-5 md:p-6 border border-jodhpur/40 shadow-soft hover:shadow-elevated transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                  {getIcon(val.key)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-bold text-royal-deep">
                      {currentLang === 'ja' ? val.titleJa : val.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-royal-deep/70 mt-1.5 leading-relaxed">
                    {currentLang === 'ja' ? val.meaningJa : val.meaning}
                  </p>
                  <div className="mt-3 pt-3 border-t border-jodhpur/30 flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-semibold text-royal">
                      <span className="text-royal-deep/60 mr-1.5">
                        {currentLang === 'ja' ? '実証根拠:' : 'Evidence:'}
                      </span>
                      <span>{currentLang === 'ja' ? val.evidenceJa : val.evidence}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
