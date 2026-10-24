import React, { useState } from 'react';
import { Send, Lock, ShieldCheck, CheckCircle2, Phone, MapPin, Building2 } from 'lucide-react';
import { Language } from '../data/content';

interface ConsultationFormProps {
  currentLang: Language;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    entityName: '',
    email: '',
    phone: '',
    assetType: 'Licensed Kyoto Machiya (Simple Lodging 簡易宿所)',
    portfolioScale: '1 to 3 Licensed Machiya',
    mandate: 'OTA Channel Performance Audit',
    brief: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.entityName) return;

    const ref = `BFO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="consultation" className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      <div className="bg-surface-pure rounded-card border border-jodhpur/50 shadow-elevated overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Advisory & Bilateral NDA Guarantee */}
          <div className="lg:col-span-5 bg-gradient-to-br from-royal via-royal to-royal-deep text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4">
                {currentLang === 'ja' ? '守秘義務保証 // 個別診断' : 'CONFIDENTIAL ADVISORY'}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-white mb-4">
                {currentLang === 'ja'
                  ? '町家データ診断・ポートフォリオ査定の依頼'
                  : 'Commission a Diagnostic Portfolio Review.'}
              </h2>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {currentLang === 'ja'
                  ? '京都で自ら町家を運営する専門チームが、貴館のOTA手数料、適正単価、レビュースコア改善点を直接査定します。'
                  : 'Our team evaluates your exact OTA take-rates, night-by-night competitor pricing, and review point penalties directly from your booking export.'}
              </p>

              {/* Bilateral NDA Protection Box */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-white/80 space-y-1.5">
                <div className="font-bold text-white uppercase text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-habanero" />
                  <span>{currentLang === 'ja' ? '二国間・相互NDA完全保護' : 'Bilateral Japan NDA Protection'}</span>
                </div>
                <p className="leading-relaxed">
                  {currentLang === 'ja'
                    ? 'ご提出いただいた施設情報、売上明細、予約データは厳格な秘密保持契約の下で即時保護されます。他社への共有や公開は一切行いません。'
                    : 'All disclosures, financial statements, and booking records submitted are immediately protected under bilateral NDA standards.'}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-white/70 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-aster" />
                <span>
                  <strong className="text-white">Hotline:</strong> +81 (0)75 741 8920
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-aster" />
                <span>
                  <strong className="text-white">Kyoto Studio:</strong> Nakagyo-ku, Sanjo-dori, Kyoto 604-8006
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-aster" />
                <span>
                  <strong className="text-white">Tokyo Liaison:</strong> Marunouchi Trust Tower Main, 11F
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? 'お名前・ご担当者名 *' : 'Executive Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={currentLang === 'ja' ? '例: 高橋 健二郎' : 'e.g. Kenjiro Takahashi'}
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? '法人名 / 屋号・物件名 *' : 'Entity / Property Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.entityName}
                      onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                      placeholder={currentLang === 'ja' ? '例: 平安町家リゾート合同会社' : 'e.g. Heian Machiya GK'}
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? 'ご連絡先メールアドレス *' : 'Corporate / Owner Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="owner@capital.jp"
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? 'お電話番号 / WhatsApp' : 'Telephone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+81 90 0000 0000"
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? '許可区分・施設種別 *' : 'Licence & Asset Typology *'}
                    </label>
                    <select
                      value={formData.assetType}
                      onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    >
                      <option>Licensed Kyoto Machiya (Simple Lodging 簡易宿所)</option>
                      <option>Registered Minpaku (Private Lodging Act No. 65)</option>
                      <option>Preserved Heritage Machiya Portfolio</option>
                      <option>Boutique Hotel / Ryokan (&lt; 20 Keys)</option>
                      <option>Regional Property (Osaka, Tokyo, Hokkaido)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                      {currentLang === 'ja' ? '運営規模 *' : 'Portfolio Scale *'}
                    </label>
                    <select
                      value={formData.portfolioScale}
                      onChange={(e) => setFormData({ ...formData, portfolioScale: e.target.value })}
                      className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                    >
                      <option>1 House Standalone (Single Licence)</option>
                      <option>2 – 3 Licensed Machiya</option>
                      <option>4 – 12 Managed Units</option>
                      <option>13+ Units (Professional Operator)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? '希望する診断サービス *' : 'Preferred Mandate *'}
                  </label>
                  <select
                    value={formData.mandate}
                    onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  >
                    <option>OTA Channel Performance Audit (Net Rate & Discount Fixes)</option>
                    <option>Competitive Rate Benchmark (12-Month Night-by-Night Pricing)</option>
                    <option>Guest Review Diagnostic (Complaint Deductions & 246 Peer Group)</option>
                    <option>Guest Messaging Automation (4-Language Pre-Arrival & Taxi Cards)</option>
                    <option>Kyoto Machiya Benchmark Club (Quarterly Peer Membership)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? '現状の課題やご要望' : 'Current Challenges or Context'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder={
                      currentLang === 'ja'
                        ? '例: Booking.comの実質手数料が高すぎる、180日上限の消化ペース、直近のレビュー減点、清掃の品質管理など...'
                        : 'Outline specific concerns: high OTA commissions, stacked Genius discounts, 180-day cap pacing, recent rating drops...'
                    }
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-xs text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-sm py-3.5 rounded-pill shadow-glow-habanero transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{currentLang === 'ja' ? '診断依頼を送信する' : 'Submit Audit Commission Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-royal-deep/65 mt-3">
                    <Lock className="w-3.5 h-3.5 text-royal" />
                    <span>256-Bit SSL Encrypted · Automatic Institutional Bilateral NDA Protection</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-royal uppercase tracking-wider">
                    CONFIRMATION REF: {referenceId}
                  </span>
                  <h3 className="text-2xl font-bold text-royal-deep">
                    {currentLang === 'ja' ? '診断依頼を受け付けました' : 'Audit Request Registered'}
                  </h3>
                </div>
                <p className="text-xs text-royal-deep/75 max-w-md mx-auto leading-relaxed">
                  {currentLang === 'ja'
                    ? `${formData.name} 様、ご依頼ありがとうございます。ご登録いただいた「${formData.entityName}」の査定準備を開始いたします。担当者より24時間以内にNDA確認メールを ${formData.email} 宛にお送りします。`
                    : `Thank you, ${formData.name}. Your diagnostic request for "${formData.entityName}" has been logged under bilateral NDA protection. Our Kyoto partner will contact you at ${formData.email} within 24 business hours.`}
                </p>
                <div className="p-4 rounded-xl bg-luster max-w-sm mx-auto text-left text-xs space-y-1">
                  <div className="font-bold text-royal">
                    {currentLang === 'ja' ? '次のステップ:' : 'Next Protocol Step:'}
                  </div>
                  <div className="text-royal-deep/70">
                    {currentLang === 'ja'
                      ? '1. 秘密保持契約書（電子署名）の締結'
                      : '1. Bilateral NDA execution (electronic signature)'}
                  </div>
                  <div className="text-royal-deep/70">
                    {currentLang === 'ja'
                      ? '2. 予約データCSVまたはOTA掲載情報の安全な共有'
                      : '2. Secure transfer of booking export or listing links'}
                  </div>
                  <div className="text-royal-deep/70">
                    {currentLang === 'ja'
                      ? '3. 5営業日以内の診断書・設定変更リスト納品'
                      : '3. Delivery of net rate audit & ranked action list in 5 days'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-royal hover:underline cursor-pointer"
                >
                  {currentLang === 'ja' ? '別の施設を登録する' : 'Register another property'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
