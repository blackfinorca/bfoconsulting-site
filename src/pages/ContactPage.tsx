import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ShieldCheck } from 'lucide-react';
import { Language } from '../data/content';

interface ContactPageProps {
  currentLang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    serviceInterest: 'OTA Channel Performance Audit',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = 'hello@bfoconsult.ing';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-16">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-royal-deep tracking-tight">
            {currentLang === 'ja' ? 'お問い合わせ' : 'Contact us'}
          </h1>
          <p className="text-base text-royal-deep/75 leading-relaxed">
            {currentLang === 'ja'
              ? '施設とご相談内容をお知らせください。'
              : 'Tell us about your property and what you need.'}
          </p>

          {/* Direct Email Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href={`mailto:${contactEmail}?subject=BFO%20Consulting%20Inquiry`}
              className="bg-royal hover:bg-royal-deep text-white font-bold text-sm px-5 py-2.5 rounded-pill shadow-soft transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{currentLang === 'ja' ? 'メールで問い合わせる' : 'Email us'}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="bg-white hover:bg-luster text-royal-deep border border-jodhpur/50 font-bold text-sm px-4 py-2.5 rounded-pill shadow-soft transition flex items-center gap-1.5 cursor-pointer font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-royal" />}
              <span>{copied ? 'Copied' : contactEmail}</span>
            </button>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-surface-pure rounded-card border border-jodhpur/50 shadow-elevated p-6 md:p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? 'お名前 *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={currentLang === 'ja' ? '例: 高橋 健二郎' : 'e.g. Kenjiro Takahashi'}
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? 'メールアドレス *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="owner@property.jp"
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? '施設名・所在地' : 'Property / Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    placeholder={currentLang === 'ja' ? '例: 京都市東山区 一棟貸し町家' : 'e.g. Kyoto Higashiyama Machiya'}
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                    {currentLang === 'ja' ? 'ご関心のある分野' : 'Area of Interest'}
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                  >
                    <option>Custom AI Agents to Automate Your Business</option>
                    <option>OTA Channel Performance Audit</option>
                    <option>Competitive Rate Benchmark</option>
                    <option>Guest Review Diagnostic</option>
                    <option>Guest Messaging Automation</option>
                    <option>Independent Research Publications</option>
                    <option>General Inquiry / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-royal-deep uppercase mb-1">
                  {currentLang === 'ja' ? 'ご相談内容・メッセージ *' : 'Message *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    currentLang === 'ja'
                      ? 'ご相談内容をご記入ください'
                      : 'Tell us what you need'
                  }
                  className="w-full bg-luster/70 border border-jodhpur/50 rounded-xl px-4 py-2.5 text-sm text-royal-deep placeholder:text-royal-deep/65 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-habanero hover:bg-habanero-hover text-white font-bold text-sm sm:text-base py-3.5 rounded-pill shadow-glow-habanero transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{currentLang === 'ja' ? '送信する' : 'Send message'}</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-sm text-royal-deep/65 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-royal" />
                  <span>
                    {currentLang === 'ja'
                      ? '送信内容は秘密保持契約（NDA）基準で保護されます。'
                      : 'Protected under bilateral NDA standards.'}
                  </span>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center space-y-4 max-w-md mx-auto">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-royal-deep">
                {currentLang === 'ja' ? '送信しました' : 'Message sent'}
              </h3>
              <p className="text-sm text-royal-deep/75 leading-relaxed">
                {currentLang === 'ja'
                  ? `${formData.name} 様、ありがとうございます。24時間以内に ${formData.email} 宛にご返信します。`
                  : `Thanks, ${formData.name}. We will reply to ${formData.email} within 24 business hours.`}
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="bg-royal hover:bg-royal-deep text-white font-bold text-sm px-6 py-2.5 rounded-pill transition cursor-pointer"
              >
                {currentLang === 'ja' ? '別のメッセージを送る' : 'Send another'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
