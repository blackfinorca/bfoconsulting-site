import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Globe, Layers, DollarSign, Calculator, ShieldCheck, CheckSquare, Building, Users, Calendar, Compass, Mail } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from '../components/Header';
import { Reveal, Scrub, Stagger, StaggerItem } from '../components/ScrollMotion';

interface ServicesPageProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentLang, onNavigate }) => {
  const [activeSegmentTab, setActiveSegmentTab] = useState('owner_1_3');

  // Filter out the membership as requested ("remove priority membership")
  const coreServices = SITE_CONTENT.services.filter((s) => s.id !== 'benchmark_club');
  const values = SITE_CONTENT.coreValues;
  const segments = SITE_CONTENT.clientSegments;
  const currentSegment = segments.find((s) => s.id === activeSegmentTab) || segments[0];

  const getValueIcon = (key: string) => {
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

  const getSegmentIcon = (id: string) => {
    switch (id) {
      case 'owner_1_3':
        return <Building className="w-4 h-4 text-royal" />;
      case 'operator_4_12':
        return <Users className="w-4 h-4 text-royal" />;
      case 'minpaku_180':
        return <Calendar className="w-4 h-4 text-royal" />;
      case 'outside_kyoto':
        return <Compass className="w-4 h-4 text-royal" />;
      default:
        return <Building className="w-4 h-4 text-royal" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-12 md:pt-16">
        <Stagger stagger={0.1} delay={0.05} className="max-w-3xl space-y-4">
          <StaggerItem>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aster-light text-royal text-sm font-bold uppercase tracking-wider">
            {currentLang === 'ja' ? 'サービスと価値' : 'Services and value'}
          </div>
          </StaggerItem>
          <StaggerItem>
          <h2 className="text-4xl md:text-5xl font-extrabold text-royal-deep tracking-tight leading-[1.1]">
            {currentLang === 'ja'
              ? '小規模宿泊施設のためのリモートサービス'
              : 'Remote services for independent owners'}
          </h2>
          </StaggerItem>
          <StaggerItem>
          <p className="text-lg text-royal-deep/75 leading-relaxed max-w-2xl">
            {currentLang === 'ja'
              ? 'OTAの管理画面と予約データから、すべてリモートで実施します。'
              : 'Every service runs remotely from your channel logins and booking exports.'}
          </p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Part 1: What Are We Doing (Core Services & AI Agents) */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4 mb-8 pb-4 border-b border-jodhpur/40">
          <div>
            <span className="block mb-1 text-sm font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 01
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
              {currentLang === 'ja' ? 'サービス内容' : 'What we do'}
            </h2>
          </div>
          <div className="text-sm font-semibold text-royal-deep/65 hidden sm:block">
            {currentLang === 'ja' ? '完全リモート' : '100% remote'}
          </div>
        </div>

        <div className="space-y-6">
          {coreServices.map((srv) => (
            <div
              key={srv.id}
              className={`bg-surface-pure rounded-2xl p-6 md:p-8 border shadow-soft hover:shadow-elevated transition-all ${
                srv.id === 'ai_agents'
                  ? 'border-habanero/40 ring-1 ring-habanero/20 bg-gradient-to-r from-surface-pure via-surface-pure to-[#fff6ec]'
                  : 'border-jodhpur/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-base shrink-0 ${
                    srv.id === 'ai_agents'
                      ? 'bg-habanero text-white shadow-soft'
                      : 'bg-aster-light text-royal'
                  }`}
                >
                  {srv.order}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-royal-deep">
                        {currentLang === 'ja' ? srv.titleJa : srv.title}
                      </h3>
                      {srv.id === 'ai_agents' && (
                        <span className="bg-habanero text-white text-sm font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm">
                          {currentLang === 'ja' ? 'AI自動化' : 'Custom AI'}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-royal-deep/80 leading-relaxed font-medium max-w-prose">
                    {currentLang === 'ja' ? srv.whatWeDoJa : srv.whatWeDo}
                  </p>

                  <div className="p-4 rounded-xl bg-luster/60 border border-jodhpur/30 text-sm">
                    <div className="font-bold text-royal text-sm uppercase tracking-wider mb-0.5">
                      {currentLang === 'ja' ? '日本向け:' : 'Japan focus:'}
                    </div>
                    <div className="text-royal-deep/70">
                      {currentLang === 'ja' ? srv.japanFocusJa : srv.japanFocus}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-jodhpur/30 text-sm">
                    <div className="flex items-center gap-1.5 text-royal font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-habanero shrink-0" />
                      <span>
                        <strong className="text-royal-deep/65 mr-1">
                          {currentLang === 'ja' ? '納品物:' : 'You receive:'}
                        </strong>
                        {currentLang === 'ja' ? srv.deliverableJa : srv.deliverable}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-royal-deep/65 shrink-0 font-mono text-sm">
                      <Clock className="w-3 h-3" />
                      <span>{srv.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Value for Clients (The 5 Values & Evidence) */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Reveal className="flex items-end justify-between gap-4 mb-8 pb-4 border-b border-jodhpur/40">
          <div>
            <span className="block mb-1 text-sm font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 02
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
              {currentLang === 'ja' ? '5つの価値' : 'Why BFO'}
            </h2>
          </div>
          <p className="text-sm text-royal-deep/65 hidden sm:block">
            {currentLang === 'ja' ? '自館のレビューだけでは見えない根拠' : 'Evidence your own reviews cannot give'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <Scrub
              key={val.key}
              className={idx === 0 ? 'md:col-span-2' : undefined}
              from={idx === 0 ? { scale: 0.85, y: 80 } : { x: idx % 2 ? -140 : 140, y: 40 }}
              lag={idx === 0 ? 0 : (idx % 2 ? 0 : 0.12)}
            >
            <div className="h-full bg-surface-pure rounded-2xl p-6 md:p-8 border border-jodhpur/40 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-aster-light text-royal flex items-center justify-center">
                      {getValueIcon(val.key)}
                    </div>
                    <h3 className="text-base font-bold text-royal-deep">
                      {currentLang === 'ja' ? val.titleJa : val.title}
                    </h3>
                  </div>
                  <span className="text-sm font-mono text-royal-deep/65 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-sm md:text-base text-royal-deep/75 leading-relaxed max-w-prose">
                  {currentLang === 'ja' ? val.meaningJa : val.meaning}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-jodhpur/30 text-sm">
                <span className="text-sm font-bold text-royal-deep/65 mr-1.5 uppercase tracking-wider">
                  {currentLang === 'ja' ? '根拠:' : 'Evidence:'}
                </span>
                <span className="font-semibold text-royal">
                  {currentLang === 'ja' ? val.evidenceJa : val.evidence}
                </span>
              </div>
            </div>
            </Scrub>
          ))}
        </div>
      </section>

      {/* Part 3: Tailored Solutions for Independent Operators */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Reveal className="flex items-end justify-between gap-4 mb-8 pb-4 border-b border-jodhpur/40">
          <div>
            <span className="block mb-1 text-sm font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 03
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-royal-deep tracking-tight">
              {currentLang === 'ja'
                ? '規模別の提案'
                : 'Solutions by size'}
            </h2>
          </div>
          <span className="text-sm font-mono text-royal bg-aster-light px-2.5 py-0.5 rounded-full font-bold">
            4 Segments
          </span>
        </Reveal>

        {/* Segment Selector Tabs */}
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {segments.map((seg) => {
            const isSelected = seg.id === activeSegmentTab;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveSegmentTab(seg.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-royal text-white border-royal shadow-sm'
                    : 'bg-white text-royal-deep/75 border-jodhpur/40 hover:bg-luster'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-aster-light text-royal'
                    }`}
                  >
                    {getSegmentIcon(seg.id)}
                  </div>
                  <span
                    className={`text-sm font-mono uppercase ${
                      isSelected ? 'text-aster-light' : 'text-royal-deep/65'
                    }`}
                  >
                    {seg.scale}
                  </span>
                </div>
                <div className="text-sm font-bold leading-tight line-clamp-2">
                  {currentLang === 'ja' ? seg.titleJa : seg.title}
                </div>
              </button>
            );
          })}
        </Reveal>

        {/* Segment Content Card */}
        <Scrub from={{ scale: 0.85, y: 100 }}>
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="text-sm font-bold text-royal bg-aster-light px-3 py-1 rounded-full w-fit font-mono">
                {currentSegment.scale}
              </div>
              <h3 className="text-xl font-extrabold text-royal-deep">
                {currentLang === 'ja' ? currentSegment.titleJa : currentSegment.title}
              </h3>

              <div className="p-4 rounded-xl bg-luster/60 border border-jodhpur/30 space-y-1">
                <div className="text-sm font-bold uppercase tracking-wider text-royal">
                  {currentLang === 'ja' ? '必要なこと:' : 'What you need:'}
                </div>
                <p className="text-sm md:text-base text-royal-deep/80 font-medium leading-relaxed">
                  {currentLang === 'ja' ? currentSegment.needsJa : currentSegment.needs}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-sm font-bold text-royal-deep uppercase tracking-wider">
                  {currentLang === 'ja' ? '進め方:' : 'Steps:'}
                </div>
                {currentSegment.recommendedWorkflow.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-royal-deep/80">
                    <div className="w-3.5 h-3.5 rounded-full bg-aster-light text-royal flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-royal via-royal to-royal-deep text-white rounded-2xl p-6 md:p-8 shadow-glow-royal space-y-4">
              <div className="text-sm uppercase font-bold tracking-widest text-aster">
                {currentLang === 'ja' ? '最初のご提案' : 'FIRST OFFER'}
              </div>
              <div className="text-lg font-bold leading-snug">
                {currentLang === 'ja' ? currentSegment.firstOfferJa : currentSegment.firstOffer}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {currentLang === 'ja'
                  ? '予約CSVとOTA設定から、5営業日で納品します。'
                  : 'Delivered in 5 business days from your booking export and channel settings.'}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-sm py-2.5 rounded-pill shadow-soft transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
        </Scrub>
      </section>

      {/* Bottom Contact Us Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <Scrub from={{ scale: 0.8, y: 80 }}>
        <div className="bg-luster border border-jodhpur/50 rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-royal-deep">
              {currentLang === 'ja'
                ? 'どのサービスが合うか相談する'
                : 'Ready to benchmark your house?'}
            </h3>
            <p className="text-sm text-royal-deep/70 mt-1">
              {currentLang === 'ja'
                ? 'ご質問・お見積もりはお問い合わせページから。'
                : 'Send your question through the contact form.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="mailto:blackfinorca@gmail.com"
              className="bg-white hover:bg-luster text-royal-deep font-mono text-sm px-4 py-2.5 rounded-pill border border-jodhpur/50 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>blackfinorca@gmail.com</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-sm sm:text-base px-6 py-3 rounded-pill shadow-soft transition cursor-pointer shrink-0 flex items-center gap-2"
            >
              <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        </Scrub>
      </section>
    </div>
  );
};
