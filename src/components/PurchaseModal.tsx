import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ShoppingCart, Mail, ArrowRight, Download, FileText } from 'lucide-react';
import { Language, SITE_CONTENT, ResearchProduct } from '../data/content';

interface PurchaseModalProps {
  productId: string | null;
  currentLang: Language;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ productId, currentLang, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!productId) return null;

  const product: ResearchProduct | undefined = SITE_CONTENT.researchProducts.find((p) => p.id === productId);

  if (!product) return null;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-deep/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-card shadow-elevated border border-jodhpur/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-royal via-royal to-royal-deep text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-habanero" />
            </div>
            <div>
              <div className="text-sm uppercase font-bold tracking-widest text-aster">
                {currentLang === 'ja' ? '購入手続き' : 'ORDER'} · {product.edition}
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
        <div className="p-6 md:p-8 space-y-5 max-h-[85vh] overflow-y-auto">
          {/* Product Summary Card */}
          <div className="bg-luster/60 rounded-2xl p-4 border border-jodhpur/30 flex items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-royal bg-aster-light px-2.5 py-0.5 rounded-full">
                {product.coverTag}
              </span>
              <div className="text-sm text-royal-deep/70 mt-1.5">
                {currentLang === 'ja' ? product.deliveryFormatJa : product.deliveryFormat}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-extrabold font-mono text-royal-deep tabular-nums">
                {currentLang === 'ja' ? product.priceJa : product.price}
              </div>
              <div className="text-sm text-royal-deep/65">
                {currentLang === 'ja' ? 'PDF即時納品' : 'Instant PDF'}
              </div>
            </div>
          </div>

          {!isOrdered ? (
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? 'お名前 / 貴社名 *' : 'Name / company *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={currentLang === 'ja' ? '高橋 健二郎' : 'Kenjiro Takahashi'}
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? '納品先メール *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@property.jp"
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                  {currentLang === 'ja' ? '施設名（任意）' : 'Property (optional)'}
                </label>
                <input
                  type="text"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  placeholder={currentLang === 'ja' ? '京都市下京区 一棟貸し町家' : 'Kyoto Shimogyo Machiya'}
                  className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-base py-3.5 rounded-pill shadow-glow-habanero transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {currentLang === 'ja'
                      ? `購入を確定する (${product.priceJa})`
                      : `Confirm purchase (${product.price})`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-sm text-royal-deep/65 px-1">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-royal" />
                    <span>{currentLang === 'ja' ? '適格請求書を発行' : 'Qualified invoice included'}</span>
                  </div>
                  <a
                    href={`mailto:hello@bfoconsult.ing?subject=Purchase%20Order:%20${encodeURIComponent(product.title)}&body=I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.title)}%20(${product.price}).`}
                    className="text-royal hover:underline font-semibold"
                  >
                    {currentLang === 'ja' ? 'メールで注文' : 'Order by email'}
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-royal-deep">
                {currentLang === 'ja' ? '注文を受け付けました' : 'Order received'}
              </h3>
              <p className="text-sm text-royal-deep/80 max-w-md mx-auto leading-relaxed">
                {currentLang === 'ja'
                  ? `${name} 様、ありがとうございます。ダウンロードリンクと適格請求書を ${email} に送ります。`
                  : `Thank you, ${name}. We will send the PDF and invoice to ${email}.`}
              </p>
              <button
                type="button"
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
