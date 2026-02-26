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
import Footer from './components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />

        <main className="max-w-content mx-auto px-6">
          <div className="section-animate">
            <HeroSection />
          </div>
          <hr className="section-divider" />
          <div className="section-animate">
            <ResearchSection />
          </div>
          <hr className="section-divider" />
          <div className="section-animate">
            <LeadershipSection />
          </div>
          <hr className="section-divider" />
          <div className="section-animate">
            <ContentSection />
          </div>
          <hr className="section-divider" />
          <div className="section-animate">
            <PublicationsSection />
          </div>
          <hr className="section-divider" />
          <div className="section-animate">
            <ContactSection />
          </div>
          <div className="section-animate">
            <CommentsSection />
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
