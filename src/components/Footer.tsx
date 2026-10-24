import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { PageTab } from './Header';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  return (
    <footer className="w-full bg-royal-deep text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center font-bold text-xs">
              BFO
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white">
                BFO CONSULTING
              </span>
              <p className="text-[11px] text-white/60">
                {currentLang === 'ja'
                  ? '日本の独立系宿泊施設のための客観的データ分析'
                  : 'Data Advisory for Independent Accommodation in Japan'}
              </p>
            </div>
          </div>

          {/* Minimal Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/70">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition cursor-pointer">
              {currentLang === 'ja' ? '会社概要' : 'Home'}
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
              {currentLang === 'ja' ? 'サービス' : 'Services'}
            </button>
            <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition cursor-pointer">
              {currentLang === 'ja' ? 'レポート & マトリクス' : 'Portfolio'}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition cursor-pointer">
              {currentLang === 'ja' ? 'お問い合わせ' : 'Contact'}
            </button>
          </nav>

          {/* Minimal Email */}
          <a
            href="mailto:hello@bfoconsult.ing"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition border border-white/15"
          >
            <Mail className="w-3.5 h-3.5 text-habanero" />
            <span>hello@bfoconsult.ing</span>
          </a>
        </div>

        {/* Minimal Legal & Regulatory Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-2">
          <div>
            © 2026 BFO Consulting. Observes Japan Private Lodging Business Act No. 65.
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>Article 30-4 Copyright Act Compliant</span>
            <span>Bilateral NDA Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
