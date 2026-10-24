import React, { useState } from 'react';
import { Sliders, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Language } from '../data/content';
import { OTA_CHANNELS, calculateOtaNetYield } from '../utils/calculator';

interface OtaYieldMatrixProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const OtaYieldMatrix: React.FC<OtaYieldMatrixProps> = ({ currentLang, onOpenConsultation }) => {
  const [simulationMode, setSimulationMode] = useState<'sample' | 'calculator'>('calculator');
  const [testAdr, setTestAdr] = useState<number>(48000);
  const [includeStackedPromotions, setIncludeStackedPromotions] = useState<boolean>(true);

  // Benchmarked sample rows from the brief & study
  const sampleBenchmarkRows = [
    {
      channel: 'Booking.com (Genius Tier 3)',
      category: 'global',
      adr: 114200,
      takeRate: '15.0% - 18.0%',
      cancellation: 'High (28.4%)',
      leadTime: '68 Days',
      netRevPAR: 93644,
      badge: '+24% optimized',
      badgeColor: 'bg-royal text-white',
    },
    {
      channel: 'Airbnb (Superhost / Host-Only)',
      category: 'global',
      adr: 88500,
      takeRate: '3.0% (Host-only)',
      cancellation: 'Low (11.2%)',
      leadTime: '92 Days',
      netRevPAR: 85845,
      badge: 'baseline',
      badgeColor: 'bg-jodhpur/50 text-royal-deep',
    },
    {
      channel: 'Ikyu.com (一休.com Luxury)',
      category: 'domestic',
      adr: 142000,
      takeRate: '10.0%',
      cancellation: 'Very Low (4.1%)',
      leadTime: '42 Days',
      netRevPAR: 127800,
      badge: 'Highest Quality',
      badgeColor: 'bg-aster-light text-royal font-bold',
    },
    {
      channel: 'Rakuten Travel (楽天トラベル)',
      category: 'domestic',
      adr: 76400,
      takeRate: '8.0% - 10.0%',
      cancellation: 'Moderate (16.8%)',
      leadTime: '28 Days',
      netRevPAR: 69524,
      badge: 'gap-filler',
      badgeColor: 'bg-luster text-royal-deep/70',
    },
    {
      channel: 'Kyoto Machiya Blended Architecture',
      category: 'blended',
      adr: 126800,
      takeRate: '9.4% (blended)',
      cancellation: 'Controlled (6.8%)',
      leadTime: '74 Days',
      netRevPAR: 114880,
      badge: '+31.2% Net RevPAR',
      badgeColor: 'bg-habanero text-white font-extrabold',
      isHighlight: true,
    },
  ];

  // Dynamic calculated channels
  const channelsList = Object.values(OTA_CHANNELS);

