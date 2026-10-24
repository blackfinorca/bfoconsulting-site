import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Globe } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onOpenConsultation }) => {
  const services = SITE_CONTENT.services;

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aster-light text-royal text-xs font-bold uppercase tracking-wider mb-3">
            {currentLang === 'ja' ? 'サービス体系' : 'CORE SERVICES'}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-royal-deep tracking-tight leading-tight">
            {currentLang === 'ja'
              ? '優先順位順の4つの実務サービスと1つの会員制度。'
              : 'Four Core Services in Priority Order, and One Membership.'}
          </h2>
          <p className="text-sm md:text-base text-royal-deep/75 mt-4 leading-relaxed">
            {currentLang === 'ja'
              ? 'すべてのサービスは、オーナーのOTA管理画面ログインまたは予約データエクスポートから完全リモートで実行されます。現地訪問による余計な拘束はありません。'
              : "Each service runs remotely from the owner's channel logins and booking exports. No intrusive site visits or operational disruption."}
          </p>

          <div className="mt-6 p-4 rounded-2xl bg-white border border-jodhpur/50 shadow-soft space-y-2">
            <div className="text-xs font-bold text-royal flex items-center gap-2">
              <Globe className="w-4 h-4 text-royal" />
              <span>{currentLang === 'ja' ? '京都発・全国対応' : 'Kyoto-First · Works Nationwide'}</span>
            </div>
            <p className="text-xs text-royal-deep/70 leading-relaxed">
              {currentLang === 'ja'
                ? 'レビュー白書は京都特化ですが、OTAチャネル監査と料金ベンチマークは全国（大阪、東京、北海道等）の施設でそのままご利用いただけます。'
                : 'The review study is Kyoto-only; the channel audit and rate benchmark services work anywhere in Japan.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-royal font-bold text-sm mt-6 hover:text-habanero transition-colors cursor-pointer"
          >
            <span>{currentLang === 'ja' ? '提供内容を詳しく問い合わせる' : 'Schedule Service Intake'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: The 5 Services Stack */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-surface-pure rounded-2xl p-6 border border-jodhpur/40 shadow-soft hover:shadow-elevated transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aster-light text-royal flex items-center justify-center font-mono font-bold text-base shrink-0">
                  {srv.order}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-royal-deep">
                      {currentLang === 'ja' ? srv.titleJa : srv.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-aster font-mono">
                      {srv.id === 'benchmark_club' ? 'MEMBERSHIP' : `SERVICE ${srv.order}`}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-royal-deep/75 mt-2 leading-relaxed">
                    {currentLang === 'ja' ? srv.whatWeDoJa : srv.whatWeDo}
                  </p>

                  {/* Japan Focus */}
                  <div className="mt-3 p-3 rounded-xl bg-luster/60 border border-jodhpur/30 text-xs">
                    <div className="font-bold text-royal text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'ja' ? '日本の法規・市場への特化:' : 'Japan Market Focus:'}
                    </div>
                    <div className="text-royal-deep/70">
                      {currentLang === 'ja' ? srv.japanFocusJa : srv.japanFocus}
                    </div>
                  </div>

                  {/* Deliverables & Turnaround */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 pt-3 border-t border-jodhpur/30 text-xs">
                    <div className="flex items-center gap-1.5 text-royal font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-habanero shrink-0" />
                      <span>
                        <strong className="text-royal-deep/60 mr-1">
                          {currentLang === 'ja' ? '納品物:' : 'Deliverable:'}
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
      </div>
    </section>
  );
};
