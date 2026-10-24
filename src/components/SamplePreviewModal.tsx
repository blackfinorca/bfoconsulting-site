import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Lock } from 'lucide-react';
import { Language, SITE_CONTENT, ResearchProduct } from '../data/content';

interface SamplePreviewModalProps {
  productId: string | null;
  currentLang: Language;
  onClose: () => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ productId, currentLang, onClose }) => {
  const [email, setEmail] = useState('');
  const [requestedFormat, setRequestedFormat] = useState<'pdf' | 'executive_summary'>('executive_summary');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!productId) return null;

  const product: ResearchProduct | undefined = SITE_CONTENT.researchProducts.find((p) => p.id === productId);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-deep/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-card shadow-elevated border border-jodhpur/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-royal to-royal-deep text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-habanero" />
            </div>
            <div>
              <div className="text-sm uppercase font-bold tracking-widest text-aster">
                {product.edition}
              </div>
              <h3 className="text-base font-bold text-white">
                {currentLang === 'ja' ? product.titleJa : product.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {!isSubmitted ? (
            <>
              {/* Product Description */}
              <div className="space-y-2">
                <p className="text-sm md:text-base text-royal-deep/80 leading-relaxed font-medium">
                  {currentLang === 'ja' ? product.descriptionJa : product.description}
                </p>
                <div className="inline-block text-sm font-bold text-royal bg-aster-light px-2.5 py-1 rounded-md">
                  {product.pagesOrItems}
                </div>
              </div>

              {/* Sample Highlights / Table of Contents Preview */}
              <div className="bg-luster/60 p-4 rounded-xl border border-jodhpur/40 space-y-2.5">
                <div className="text-sm font-bold text-royal-deep uppercase tracking-wider">
                  {currentLang === 'ja' ? 'サンプルの内容:' : 'Sample includes:'}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {(currentLang === 'ja' ? product.sampleHighlightsJa : product.sampleHighlights).map(
                    (point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-royal-deep/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-habanero shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Free Sample Delivery Request Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-jodhpur/30">
                <div className="text-sm font-bold text-royal-deep uppercase tracking-wider">
                  {currentLang === 'ja' ? '無料サンプルを送付:' : 'Free sample:'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`p-3 rounded-xl border text-sm cursor-pointer flex items-center gap-2 transition-all ${
                      requestedFormat === 'executive_summary'
                        ? 'border-royal bg-aster-light/40 font-bold text-royal'
                        : 'border-jodhpur/50 bg-luster/40 text-royal-deep/70'
                    }`}
                  >
                    <input
                      type="radio"
                      name="format"
                      checked={requestedFormat === 'executive_summary'}
                      onChange={() => setRequestedFormat('executive_summary')}
                      className="accent-royal"
                    />
                    <span>Executive Summary (12p)</span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border text-sm cursor-pointer flex items-center gap-2 transition-all ${
                      requestedFormat === 'pdf'
                        ? 'border-royal bg-aster-light/40 font-bold text-royal'
                        : 'border-jodhpur/50 bg-luster/40 text-royal-deep/70'
                    }`}
                  >
                    <input
                      type="radio"
                      name="format"
                      checked={requestedFormat === 'pdf'}
                      onChange={() => setRequestedFormat('pdf')}
                      className="accent-royal"
                    />
                    <span>Full Sample Table & Checklist</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? 'メールアドレス *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@machiya-kyoto.jp"
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-sm py-3 rounded-pill shadow-glow-habanero transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {currentLang === 'ja' ? '無料サンプルを受け取る' : 'Get free sample'}
                  </span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-sm text-royal-deep/65 text-center">
                  <Lock className="w-3 h-3 text-royal" />
                  <span>
                    {currentLang === 'ja'
                      ? '広告メールや電話営業は行いません。著作権法第30条の4準拠。'
                      : 'No spam or sales calls. Compliant with Article 30-4, Japan Copyright Act.'}
                  </span>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-royal-deep">
                {currentLang === 'ja' ? 'サンプルを送信しました' : 'Sample sent'}
              </h4>
              <p className="text-sm text-royal-deep/70 max-w-md mx-auto leading-relaxed">
                {currentLang === 'ja'
                  ? `無料サンプルを ${email} に送信しました。`
                  : `Sample sent to ${email}. Check your inbox.`}
              </p>
              <button
                onClick={onClose}
                className="bg-royal hover:bg-royal-deep text-white font-bold text-sm px-6 py-2.5 rounded-pill transition cursor-pointer"
              >
                {currentLang === 'ja' ? '閉じる' : 'Close'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
