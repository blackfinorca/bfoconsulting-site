/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, PageTab } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { Language } from './data/content';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const handleNavigate = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  return (
    <div className="min-h-screen bg-luster text-royal-deep flex flex-col font-sans selection:bg-habanero selection:text-white">
      {/* Top Floating Page Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleNavigate}
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomePage currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {activeTab === 'services' && (
          <ServicesPage currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {activeTab === 'portfolio' && (
          <PortfolioPage currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {activeTab === 'contact' && (
          <ContactPage currentLang={currentLang} />
        )}
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
