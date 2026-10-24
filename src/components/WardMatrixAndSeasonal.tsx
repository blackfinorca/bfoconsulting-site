import React, { useState } from 'react';
import { TrendingUp, MapPin } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface WardMatrixAndSeasonalProps {
  currentLang: Language;
}

export const WardMatrixAndSeasonal: React.FC<WardMatrixAndSeasonalProps> = ({ currentLang }) => {
  const [selectedWard, setSelectedWard] = useState<number>(0);
  const wards = SITE_CONTENT.wardData;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Col 1: Dynamic Yield Curve Chart */}
        <div className="lg:col-span-7 bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-jodhpur/30 mb-4">
              <span className="text-xs font-bold uppercase text-royal bg-aster-light px-3 py-1 rounded-full">
                {currentLang === 'ja' ? '価格弾力性モデル' : 'Dynamic Yield Theory'}
              </span>
              <span className="text-xs font-semibold text-royal-deep/65">
                {currentLang === 'ja' ? '京都文化カレンダー12ヶ月' : 'Kyoto Cultural Calendar'}
              </span>
            </div>

            <h3 className="text-xl font-bold text-royal-deep mb-1">
              {currentLang === 'ja'
                ? '京都町家のダイナミック・イールド曲線'
                : 'The Kyoto Machiya Dynamic Yield Curve'}
            </h3>
            <p className="text-xs text-royal-deep/70 mb-5 leading-relaxed">
              {currentLang === 'ja'
                ? '旧来の固定料金設定と、BFOアルゴリズムによる12ヶ月の需要ペーシングの対比。桜・祇園祭・紅葉の需要を逃しません。'
                : 'Contrasting standard static legacy pricing against our empirical pacing curve across the 12-month Kyoto seasonal cycle.'}
            </p>

            {/* High-Precision SVG Chart */}
            <div className="w-full bg-luster/50 p-4 rounded-2xl border border-jodhpur/30">
              <svg className="w-full h-auto" fill="none" viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg">
                {/* Hairline Grid */}
                <line stroke="#DAD1C8" strokeDasharray="2 2" strokeWidth="1" x1="40" x2="570" y1="30" y2="30" />
                <line stroke="#DAD1C8" strokeDasharray="2 2" strokeWidth="1" x1="40" x2="570" y1="80" y2="80" />
                <line stroke="#DAD1C8" strokeDasharray="2 2" strokeWidth="1" x1="40" x2="570" y1="130" y2="130" />
                <line stroke="#DAD1C8" strokeDasharray="2 2" strokeWidth="1" x1="40" x2="570" y1="180" y2="180" />

                {/* Y-Labels */}
                <text fill="#223382" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="600" textAnchor="end" x="32" y="34">
                  ¥180k
                </text>
                <text fill="#223382" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="600" textAnchor="end" x="32" y="84">
                  ¥130k
                </text>
                <text fill="#223382" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="600" textAnchor="end" x="32" y="134">
                  ¥80k
                </text>
                <text fill="#223382" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="600" textAnchor="end" x="32" y="184">
                  ¥40k
                </text>

                {/* X-Labels */}
                <text fill="#111144" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="600" x="50" y="206">
                  JAN (Oshogatsu)
                </text>
                <text fill="#111144" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="600" x="180" y="206">
                  APR (Sakura)
                </text>
                <text fill="#111144" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="600" x="320" y="206">
                  JUL (Gion Matsuri)
                </text>
                <text fill="#111144" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="600" x="450" y="206">
                  NOV (Koyo Foliage)
                </text>

                {/* Static Legacy Rate Curve */}
                <path
                  d="M 50 150 L 140 150 L 180 90 L 220 150 L 300 150 L 330 110 L 360 150 L 440 150 L 480 85 L 520 150 L 560 120"
                  fill="none"
                  stroke="#9BACD8"
                  strokeDasharray="4 4"
                  strokeWidth="2"
                />

                {/* Dynamic Algorithmic Curve */}
                <path
                  d="M 50 130 C 90 125, 130 115, 170 50 C 190 20, 210 25, 230 100 C 260 115, 290 100, 320 60 C 340 70, 360 110, 400 110 C 430 105, 450 30, 480 20 C 510 25, 530 95, 560 60"
                  fill="none"
                  stroke="#223382"
                  strokeWidth="3.5"
                />

                {/* Highlight Point: Sakura */}
                <circle cx="185" cy="24" fill="#F98513" r="5" />
                <text fill="#F98513" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="800" x="195" y="22">
                  Sakura Peak (+48%)
                </text>

                {/* Highlight Point: Koyo */}
                <circle cx="475" cy="22" fill="#F98513" r="5" />
                <text fill="#F98513" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="800" x="420" y="14">
                  November Foliage Surge
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-royal-deep/70">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-royal rounded-full" />
                <span>{currentLang === 'ja' ? 'BFO 実績ペーシング曲線' : 'BFO Empirical Dynamic Yield'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-aster rounded-full" />
                <span>{currentLang === 'ja' ? '従来型の固定・横並び価格' : 'Legacy Static Flat Pricing'}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-jodhpur/30 text-xs text-royal-deep/80 leading-relaxed">
            <span className="font-bold text-royal">
              {currentLang === 'ja' ? '価格設定の損失実態:' : 'Revenue Opportunity:'}
            </span>{' '}
            {currentLang === 'ja'
              ? '固定料金の町家は、年22日の主要フェスティバル・紅葉ピーク期に1泊あたり最大¥64,000の為替・インバウンド需要弾力性を取りこぼしています。'
              : 'Houses on static rates fail to harvest up to ¥64,000 per night in high-season foreign currency elasticity during 22 key festival days.'}
          </div>
        </div>

        {/* Col 2: Kyoto Ward Performance Matrix */}
        <div className="lg:col-span-5 bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-jodhpur/30 mb-4">
              <span className="text-xs font-bold uppercase text-royal bg-aster-light px-3 py-1 rounded-full">
                {currentLang === 'ja' ? '地域別ベンチマーク' : 'Territory Index'}
              </span>
              <span className="text-xs font-bold text-habanero">Kyoto 5-Ward Sample</span>
            </div>

            <h3 className="text-xl font-bold text-royal-deep mb-1">
              {currentLang === 'ja' ? '京都主要区の宿泊単価・稼働率' : 'Kyoto Prime Hospitality Wards'}
            </h3>
            <p className="text-xs text-royal-deep/70 mb-4">
              {currentLang === 'ja'
                ? '区ごとの客室平均単価、稼働率、許可施設数（簡易宿所 vs 民泊新法）'
                : 'ADR, occupancy saturation, and licensing breakdown by municipal district.'}
            </p>

            <div className="space-y-2.5">
              {wards.map((w, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedWard(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedWard === idx
                      ? 'bg-aster-light/50 border-royal shadow-sm'
                      : 'bg-luster/60 border-jodhpur/30 hover:bg-luster'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-royal flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-royal" />
                      <span>{currentLang === 'ja' ? w.wardJa : w.wardEn}</span>
                    </div>
                    <div className="text-xs text-royal-deep/65 mt-0.5">{w.typology}</div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold font-mono text-royal-deep tabular-nums">
                      ¥{w.adr.toLocaleString()}
                    </div>
                    <div className="text-xs font-bold text-habanero">
                      {w.occupancyPct}% Occ · {w.simpleLodgingCount} 宿所
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Ward Regulatory Detail */}
            <div className="mt-4 p-3 rounded-xl bg-white border border-jodhpur/40 text-xs space-y-1">
              <div className="font-bold text-royal text-xs">
                {currentLang === 'ja'
                  ? `${wards[selectedWard].wardJa}の条例・法規制メモ:`
                  : `${wards[selectedWard].wardEn} Regulatory Note:`}
              </div>
              <p className="text-royal-deep/70 text-xs leading-relaxed">
                {wards[selectedWard].regulatoryNote}
              </p>
              <div className="text-xs text-royal-deep/65 pt-1 font-mono">
                {currentLang === 'ja' ? '適用宿泊税区分:' : 'Typical Accommodation Tax:'}{' '}
                <strong>{wards[selectedWard].taxBracketTypical}</strong>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-jodhpur/30 flex items-center justify-between text-xs font-semibold text-royal-deep/65">
            <span>Kyoto Tourism Bureau Statistics</span>
            <span className="text-royal font-bold">Updated October 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
