import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Globe, Layers, DollarSign, Calculator, ShieldCheck, CheckSquare, Building, Users, Calendar, Compass, Mail } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from '../components/Header';

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
    <div className="w-full pt-28 pb-16">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aster-light text-royal text-xs font-bold uppercase tracking-wider">
            {currentLang === 'ja' ? '提供サービス & 価値' : 'WHAT WE DO & VALUE TO CLIENTS'}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja'
              ? '小規模宿泊施設のための実務サービス & カスタムAI自動化'
              : 'Core Remote Services & Custom AI Agents for Independent Owners'}
          </h1>
          <p className="text-xs md:text-sm text-royal-deep/75 leading-relaxed">
            {currentLang === 'ja'
              ? 'すべてのサービスは、OTAの管理画面情報や予約データをもとに完全リモートで実行され、カスタムAIエージェントによる日々の運営自動化まで対応します。'
              : "Each service runs remotely from your channel logins and booking exports, extending to custom AI agents that automate everyday host operations."}
          </p>
        </div>
      </section>

      {/* Part 1: What Are We Doing (Core Services & AI Agents) */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-jodhpur/30">
          <div>
            <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 01
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-royal-deep">
              {currentLang === 'ja' ? 'サービス内容（優先順位順）' : 'What We Do'}
            </h2>
          </div>
          <div className="text-xs font-semibold text-royal-deep/60 hidden sm:block">
            {currentLang === 'ja' ? '完全リモート提供' : '100% Remote Delivery'}
          </div>
        </div>

        <div className="space-y-4">
          {coreServices.map((srv) => (
            <div
              key={srv.id}
              className={`bg-surface-pure rounded-2xl p-6 border shadow-soft hover:shadow-elevated transition-all ${
                srv.id === 'ai_agents'
                  ? 'border-habanero/40 ring-1 ring-habanero/20 bg-gradient-to-r from-surface-pure via-surface-pure to-habanero/5'
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
                        <span className="bg-habanero text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm">
                          {currentLang === 'ja' ? 'AI自動化' : 'Custom AI'}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-aster font-mono">
                      SERVICE {srv.order}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-royal-deep/80 leading-relaxed font-medium">
                    {currentLang === 'ja' ? srv.whatWeDoJa : srv.whatWeDo}
                  </p>

                  <div className="p-3 rounded-xl bg-luster/60 border border-jodhpur/30 text-xs">
                    <div className="font-bold text-royal text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'ja' ? '日本の法規・市場への特化:' : 'Japan Focus:'}
                    </div>
                    <div className="text-royal-deep/70">
                      {currentLang === 'ja' ? srv.japanFocusJa : srv.japanFocus}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-jodhpur/30 text-xs">
                    <div className="flex items-center gap-1.5 text-royal font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-habanero shrink-0" />
                      <span>
                        <strong className="text-royal-deep/60 mr-1">
                          {currentLang === 'ja' ? '納品物:' : 'The owner receives:'}
                        </strong>
                        {currentLang === 'ja' ? srv.deliverableJa : srv.deliverable}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-royal-deep/50 shrink-0 font-mono text-[11px]">
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
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-jodhpur/30">
          <div>
            <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 02
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-royal-deep">
              {currentLang === 'ja' ? 'クライアントへの5つの価値' : 'Value to Clients'}
            </h2>
          </div>
          <p className="text-xs text-royal-deep/60 hidden sm:block">
            {currentLang === 'ja' ? '自館のレビューだけでは見えない客観的根拠' : 'Evidence you cannot get from your own reviews'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((val, idx) => (
            <div
              key={val.key}
              className={`bg-surface-pure rounded-2xl p-5 border border-jodhpur/40 shadow-soft flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
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
                  <span className="text-[10px] font-mono text-royal-deep/40 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-royal-deep/75 leading-relaxed">
                  {currentLang === 'ja' ? val.meaningJa : val.meaning}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-jodhpur/30 text-xs">
                <span className="text-[11px] font-bold text-royal-deep/60 mr-1.5 uppercase tracking-wider">
                  {currentLang === 'ja' ? '実証データ:' : 'Evidence:'}
                </span>
                <span className="font-semibold text-royal">
                  {currentLang === 'ja' ? val.evidenceJa : val.evidence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: Tailored Solutions for Independent Operators */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-jodhpur/30">
          <div>
            <span className="text-[10px] font-bold uppercase text-aster tracking-widest font-mono">
              SECTION 03
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-royal-deep">
              {currentLang === 'ja'
                ? '宿泊規模別の最適ソリューション'
                : 'Tailored Solutions for Independent Operators'}
            </h2>
          </div>
          <span className="text-xs font-mono text-royal bg-aster-light px-2.5 py-0.5 rounded-full font-bold">
            4 Segments
          </span>
        </div>

        {/* Segment Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {segments.map((seg) => {
            const isSelected = seg.id === activeSegmentTab;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveSegmentTab(seg.id)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
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
                    className={`text-[9px] font-mono uppercase ${
                      isSelected ? 'text-aster-light' : 'text-royal-deep/50'
                    }`}
                  >
                    {seg.scale}
                  </span>
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-2">
                  {currentLang === 'ja' ? seg.titleJa : seg.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Segment Content Card */}
        <div className="bg-surface-pure rounded-card p-6 md:p-8 border border-jodhpur/40 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-bold text-royal bg-aster-light px-3 py-1 rounded-full w-fit font-mono">
                {currentSegment.scale}
              </div>
              <h3 className="text-xl font-extrabold text-royal-deep">
                {currentLang === 'ja' ? currentSegment.titleJa : currentSegment.title}
              </h3>

              <div className="p-3.5 rounded-xl bg-luster/60 border border-jodhpur/30 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-royal">
                  {currentLang === 'ja' ? '必要なこと (What they need):' : 'What You Need:'}
                </div>
                <p className="text-xs md:text-sm text-royal-deep/80 font-medium leading-relaxed">
                  {currentLang === 'ja' ? currentSegment.needsJa : currentSegment.needs}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold text-royal-deep uppercase tracking-wider">
                  {currentLang === 'ja' ? '推奨アクション手順:' : 'Action Protocol:'}
                </div>
                {currentSegment.recommendedWorkflow.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-royal-deep/80">
                    <div className="w-3.5 h-3.5 rounded-full bg-aster-light text-royal flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-royal via-royal to-royal-deep text-white rounded-2xl p-6 shadow-glow-royal space-y-4">
              <div className="text-[10px] uppercase font-bold tracking-widest text-aster">
                {currentLang === 'ja' ? '初回の推奨オファー' : 'FIRST OFFER'}
              </div>
              <div className="text-lg font-bold leading-snug">
                {currentLang === 'ja' ? currentSegment.firstOfferJa : currentSegment.firstOffer}
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                {currentLang === 'ja'
                  ? '物件の予約CSVエクスポートとOTA掲載設定をもとに、5営業日以内に診断結果を納品します。'
                  : 'Delivered in 5 business days using your actual booking export and channel manager settings.'}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-xs py-2.5 rounded-pill shadow-soft transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Us Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-luster border border-jodhpur/50 rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-royal-deep">
              {currentLang === 'ja'
                ? '自館の町家に最適なサービスについて相談する'
                : 'Ready to benchmark your house against 367 properties?'}
            </h3>
            <p className="text-xs text-royal-deep/70 mt-1">
              {currentLang === 'ja'
                ? 'ご質問やお見積もりは、お問い合わせページよりお気軽にお送りください。'
                : 'Send your inquiry or property details via our direct contact form.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="mailto:hello@bfoconsult.ing"
              className="bg-white hover:bg-luster text-royal-deep font-mono text-xs px-4 py-2.5 rounded-pill border border-jodhpur/50 transition flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-habanero" />
              <span>hello@bfoconsult.ing</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-habanero hover:bg-habanero-hover text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-pill shadow-soft transition cursor-pointer shrink-0 flex items-center gap-2"
            >
              <span>{currentLang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
