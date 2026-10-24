import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckSquare, Layers, Download, ShoppingCart, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { Language, SITE_CONTENT, ResearchProduct } from '../data/content';
import { PageTab } from '../components/Header';
import { OTA_CHANNELS, calculateOtaNetYield } from '../utils/calculator';
import { SamplePreviewModal } from '../components/SamplePreviewModal';
import { PurchaseModal } from '../components/PurchaseModal';

interface PortfolioPageProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ currentLang, onNavigate }) => {
  const [activeSampleModal, setActiveSampleModal] = useState<string | null>(null);
  const [activePurchaseModal, setActivePurchaseModal] = useState<string | null>(null);
  const [testAdr, setTestAdr] = useState<number>(48000);
  const [includeStackedPromotions, setIncludeStackedPromotions] = useState<boolean>(true);

  const products = SITE_CONTENT.researchProducts;
  const wards = SITE_CONTENT.wardData;
  const channelsList = Object.values(OTA_CHANNELS);

  const getProductCover = (id: string) => {
    switch (id) {
      case 'guest_review_study':
        return (
          <div className="relative rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-royal via-[#1a2d7a] to-royal-deep h-48 flex flex-col justify-between p-5 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <span className="bg-habanero text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wide">
                Flagship Research
              </span>
              <span className="text-xs font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded-md">61 Pages</span>
            </div>
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5 text-aster" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-aster mb-0.5">
                KYOTO GUEST BENCHMARKS
              </div>
              <div className="text-lg font-extrabold leading-snug">Kyoto Machiya Study</div>
            </div>
          </div>
        );
      case 'owners_checklist':
        return (
          <div className="relative rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-[#1b2b65] via-royal to-royal-deep h-48 flex flex-col justify-between p-5 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <span className="bg-royal-deep text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm border border-white/20 tracking-wide">
                Operations Kit
              </span>
              <span className="text-xs font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded-md">54 Items</span>
            </div>
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                <CheckSquare className="w-5 h-5 text-habanero" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-aster mb-0.5">
                CLEANER & HOST CARDS · EN/JA/TC
              </div>
              <div className="text-lg font-extrabold leading-snug">Machiya Owner's Checklist</div>
            </div>
          </div>
        );
      case 'otas_guide':
        return (
          <div className="relative rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-royal-deep via-[#111144] to-[#201d4a] h-48 flex flex-col justify-between p-5 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <span className="bg-royal text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wide">
                Distribution Manual
              </span>
              <span className="text-xs font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded-md">38 Pages</span>
            </div>
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                <Layers className="w-5 h-5 text-aster" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-aster mb-0.5">
                7 PORTALS · NET ON ¥100 MATRIX
              </div>
              <div className="text-lg font-extrabold leading-snug">Operator's Guide to OTAs</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const calculations = channelsList.map((channel) => {
    return {
      channel,
      ...calculateOtaNetYield(testAdr, channel.id, {
        includeStackedDiscounts: includeStackedPromotions,
      }),
    };
  });

  return (
    <div className="w-full pt-28 pb-16">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-habanero/10 border border-habanero/30 text-habanero text-xs font-bold uppercase tracking-wider">
            {currentLang === 'ja' ? '主力リサーチ製品' : 'CORE RESEARCH PRODUCTS'}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja'
              ? '独立研究刊行物 & OTA手取りマトリクス'
              : 'Independent Kyoto Research & Distribution Matrix'}
          </h1>
          <p className="text-xs md:text-sm text-royal-deep/75 leading-relaxed">
            {currentLang === 'ja'
              ? '京都町家を自ら運営する私たちが蓄積した実証刊行物ラインナップ。今すぐ現場で使える実践資料をご購入いただけます。'
              : 'Our core publications turn operational evidence into checklists, rate matrices, and operating rules you can act on this week.'}
          </p>
        </div>
      </section>

      {/* Part 1: Dominant Research Publications (Main Product - Placed on Top) */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-jodhpur/40 gap-3">
          <div>
            <span className="text-xs font-bold uppercase text-habanero tracking-widest font-mono">
              FLAGSHIP EDITIONS · MAIN PRODUCT
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep mt-1">
              {currentLang === 'ja'
                ? '独立研究刊行物（エディション購入）'
                : 'Independent Kyoto Research Publications'}
            </h2>
          </div>
          <div className="text-xs font-mono text-royal-deep/60 bg-luster px-3 py-1 rounded-full border border-jodhpur/30">
            {currentLang === 'ja' ? '2026年10月改訂版 · 適格請求書対応' : 'October 2026 Editions · Instant Delivery'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <article
              key={item.id}
              className="bg-surface-pure rounded-3xl p-6 border-2 border-jodhpur/50 shadow-soft hover:shadow-elevated hover:border-royal/40 transition-all flex flex-col justify-between"
            >
              <div>
                {getProductCover(item.id)}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono text-aster uppercase tracking-wider font-bold">
                    {item.edition}
                  </span>
                  <span className="text-[11px] font-bold text-royal bg-aster-light px-2.5 py-0.5 rounded-full">
                    {item.pagesOrItems}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-royal-deep leading-snug">
                  {currentLang === 'ja' ? item.titleJa : item.title}
                </h3>

                <p className="text-xs text-royal-deep/75 mt-2.5 leading-relaxed">
                  {currentLang === 'ja' ? item.descriptionJa : item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-3 border-t border-jodhpur/30 space-y-1.5">
                  {(currentLang === 'ja' ? item.sampleHighlightsJa : item.sampleHighlights).map((hl, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-royal-deep/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-habanero shrink-0 mt-0.5" />
                      <span className="leading-tight">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pricing & Action Section */}
              <div className="pt-5 mt-5 border-t border-jodhpur/40 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-royal-deep/60 font-medium">
                    {currentLang === 'ja' ? item.deliveryFormatJa : item.deliveryFormat}
                  </span>
                  <div className="text-2xl font-extrabold font-mono text-royal-deep tabular-nums">
                    {currentLang === 'ja' ? item.priceJa : item.price}
                  </div>
                </div>

                {/* Purchase Button (Primary) */}
                <button
                  type="button"
                  onClick={() => setActivePurchaseModal(item.id)}
                  className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-pill shadow-glow-habanero transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 text-white" />
                  <span>
                    {currentLang === 'ja'
                      ? `購入する (${item.priceJa})`
                      : `Purchase Edition (${item.price})`}
                  </span>
                </button>

                {/* Free Sample Button (Secondary) */}
                <button
                  type="button"
                  onClick={() => setActiveSampleModal(item.id)}
                  className="w-full bg-luster hover:bg-white text-royal-deep hover:text-royal border border-jodhpur/50 font-bold text-xs py-2 px-3 rounded-pill transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-royal" />
                  <span>{currentLang === 'ja' ? '無料サンプルを閲覧' : 'View Free Sample'}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Part 2: OTA Channel Economics & Net RevPAR Matrix */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-jodhpur/30 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
                EMPIRICAL MATRIX
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-royal-deep">
                {currentLang === 'ja'
                  ? 'OTAチャネル別 手取り & コミッション比較'
                  : 'OTA Channel Economics & Net RevPAR Matrix'}
              </h2>
              <p className="text-xs text-royal-deep/70 mt-1">
                {currentLang === 'ja'
                  ? '100円の予約あたりの実効手取りとキャンセル傾向（N=367軒）'
                  : 'Net rate kept per ¥100 booking after commission and stacked promotions'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-royal hover:bg-royal-deep text-white text-xs font-bold px-4 py-2 rounded-pill flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>{currentLang === 'ja' ? '自館の診断を依頼' : 'Audit Your House'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Controls Bar */}
          <div className="bg-luster/60 p-4 rounded-xl border border-jodhpur/30 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-royal-deep">
                  {currentLang === 'ja' ? 'シミュレーション客室単価 (ADR):' : 'Simulate ADR:'}
                </span>
                <span className="font-mono font-extrabold text-royal text-sm tabular-nums">
                  ¥{testAdr.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={25000}
                max={150000}
                step={1000}
                value={testAdr}
                onChange={(e) => setTestAdr(Number(e.target.value))}
                className="w-full accent-royal cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-royal-deep/50 font-mono">
                <span>¥25k</span>
                <span>¥47k (Kyoto Avg)</span>
                <span>¥94k (Break-even)</span>
                <span>¥150k</span>
              </div>
            </div>

            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-jodhpur/40 md:pl-4">
              <span className="text-xs font-bold text-royal-deep">
                {currentLang === 'ja' ? '二重割引適用:' : 'Stacked Discounts:'}
              </span>
              <button
                type="button"
                onClick={() => setIncludeStackedPromotions(!includeStackedPromotions)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  includeStackedPromotions
                    ? 'bg-habanero text-white shadow-soft'
                    : 'bg-jodhpur/50 text-royal-deep/70'
                }`}
              >
                {includeStackedPromotions ? 'Active (ON)' : 'Disabled (OFF)'}
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-jodhpur/50 text-[11px] font-bold text-royal-deep/70 uppercase tracking-wider">
                  <th className="py-3 px-3">Distribution Channel</th>
                  <th className="py-3 px-3">Commission + Fees</th>
                  <th className="py-3 px-3">Net on ¥100</th>
                  <th className="py-3 px-3">Cancellation</th>
                  <th className="py-3 px-3 text-right">Net Payout (Per Night)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jodhpur/30">
                {calculations.map((res) => {
                  const channel = res.channel;
                  const isDirect = channel.id === 'direct';
                  return (
                    <tr
                      key={channel.id}
                      className={`hover:bg-luster/40 transition-colors ${
                        isDirect ? 'bg-aster-light/30 font-semibold' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isDirect ? 'bg-emerald-500' : 'bg-royal'
                            }`}
                          />
                          <span className="font-bold text-royal-deep">{channel.name}</span>
                        </div>
                        <div className="text-[10px] text-royal-deep/60 mt-0.5 ml-4">
                          {channel.japanLicenceRequirement}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-mono text-royal-deep/80">
                        {channel.baseCommissionPct}%{channel.paymentFeePct > 0 ? ` + ${channel.paymentFeePct}%` : ''}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-royal tabular-nums text-sm">
                        ¥{res.netRatePer100Yen.toFixed(1)}
                      </td>
                      <td className="py-3.5 px-3 text-royal-deep/70">
                        <span className="font-medium">{channel.cancellationVolatility}</span>
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono font-extrabold text-royal-deep">
                        ¥{res.netPayout.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-aster-light/40 border border-aster/30 text-xs text-royal flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>{currentLang === 'ja' ? '分析メモ:' : 'Key Observation:'}</strong>{' '}
              {currentLang === 'ja'
                ? '同じ宿泊客でも、予約経路と意図せぬ割引設定によって手取り額が1泊あたり最大¥12,000以上乖離します。'
                : 'Depending on channel take-rates and promotional stacking, net revenue can diverge by over ¥12,000 per room night.'}
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Kyoto Cultural Yield Curve & Ward Matrix */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-jodhpur/30">
            <div>
              <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
                KYOTO CULTURAL CALENDAR
              </span>
              <h3 className="text-lg font-bold text-royal-deep">
                {currentLang === 'ja' ? '12ヶ月の季節需要と区別単価' : 'Kyoto Seasonal Pacing & Ward Index'}
              </h3>
            </div>
            <span className="text-xs font-bold text-habanero font-mono">5-Ward Index</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {wards.map((w, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-luster/60 border border-jodhpur/30 space-y-1">
                <div className="text-xs font-bold text-royal">
                  {currentLang === 'ja' ? w.wardJa : w.wardEn}
                </div>
                <div className="text-base font-extrabold font-mono text-royal-deep tabular-nums">
                  ¥{w.adr.toLocaleString()}
                </div>
                <div className="text-[10px] text-royal-deep/60">
                  {w.occupancyPct}% Occ · {w.simpleLodgingCount} 宿所
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Bottom Contact Bar */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-gradient-to-r from-royal via-royal to-royal-deep text-white rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glow-royal">
          <div>
            <h3 className="text-lg font-bold">
              {currentLang === 'ja'
                ? 'リサーチ刊行物やOTA診断について直接問い合わせる'
                : 'Inquire About Research Editions or OTA Audits'}
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              {currentLang === 'ja'
                ? '秘密保持契約（NDA）のもと、ご相談や診断依頼を承っております。'
                : 'Direct consultation and diagnostic inquiries under bilateral NDA.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:hello@bfoconsult.ing"
              className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-4 py-2.5 rounded-pill border border-white/20 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>hello@bfoconsult.ing</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-xs px-5 py-2.5 rounded-pill shadow-soft transition cursor-pointer flex items-center gap-1.5"
            >
              <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Free Sample Preview Modal */}
      <SamplePreviewModal
        productId={activeSampleModal}
        currentLang={currentLang}
        onClose={() => setActiveSampleModal(null)}
      />

      {/* Purchase Modal */}
      <PurchaseModal
        productId={activePurchaseModal}
        currentLang={currentLang}
        onClose={() => setActivePurchaseModal(null)}
      />
    </div>
  );
};
