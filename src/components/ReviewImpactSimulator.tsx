import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Calculator, Info, ShieldCheck } from 'lucide-react';
import { Language } from '../data/content';
import { COMPLAINT_PENALTIES, calculateFixRoi, adjustScoreForGuestMix } from '../utils/calculator';

interface ReviewImpactSimulatorProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const ReviewImpactSimulator: React.FC<ReviewImpactSimulatorProps> = ({ currentLang }) => {
  const [selectedComplaints, setSelectedComplaints] = useState<string[]>(['cleanliness', 'checkin_confusion']);
  const [propertyAdr, setPropertyAdr] = useState<number>(48000);
  const [japaneseGuestShare, setJapaneseGuestShare] = useState<number>(30);
  const [monthlyNights, setMonthlyNights] = useState<number>(20);

  const toggleComplaint = (id: string) => {
    if (selectedComplaints.includes(id)) {
      setSelectedComplaints(selectedComplaints.filter((item) => item !== id));
    } else {
      setSelectedComplaints([...selectedComplaints, id]);
    }
  };

  // Calculate aggregated penalty
  const activePenalties = COMPLAINT_PENALTIES.filter((p) => selectedComplaints.includes(p.id));
  const totalScorePenalty = activePenalties.reduce((sum, p) => sum + p.scoreCost, 0);
  const totalMonthlyFixCost = activePenalties.reduce((sum, p) => sum + p.monthlyCostToFix, 0);

  // Calculate ROI under 7% assumption per point
  const roi = calculateFixRoi(propertyAdr, totalScorePenalty, totalMonthlyFixCost, monthlyNights, 0.07);

  // Japanese guest score adjustment
  const guestAdjustment = adjustScoreForGuestMix(8.8, japaneseGuestShare);