  return (
    <section id="ota-calculator" className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-surface-pure rounded-card p-6 md:p-10 border border-jodhpur/40 shadow-soft">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-jodhpur/30 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full mb-2">
              {currentLang === 'ja' ? '客観的市場基準' : 'EMPIRICAL BENCHMARKS'}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
              {currentLang === 'ja'
                ? 'OTA手数料と「100円の予約あたりの手取り」比較'
                : 'OTA Channel Economics & Net RevPAR Matrix'}
            </h2>
            <p className="text-xs md:text-sm text-royal-deep/70 mt-1">
              {currentLang === 'ja'
                ? '京都の一棟貸し町家サンプル調査（367物件、20言語レビュー分析より算出）'
                : 'Kyoto Machiya Sample Benchmark & Net Payout Engine (N=367 properties, Oct 2026)'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 p-1 bg-luster rounded-xl border border-jodhpur/40">
            <button
              onClick={() => setSimulationMode('calculator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                simulationMode === 'calculator'
                  ? 'bg-royal text-white shadow-sm'
                  : 'text-royal-deep/70 hover:text-royal'
              }`}
            >
              {currentLang === 'ja' ? '手取りシミュレーター' : 'Interactive Yield Calc'}
            </button>
            <button
              onClick={() => setSimulationMode('sample')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                simulationMode === 'sample'
                  ? 'bg-royal text-white shadow-sm'
                  : 'text-royal-deep/70 hover:text-royal'
              }`}
            >
              {currentLang === 'ja' ? '実測ベンチマーク表' : 'Historical Benchmark'}
            </button>
          </div>
        </div>

        {/* View 1: Interactive Yield & ¥100 Net Payout Simulator */}
        {simulationMode === 'calculator' && (
          <div className="mt-6 space-y-6">
            {/* Interactive Control Toolbar */}
            <div className="bg-luster/60 p-4 md:p-5 rounded-2xl border border-jodhpur/40 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-6 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-royal-deep">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-royal" />
                    <span>{currentLang === 'ja' ? '貴館の想定ADR (1泊客室単価):' : 'Your Property Nightly ADR:'}</span>
                  </span>
                  <span className="text-sm font-extrabold text-royal font-mono tabular-nums">
                    ¥{testAdr.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={160000}
                  step={2000}
                  value={testAdr}
                  onChange={(e) => setTestAdr(Number(e.target.value))}
                  className="w-full h-2 bg-jodhpur/60 rounded-lg appearance-none cursor-pointer accent-royal"
                />
                <div className="flex justify-between text-[10px] text-royal-deep/50 font-mono">
                  <span>¥25,000 (Entry)</span>
                  <span>¥47k–¥52k (Kyoto Avg)</span>
                  <span>¥94,000 (Break-even)</span>
                  <span>¥160,000+ (Luxury)</span>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-jodhpur/30">
                <div>
                  <div className="text-xs font-bold text-royal-deep">
                    {currentLang === 'ja' ? '多重割引（Genius/モバイル）の重複' : 'Stacked Discounts Simulated'}
                  </div>
                  <div className="text-[11px] text-royal-deep/60">
                    {includeStackedPromotions
                      ? currentLang === 'ja'
                        ? 'OTAデフォルトの自動割引重複を適用中'
                        : 'Simulating default OTA promotional discount overlap'
                      : currentLang === 'ja'
                      ? '基本手数料のみ（割引なし）'
                      : 'Base commission only (no promotional stack)'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeStackedPromotions(!includeStackedPromotions)}
                  className={`px-3 py-1.5 rounded-pill text-xs font-bold transition-all cursor-pointer ${
                    includeStackedPromotions
                      ? 'bg-habanero text-white shadow-sm'
                      : 'bg-luster text-royal-deep/70 border border-jodhpur/40'
                  }`}
                >
                  {includeStackedPromotions ? 'Active (ON)' : 'Disabled (OFF)'}
                </button>
              </div>
            </div>

            {/* Calculated Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-luster/60 text-royal font-bold text-[11px] uppercase tracking-wider rounded-xl">
                    <th className="py-3 px-4 rounded-l-xl">
                      {currentLang === 'ja' ? '販売チャネル' : 'Distribution Channel'}
                    </th>
                    <th className="py-3 px-4">{currentLang === 'ja' ? '公称手数料 + 決済' : 'Stated Take-Rate'}</th>
                    <th className="py-3 px-4">
                      {currentLang === 'ja' ? '実質手取り（¥100予約あたり）' : 'Net Rate on ¥100'}
                    </th>
                    <th className="py-3 px-4">{currentLang === 'ja' ? 'キャンセル率' : 'Cancellation Risk'}</th>
                    <th className="py-3 px-4 text-right rounded-r-xl">
                      {currentLang === 'ja' ? `実質手取り額 (ADR ¥${testAdr.toLocaleString()})` : `Net Payout per Night`}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-jodhpur/20 text-royal-deep">
                  {channelsList.map((ch) => {
                    const res = calculateOtaNetYield(testAdr, ch.id, {
                      includeStackedDiscounts: includeStackedPromotions,
                    });
                    const isDirect = ch.id === 'direct';
                    const isIkyu = ch.id === 'ikyu';

                    return (
                      <tr
                        key={ch.id}
                        className={`hover:bg-luster/40 transition-colors ${
                          isDirect ? 'bg-aster-light/40 font-semibold' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              ch.category === 'global'
                                ? 'bg-royal'
                                : ch.category === 'domestic'
                                ? 'bg-aster'
                                : 'bg-habanero'
                            }`}
                          />
                          <span>{ch.name}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono">
                          {ch.baseCommissionPct}%
                          {ch.paymentFeePct > 0 ? ` + ${ch.paymentFeePct}% fee` : ''}
                          {includeStackedPromotions && ch.typicalStackedDiscountsPct > 0 ? (
                            <span className="text-[10px] text-habanero ml-1 font-semibold">
                              (+{ch.typicalStackedDiscountsPct}% stack)
                            </span>
                          ) : null}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-royal">
                          ¥{res.netRatePer100Yen.toFixed(1)}{' '}
                          <span className="text-[10px] text-royal-deep/50 font-normal">
                            (-{res.effectiveTakeRatePct.toFixed(1)}%)
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-royal-deep/70">{ch.cancellationVolatility}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold">
                          <span
                            className={`text-sm ${
                              isDirect
                                ? 'text-habanero'
                                : isIkyu
                                ? 'text-royal'
                                : res.effectiveTakeRatePct > 20
                                ? 'text-red-700'
                                : 'text-royal-deep'
                            }`}
                          >
                            ¥{res.netPayout.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Insight Callout */}
            <div className="p-4 rounded-xl bg-aster-light/50 border border-aster/40 flex items-start gap-3 text-xs text-royal-deep/80 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-royal shrink-0 mt-0.5" />
              <div>
                <strong className="text-royal">
                  {currentLang === 'ja' ? 'BFO実態調査の知見:' : 'Empirical Take-Rate Insight:'}
                </strong>{' '}
                {currentLang === 'ja'
                  ? '多くの町家オーナーはBooking.comを15%手数料と認識していますが、Genius Tier 3、モバイル割、早期予約割が重なると実質手取りは¥100あたり¥78〜¥82まで落ち込みます。BFOのOTA監査では、意図せぬ二重割引を停止し、直接手取りを最大化する設定を納品します。'
                  : 'Many owners assume global OTAs cost only 15%, but stacked Genius Tier 3, mobile rates, and automatic campaign opt-ins drag net payouts down to ¥78–¥82 per ¥100. Our OTA Channel Performance Audit identifies and disables unintentional overlapping promotions.'}
              </div>
            </div>
          </div>
        )}

        {/* View 2: Benchmark Sample Table from Study */}
        {simulationMode === 'sample' && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-luster/60 text-royal font-bold text-[11px] uppercase tracking-wider rounded-xl">
                  <th className="py-3 px-4 rounded-l-xl">Distribution Portal</th>
                  <th className="py-3 px-4">Average Gross ADR</th>
                  <th className="py-3 px-4">Take-Rate Commission</th>
                  <th className="py-3 px-4">Cancellation Volatility</th>
                  <th className="py-3 px-4">Median Lead Time</th>
                  <th className="py-3 px-4 text-right rounded-r-xl">Net RevPAR Yield</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jodhpur/20 text-royal-deep">
                {sampleBenchmarkRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-luster/40 transition-colors ${
                      row.isHighlight ? 'bg-aster-light/60 font-bold text-royal' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          row.category === 'global'
                            ? 'bg-royal'
                            : row.category === 'domestic'
                            ? 'bg-aster'
                            : 'bg-habanero'
                        }`}
                      />
                      <span>{row.channel}</span>
                    </td>
                    <td className="py-4 px-4 font-mono font-medium">¥{row.adr.toLocaleString()}</td>
                    <td
                      className={`py-4 px-4 font-medium ${
                        row.isHighlight ? 'text-royal' : 'text-royal-deep/80'
                      }`}
                    >
                      {row.takeRate}
                    </td>
                    <td className="py-4 px-4 text-royal-deep/70">{row.cancellation}</td>
                    <td className="py-4 px-4 font-mono">{row.leadTime}</td>
                    <td
                      className={`py-4 px-4 text-right font-mono font-bold ${
                        row.isHighlight ? 'text-base text-habanero' : 'text-royal-deep'
                      }`}
                    >
                      ¥{row.netRevPAR.toLocaleString()}{' '}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ml-1 ${row.badgeColor}`}>
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer CTA inside Card */}
        <div className="mt-6 pt-4 border-t border-jodhpur/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-royal-deep/70">
            {currentLang === 'ja'
              ? '「OTAチャネル パフォーマンス診断」では、貴館の全サイトコントローラー設定と手取り額を査定します。'
              : 'Our OTA Channel Performance Audit calculates exact net revenue per channel from your actual booking export.'}
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-royal hover:bg-royal-deep text-white font-bold px-4 py-2 rounded-pill flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <span>{currentLang === 'ja' ? '診断を申し込む' : 'Request OTA Audit'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
