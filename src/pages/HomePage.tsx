import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, Compass, HeartHandshake, Mail } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from '../components/Header';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onNavigate }) => {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const headlines = SITE_CONTENT.heroTaglines;

  return (
    <div className="w-full pt-28 pb-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aster/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-habanero" />
              <span className="text-xs font-semibold text-royal">
                {currentLang === 'ja' ? '京都町家・小規模宿泊データ分析' : 'Kyoto Machiya Data Advisory'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-royal-deep tracking-tight leading-[1.08]">
              {headlines[headlineIdx][currentLang]}
            </h1>

            {/* Tagline switcher */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-royal-deep/60 mr-1">
                {currentLang === 'ja' ? 'テーマ:' : 'Focus:'}
              </span>
              {headlines.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeadlineIdx(i)}
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                    headlineIdx === i
                      ? 'bg-royal text-white shadow-sm'
                      : 'bg-white text-royal-deep/70 border border-jodhpur/40 hover:bg-aster-light'
                  }`}
                >
                  {i === 0
                    ? 'BFO Consulting'
                    : i === 1
                    ? currentLang === 'ja'
                      ? '運営者発'
                      : 'Owner-Run'
                    : currentLang === 'ja'
                    ? '運営判断'
                    : 'Decisions'}
                </button>
              ))}
            </div>

            {/* Lead Brief Description */}
            <p className="text-base text-royal-deep/80 leading-relaxed font-normal">
              {currentLang === 'ja'
                ? 'BFO Consultingは、公開レビューと予約データを日本の小規模宿泊オーナーの実践的な運営判断に変えます。私たち自身も京都で町家を運営しています。'
                : 'BFO Consulting turns public guest and booking data into operating decisions for small accommodation owners in Japan. We run machiya in Kyoto ourselves.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="bg-royal hover:bg-royal-deep text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-pill shadow-soft hover:shadow-glow-royal transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'サービス一覧を見る' : 'Explore Services'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-habanero hover:bg-habanero-hover text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-pill shadow-soft transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-semibold text-royal-deep/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-habanero" />
                <span>{currentLang === 'ja' ? '完全中立・独立運営' : '100% Independent'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-habanero" />
                <span>{currentLang === 'ja' ? '京都で町家を自ら運営' : 'Kyoto Machiya Operators'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-habanero" />
                <span>{currentLang === 'ja' ? '1〜12棟の個人運営特化' : '1 to 12 Houses Focus'}</span>
              </div>
            </div>
          </div>

          {/* Right Visual: 3D Ribbon & Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-tr from-aster-light/60 via-white to-white p-6 border border-white shadow-elevated flex items-center justify-center overflow-hidden">
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-aster/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-habanero/20 rounded-full blur-3xl pointer-events-none" />

              <svg
                className="w-full h-auto drop-shadow-2xl z-10"
                fill="none"
                viewBox="0 0 400 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="homeRibbonGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#223382" />
                    <stop offset="50%" stopColor="#9BACD8" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                  <linearGradient id="homeInnerLoop" x1="100%" x2="0%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#F98513" />
                    <stop offset="60%" stopColor="#223382" />
                    <stop offset="100%" stopColor="#111144" />
                  </linearGradient>
                </defs>
                <path
                  d="M70,120 C100,50 180,50 220,120 C260,190 320,180 340,120 C360,60 280,60 230,110 C180,160 110,180 70,120 Z"
                  fill="url(#homeInnerLoop)"
                  opacity="0.88"
                />
                <path
                  d="M50,110 C70,30 200,40 250,110 C290,170 340,160 350,110 C360,50 250,60 190,130 C140,190 70,170 50,110 Z"
                  fill="url(#homeRibbonGrad)"
                  opacity="0.92"
                />
                <path
                  d="M60,105 C80,45 190,55 240,115 C280,165 330,155 345,115"
                  opacity="0.75"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-aster/40 px-3 py-2 rounded-2xl shadow-soft">
                <div className="text-xs font-bold text-royal tabular-nums">Kyoto Machiya</div>
                <div className="text-[10px] text-royal-deep/60">Operator Advisory</div>
              </div>

              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-aster/40 px-3 py-2 rounded-2xl shadow-soft">
                <div className="text-xs font-bold text-royal-deep tabular-nums">49% Independent</div>
                <div className="text-[10px] text-royal-deep/60">Single Licence Owners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Blue Market Scope Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 my-6">
        <div className="relative bg-gradient-to-r from-royal via-[#1a2d7a] to-royal-deep rounded-card p-6 md:p-8 text-white shadow-glow-royal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="pt-2 md:pt-0 md:px-4 first:pl-0">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                3,226
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '京都市簡易宿所' : 'Licensed Simple Lodgings'}
              </div>
              <p className="text-[11px] text-white/60 mt-1">Kyoto City registry</p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                1,346
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '京都市登録民泊' : 'Registered Minpaku'}
              </div>
              <p className="text-[11px] text-white/60 mt-1">Subject to 180-night cap</p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                49%
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '単独許可ホルダー比率' : 'Single-Licence Share'}
              </div>
              <p className="text-[11px] text-white/60 mt-1">Core independent market</p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-habanero font-mono tabular-nums">
                100%
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '完全独立・中立性' : 'Independent Advisory'}
              </div>
              <p className="text-[11px] text-white/60 mt-1">0% vendor commissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Company: Who We Are, Mission, Vision */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-10">
        {/* Who We Are */}
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full w-fit mb-3">
            <Building className="w-3.5 h-3.5 text-royal" />
            <span>{currentLang === 'ja' ? '私たちについて' : 'WHO WE ARE'}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight mb-4">
            {currentLang === 'ja'
              ? '自ら京都で町家を運営する私たちが、データを現場の意思決定に変える。'
              : 'Turning public guest and booking data into operating decisions.'}
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-royal-deep/80 leading-relaxed">
            <p>
              {currentLang === 'ja'
                ? 'BFO Consultingは、公開ゲストレビューと予約データを日本の小規模宿泊オーナーの実践的な運営判断に変える独立コンサルティングです。私たち自身も京都で町家を運営しています。'
                : 'BFO Consulting turns public guest and booking data into operating decisions for small accommodation owners in Japan. We run machiya in Kyoto ourselves.'}
            </p>
            <p>
              {currentLang === 'ja'
                ? '小規模な宿泊オーナーが料金設定、販売チャネル、運営オペレーションの指針を探すとき、見つかるのは大手ホテルの研究資料か予約サイトの営業資料ばかりです。京都の町家に特化した客観的な指針はありませんでした。自ら町家を運営する当事者として、現場で本当に使える運営判断を提供します。'
                : 'When independent owners look for guidance on pricing, distribution channels, and guest operations, most available research comes from large hotel chains or vendor marketing. Nothing is built for Kyoto machiya. As active machiya operators ourselves, we provide the practical, data-backed operational clarity owners need.'}
            </p>
          </div>
        </div>

        {/* Mission & Vision (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 text-royal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
                {currentLang === 'ja' ? 'ミッション' : 'Our Mission'}
              </h2>
            </div>
            <p className="text-sm md:text-base font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '大手オペレーターが大金を払って手に入れる証拠を、日本の個人宿泊オーナーに届ける。'
                : 'Give independent accommodation owners in Japan the evidence large operators pay for, so they decide what to fix, what to charge, and where to sell from data.'}
            </p>
            <p className="text-xs text-royal-deep/70 leading-relaxed pt-2 border-t border-jodhpur/30">
              {currentLang === 'ja'
                ? '一軒の町家が集めるレビューは年間約13件。自分のカレンダーしか見えません。私たちは数千人の宿泊客の声と市場価格を集約し、今週すぐ実行できるチェックリスト、適正単価、OTA設定に翻訳します。'
                : "A single house collects about 13 reviews a year and sees only its own calendar. We pool what thousands of guests have written and what the market charges, then turn it into a checklist, a rate, and a channel setting an owner can act on this week."}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-royal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
                {currentLang === 'ja' ? 'ビジョン' : 'Our Vision'}
              </h2>
            </div>
            <p className="text-sm md:text-base font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '適切に運営された個人町家が、どんなホテルとも互角に戦える市場を創る。'
                : 'A Japanese short-stay market where a well-run independent house competes with any hotel, because its owner knows what guests reward, what they punish, and what each channel really pays.'}
            </p>
            <p className="text-xs text-royal-deep/70 leading-relaxed pt-2 border-t border-jodhpur/30">
              {currentLang === 'ja'
                ? '京都の宿泊市場において、高稼働・高評価の町家と低評価の町家は、同じ区、同じ建物種別、同じ価格帯であることが珍しくありません。決定的な差は「どのように運営されているか」であり、それは後から習得できます。'
                : 'In Kyoto, top-performing and underperforming machiya are often the same kind of building in the same wards at the same price point. The decisive gap is how the property is operated, and that can be learned.'}
            </p>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="bg-gradient-to-r from-royal via-royal to-royal-deep text-white rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-royal">
          <div>
            <h3 className="text-xl font-bold">
              {currentLang === 'ja' ? '提供サービスとソリューションを見る' : 'Explore Our Advisory Services'}
            </h3>
            <p className="text-xs text-white/70 mt-1">
              {currentLang === 'ja'
                ? '4つの実務サービス、客観的な提供価値、および運営形態別のソリューションをご確認ください。'
                : 'Four core remote services, client value benchmarks, and tailored solutions for independent operators.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="mailto:hello@bfoconsult.ing"
              className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-4 py-2.5 rounded-pill border border-white/20 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>hello@bfoconsult.ing</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-xs px-5 py-2.5 rounded-pill shadow-soft transition cursor-pointer"
            >
              {currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
