import React from 'react';
import { ArrowRight, Building, Compass, HeartHandshake, Mail } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from '../components/Header';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onNavigate }) => {
  const headline = SITE_CONTENT.heroTaglines[1];

  return (
    <div className="w-full pt-28 pb-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-9 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aster/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-habanero" />
              <span className="text-sm font-semibold text-royal">
                {currentLang === 'ja' ? '京都町家・小規模宿泊データ分析' : 'Kyoto machiya data advisory'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-royal-deep tracking-tight leading-[1.08]">
              {headline[currentLang]}
            </h1>

            {/* Lead Brief Description */}
            <p className="text-base md:text-lg text-royal-deep/80 leading-relaxed font-normal max-w-2xl">
              {currentLang === 'ja'
                ? '公開レビューと予約データを、日本の小規模宿泊オーナーの運営判断に変えます。'
                : 'We turn public guest and booking data into operating decisions for small accommodation owners in Japan.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white border-2 border-royal text-royal hover:bg-royal hover:text-white font-bold text-base px-6 py-3 min-h-11 rounded-pill transition-colors duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'サービス一覧を見る' : 'Explore services'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-habanero hover:bg-habanero-hover text-royal-deep font-bold text-base px-6 py-3 min-h-11 rounded-pill shadow-soft transition-colors duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
              <div className="text-sm font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '京都市簡易宿所' : 'Licensed simple lodgings'}
              </div>
              <p className="text-sm text-white/70 mt-1">Kyoto City registry</p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                1,346
              </div>
              <div className="text-sm font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '京都市登録民泊' : 'Registered minpaku'}
              </div>
              <p className="text-sm text-white/70 mt-1">Subject to 180-night cap</p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                49%
              </div>
              <div className="text-sm font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '単独許可ホルダー比率' : 'Single-licence share'}
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <div className="text-2xl md:text-3xl font-extrabold text-habanero font-mono tabular-nums">
                100%
              </div>
              <div className="text-sm font-semibold text-white/90 mt-1">
                {currentLang === 'ja' ? '完全独立・中立性' : 'Independent advisory'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Company: Who We Are, Mission, Vision */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-10">
        {/* Who We Are */}
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full w-fit mb-3">
            <Building className="w-3.5 h-3.5 text-royal" />
            <span>{currentLang === 'ja' ? '私たちについて' : 'Who we are'}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight mb-4">
            {currentLang === 'ja'
              ? '京都で町家を運営する私たちが作りました。'
              : 'Built by Kyoto machiya operators.'}
          </h2>

          <p className="text-base md:text-base text-royal-deep/80 leading-relaxed">
            {currentLang === 'ja'
              ? '既存の調査は大手ホテルや予約サイト向けで、京都の町家に合うものがありませんでした。'
              : 'Most research comes from hotel chains or vendors. Nothing was built for Kyoto machiya.'}
          </p>
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
                {currentLang === 'ja' ? 'ミッション' : 'Our mission'}
              </h2>
            </div>
            <p className="text-base md:text-base font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '大手オペレーターが大金を払って手に入れる証拠を、日本の個人宿泊オーナーに届ける。'
                : 'Give independent owners in Japan the evidence large operators pay for.'}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-royal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
                {currentLang === 'ja' ? 'ビジョン' : 'Our vision'}
              </h2>
            </div>
            <p className="text-base md:text-base font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '適切に運営された個人町家が、どんなホテルとも互角に戦える市場を創る。'
                : 'A market where a well-run independent house competes with any hotel.'}
            </p>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="bg-gradient-to-r from-royal via-royal to-royal-deep text-white rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-royal">
          <div>
            <h3 className="text-xl font-bold">
              {currentLang === 'ja' ? 'サービスを見る' : 'Explore our services'}
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="mailto:hello@bfoconsult.ing"
              className="bg-white/10 hover:bg-white/20 text-white font-mono text-sm px-4 py-2.5 rounded-pill border border-white/20 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>hello@bfoconsult.ing</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-sm px-5 py-2.5 rounded-pill shadow-soft transition cursor-pointer"
            >
              {currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