  return (
    <section id="review-simulator" className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-surface-pure rounded-card p-6 md:p-10 border border-jodhpur/40 shadow-soft">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full mb-2">
            {currentLang === 'ja' ? '減点インパクト & 投資回収計算' : 'COMPLAINT COST ENGINE'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja'
              ? '「形容詞」ではなく「円」で測る修繕の投資対効果'
              : 'Yen, Not Adjectives: Complaint Penalties & Fix ROI'}
          </h2>
          <p className="text-xs md:text-sm text-royal-deep/75 mt-2 leading-relaxed">
            {currentLang === 'ja'
              ? '101,996件のレビュー分析から、各不満要因がレビュースコアから奪う点数を特定しました。7%仮定に基づき、月次の維持費を回収できる損益分岐単価（約¥94,000）を算出し、投資すべきでない修繕も正直にお伝えします。'
              : 'From 101,996 reviews across 367 Kyoto houses, we quantified exact score deductions. Based on an explicit 7% per point assumption, physical basics pay their running costs only from about ¥94,000 a night.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Complaint Selectors */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-royal-deep uppercase tracking-wider mb-2">
              {currentLang === 'ja'
                ? 'チェックするクレーム・改善項目を選択:'
                : 'Select Specific Complaints to Price:'}
            </div>

            <div className="space-y-2.5">
              {COMPLAINT_PENALTIES.map((item) => {
                const isSelected = selectedComplaints.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleComplaint(item.id)}
                    className={`p-3.5 md:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-aster-light/40 border-royal shadow-sm'
                        : 'bg-luster/40 border-jodhpur/40 hover:bg-luster/80'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isSelected ? 'bg-royal border-royal text-white' : 'border-jodhpur bg-white'
                        }`}
                      >
                        {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-bold text-royal-deep">{item.name}</div>
                        <div className="text-[11px] text-royal-deep/60 mt-0.5">{item.description}</div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-red-600 font-mono tabular-nums">
                        -{item.scoreCost.toFixed(2)} pts
                      </div>
                      <div className="text-[10px] text-royal-deep/50 font-mono">
                        ~¥{item.monthlyCostToFix.toLocaleString()}/mo
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Property ADR Controls */}
            <div className="bg-luster/60 p-4 rounded-xl border border-jodhpur/40 space-y-3 mt-4">
              <div className="flex items-center justify-between text-xs font-bold text-royal-deep">
                <span>{currentLang === 'ja' ? '貴館の1泊客室単価 (ADR):' : 'Property Nightly ADR:'}</span>
                <span className="font-mono text-royal font-extrabold text-sm">
                  ¥{propertyAdr.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={150000}
                step={2000}
                value={propertyAdr}
                onChange={(e) => setPropertyAdr(Number(e.target.value))}
                className="w-full h-2 bg-jodhpur/60 rounded-lg appearance-none cursor-pointer accent-royal"
              />
              <div className="flex items-center justify-between text-[11px] text-royal-deep/60">
                <span>
                  {currentLang === 'ja' ? '月間稼働日数:' : 'Operating Nights:'} {monthlyNights} nights/mo
                </span>
                <span className="font-semibold text-royal">
                  {currentLang === 'ja' ? '月間売上目安:' : 'Est. Monthly Gross:'} ¥
                  {(propertyAdr * monthlyNights).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Analysis Card */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-gradient-to-br from-royal via-royal to-royal-deep text-white rounded-2xl p-6 shadow-glow-royal">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-aster">
                  {currentLang === 'ja' ? '試算結果' : 'FINANCIAL ANALYSIS'}
                </span>
                <span className="text-[11px] font-mono text-white/70">7% Per-Point Model</span>
              </div>

              {/* Total Point Drag */}
              <div className="my-4">
                <div className="text-xs text-white/80">
                  {currentLang === 'ja' ? '選択した不満による累積減点:' : 'Total Rating Point Drag:'}
                </div>
                <div className="text-3xl font-extrabold text-habanero font-mono mt-1">
                  -{totalScorePenalty.toFixed(2)} Points
                </div>
              </div>

              {/* Monthly Cost vs Assumed Lift */}
              <div className="space-y-2 py-3 border-y border-white/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/70">
                    {currentLang === 'ja' ? '修繕の月間維持費:' : 'Monthly Cost of Fixes:'}
                  </span>
                  <span className="font-mono font-bold text-white">
                    ¥{totalMonthlyFixCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">
                    {currentLang === 'ja' ? '仮定に基づく月間損失額 (7%):' : 'Assumed Monthly Drag (7%):'}
                  </span>
                  <span className="font-mono font-bold text-white">
                    ¥{roi.assumedMonthlyUplift.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between pt-1 font-semibold">
                  <span className="text-white">
                    {currentLang === 'ja' ? '正味の月間リターン:' : 'Net Monthly Payoff:'}
                  </span>
                  <span
                    className={`font-mono font-extrabold ${
                      roi.isProfitable ? 'text-emerald-300' : 'text-amber-300'
                    }`}
                  >
                    {roi.netMonthlyGain >= 0 ? '+' : ''}¥{roi.netMonthlyGain.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Break-Even Status Box */}
              <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/15 text-xs">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
                  <Calculator className="w-3.5 h-3.5 text-habanero" />
                  <span>
                    {currentLang === 'ja' ? '損益分岐ADR基準:' : 'Break-Even Baseline ADR:'}
                  </span>
                </div>
                <div className="text-white/80 leading-relaxed text-[11px]">
                  {propertyAdr >= 94000 ? (
                    <span className="text-emerald-300 font-semibold">
                      {currentLang === 'ja'
                        ? '貴館の客室単価（¥' +
                          propertyAdr.toLocaleString() +
                          '）は基準値（約¥94,000）を上回っており、基本設備の修繕投資は十分に回収可能です。'
                        : `Your ADR (¥${propertyAdr.toLocaleString()}) exceeds the ¥94,000 threshold. Hardware investment yields a positive return.`}
                    </span>
                  ) : (
                    <span className="text-amber-200">
                      {currentLang === 'ja'
                        ? '客室単価が¥94,000未満の場合、高額な設備修繕は回収に時間がかかります。まずは清掃管理カードと自動案内メッセージ（低コスト）から着手すべきです。'
                        : 'At ADRs below ¥94,000, physical upgrades take longer to pay off. We recommend starting with cleaner scorecards and automated guest messaging first.'}
                    </span>
                  )}
                </div>
              </div>

              {/* Explicit Assumption Disclaimer */}
              <div className="mt-3 text-[10px] text-white/50 leading-tight">
                * {currentLang === 'ja'
                  ? '注意：1点あたり7%は過去データに基づく仮定値であり、売上増加を法的に保証するものではありません。'
                  : 'Note: The 7% per point is an explicit analytical assumption based on historical pacing, not a promised revenue uplift.'}
              </div>
            </div>

            {/* Japanese Guest Score Normalization Widget */}
            <div className="bg-surface-pure rounded-2xl p-5 border border-jodhpur/40 shadow-soft space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-jodhpur/30">
                <span className="text-xs font-bold text-royal flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-royal" />
                  {currentLang === 'ja' ? '日本人ゲスト比率のスコア補正' : 'Japanese Guest Score Normalizer'}
                </span>
                <span className="text-[10px] bg-aster-light text-royal px-2 py-0.5 rounded-full font-bold">
                  -0.53 pt baseline
                </span>
              </div>

              <div className="text-xs text-royal-deep/75 leading-relaxed">
                {currentLang === 'ja'
                  ? '実証データにより、日本人ゲストは同一物件で平均0.53点低く採点し、そのうち49%は理由を空欄で提出することが判明しています。'
                  : 'Empirical data reveals Japanese guests score 0.53 points lower at the same house on average, with 49% of low scores leaving zero written feedback.'}
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-royal-deep">
                  <span>{currentLang === 'ja' ? '日本人ゲストの宿泊比率:' : 'Japanese Guest Share:'}</span>
                  <span className="font-mono font-bold text-royal">{japaneseGuestShare}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={japaneseGuestShare}
                  onChange={(e) => setJapaneseGuestShare(Number(e.target.value))}
                  className="w-full h-1.5 bg-jodhpur/50 rounded appearance-none cursor-pointer accent-royal"
                />
              </div>

              <div className="p-2.5 rounded-lg bg-luster/70 text-[11px] text-royal-deep/80 flex items-center justify-between">
                <span>{currentLang === 'ja' ? '構造的スコア補正幅:' : 'Structural Score Adjustment:'}</span>
                <span className="font-mono font-bold text-royal">
                  +{guestAdjustment.adjustmentDelta} pts (Norm: {guestAdjustment.normalizedScore})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
