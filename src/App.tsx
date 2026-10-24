/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Header, PageTab } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { LiquidBackground } from './components/LiquidBackground';
import { ScrollProgress, SectionMarquee } from './components/ScrollMotion';
import { MotionConfig } from 'motion/react';
import { Language } from './data/content';

const SECTIONS: PageTab[] = ['home', 'services', 'portfolio', 'contact'];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>(() => {
    const h = window.location.hash.slice(1) as PageTab;
    return SECTIONS.includes(h) ? h : 'home';
  });
  const [currentLang, setCurrentLang] = useState<Language>('en');
  // While a nav click is smooth-scrolling, ignore the sections it passes through.
  const navLock = useRef<number | null>(null);

  const markActive = (tab: PageTab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', tab === 'home' ? window.location.pathname : `#${tab}`);
  };

  const handleNavigate = (tab: PageTab) => {
    markActive(tab);
    if (navLock.current) window.clearTimeout(navLock.current);
    navLock.current = window.setTimeout(() => (navLock.current = null), 1000);
    document.getElementById(tab)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  // Jump to the section named in the URL on first load.
  useEffect(() => {
    if (activeTab !== 'home') document.getElementById(activeTab)?.scrollIntoView();
  }, []);

  // Scroll spy: the section crossing the middle band of the viewport is the current one.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        if (navLock.current) return;
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) markActive(hit.target.id as PageTab);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));

    // The last section may never reach the middle band on tall screens.
    const onScroll = () => {
      if (navLock.current) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) markActive('contact');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  return (
    <MotionConfig reducedMotion="user">
    <LiquidBackground />
    <ScrollProgress />
    <div className="relative z-10 min-h-screen text-royal-deep flex flex-col font-sans selection:bg-habanero selection:text-white">
      {/* Top Floating Page Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleNavigate}
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
      />

      {/* Single scrolling page: one section per nav item */}
      <main className="flex-1 w-full overflow-x-clip">
        <div id="home">
          <HomePage currentLang={currentLang} onNavigate={handleNavigate} />
        </div>
        <SectionMarquee text={currentLang === 'ja' ? 'サービス' : 'Services'} />
        <div id="services" className="scroll-mt-20 md:scroll-mt-16">
          <ServicesPage currentLang={currentLang} onNavigate={handleNavigate} />
        </div>
        <SectionMarquee text={currentLang === 'ja' ? 'リサーチ' : 'Research'} direction={-1} />
        <div id="portfolio" className="scroll-mt-20 md:scroll-mt-16">
          <PortfolioPage currentLang={currentLang} onNavigate={handleNavigate} />
        </div>
        <SectionMarquee text={currentLang === 'ja' ? 'お問い合わせ' : 'Contact'} />
        <div id="contact" className="scroll-mt-20 md:scroll-mt-16">
          <ContactPage currentLang={currentLang} />
        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
    </MotionConfig>
  );
}
