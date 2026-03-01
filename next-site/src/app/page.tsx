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

        {/* Hero — White background */}
        <div className="bg-white">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <HeroSection />
            </div>
          </main>
        </div>

        {/* Research — Light gray background */}
        <div className="bg-[#F5F5F7]">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <ResearchSection />
            </div>
          </main>
        </div>

        {/* Leadership — White background */}
        <div className="bg-white">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <LeadershipSection />
            </div>
          </main>
        </div>

        {/* Knowledge Sharing — Light gray background */}
        <div className="bg-[#F5F5F7]">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <ContentSection />
            </div>
          </main>
        </div>

        {/* Publications — White background */}
        <div className="bg-white">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <PublicationsSection />
            </div>
          </main>
        </div>

        {/* Contact — Light gray background */}
        <div className="bg-[#F5F5F7]">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <ContactSection />
            </div>
          </main>
        </div>

        {/* Comments — White background */}
        <div className="bg-white">
          <main className="max-w-content mx-auto px-6">
            <div className="section-animate">
              <CommentsSection />
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
