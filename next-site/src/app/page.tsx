'use client';

import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ResearchSection from './components/sections/ResearchSection';
import LeadershipSection from './components/sections/LeadershipSection';
import ContentSection from './components/sections/ContentSection';
import PublicationsSection from './components/sections/PublicationsSection';
import ContactSection from './components/sections/ContactSection';
import CommentsSection from './components/sections/CommentsSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50/30 dark:from-slate-900 dark:to-slate-800">
        <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <main className="lg:col-span-3">
            <HeroSection />
            <ResearchSection />
            <LeadershipSection />
            <ContentSection />
            <PublicationsSection />
            <ContactSection />
            <CommentsSection />
          </main>

          <Sidebar />
        </div>
      </div>

        <Footer />
      </div>
    </LanguageProvider>
  );
}