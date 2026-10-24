import React from 'react';
import { ArrowRight, Building, Compass, HeartHandshake, Mail } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from '../components/Header';
import { PinnedHero, Scrub, ScrollStatement, Stagger, StaggerItem } from '../components/ScrollMotion';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onNavigate }) => {
  const headline = SITE_CONTENT.heroTaglines[1];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <PinnedHero>
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-10">
          <Stagger immediate stagger={0.12} delay={0.1} className="space-y-6">
            {/* Tag */}
            <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aster/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-habanero" />
              <span className="text-sm font-semibold text-royal">
                {currentLang === 'ja' ? '京都町家・小規模宿泊データ分析' : 'Kyoto machiya data advisory'}
              </span>
            </div>
            </StaggerItem>

            {/* Main Headline */}
            <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-royal-deep tracking-tight leading-[1.08]">
              {headline[currentLang]}
            </h1>
            </StaggerItem>

            {/* Lead Brief Description */}
            <StaggerItem>
            <p className="text-base md:text-lg text-royal-deep/80 leading-relaxed font-normal max-w-2xl">
              {currentLang === 'ja'
                ? '公開レビューと予約データを、日本の小規模宿泊オーナーの運営判断に変えます。'
                : 'We turn public guest and booking data into operating decisions for small accommodation owners in Japan.'}
            </p>
            </StaggerItem>

            {/* Action Buttons */}
            <StaggerItem>
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
            </StaggerItem>
          </Stagger>
          </div>

        </div>
      </section>
      </PinnedHero>

      {/* Who We Are: pinned statement that lights up as you scroll */}
      <ScrollStatement
        eyebrow={
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-royal bg-aster-light px-3 py-1 rounded-full w-fit mb-6">
            <Building className="w-3.5 h-3.5 text-royal" />
            <span>{currentLang === 'ja' ? '私たちについて' : 'Who we are'}</span>
          </div>
        }
        headline={
          currentLang === 'ja' ? '京都で町家を運営する私たちが作りました。' : 'Built by Kyoto machiya operators.'
        }
        body={
          currentLang === 'ja'
            ? '既存の調査は大手ホテルや予約サイト向けで、京都の町家に合うものがありませんでした。'
            : 'Most research comes from hotel chains or vendors. Nothing was built for Kyoto machiya.'
        }
      />

      {/* Mission, Vision */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-6">
        {/* Mission & Vision (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <Scrub from={{ x: -160, rotate: -4 }}>
          <div className="h-full bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 text-royal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
                {currentLang === 'ja' ? 'ミッション' : 'Our mission'}
              </h2>
            </div>
            <p className="text-lg md:text-2xl font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '大手オペレーターが大金を払って手に入れる証拠を、日本の個人宿泊オーナーに届ける。'
                : 'Give independent owners in Japan the evidence large operators pay for.'}
            </p>
          </div>
          </Scrub>

          {/* Vision */}
          <Scrub from={{ x: 160, rotate: 4 }} lag={0.15}>
          <div className="h-full bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-aster-light text-royal flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-royal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
                {currentLang === 'ja' ? 'ビジョン' : 'Our vision'}
              </h2>
            </div>
            <p className="text-lg md:text-2xl font-semibold text-royal leading-snug">
              {currentLang === 'ja'
                ? '適切に運営された個人町家が、どんなホテルとも互角に戦える市場を創る。'
                : 'A market where a well-run independent house competes with any hotel.'}
            </p>
          </div>
          </Scrub>
        </div>

        {/* Bottom CTA block */}
        <Scrub from={{ scale: 0.8, y: 80 }}>
        <div className="bg-gradient-to-r from-royal via-royal to-royal-deep text-white rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-royal">
          <div>
            <h3 className="text-xl font-bold">
              {currentLang === 'ja' ? '施設についてご相談ください' : 'Talk to us about your property'}
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="mailto:blackfinorca@gmail.com"
              className="bg-white/10 hover:bg-white/20 text-white font-mono text-sm px-4 py-2.5 rounded-pill border border-white/20 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>blackfinorca@gmail.com</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-sm px-5 py-2.5 rounded-pill shadow-soft transition cursor-pointer"
            >
              {currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}
            </button>
          </div>
        </div>
        </Scrub>
      </section>
    </div>
  );
};
