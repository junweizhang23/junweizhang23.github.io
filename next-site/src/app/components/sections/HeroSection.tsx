'use client';

import { useState, useEffect } from 'react';

interface ScholarMetrics {
  citations: number;
  hIndex: number;
  i10Index: number;
  publications: number;
}

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [metrics, setMetrics] = useState<ScholarMetrics>({
    citations: 155, hIndex: 6, i10Index: 3, publications: 10,
  });

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const response = await fetch('/scholar-metadata.json');
        if (response.ok) {
          const data = await response.json();
          setMetrics({
            citations: data.citations || 155,
            hIndex: data.hIndex || 6,
            i10Index: data.i10Index || 3,
            publications: data.publications || 10,
          });
        }
      } catch { /* use defaults */ }
    };
    loadMetrics();
  }, []);

  return (
    <section id="about" className="py-16 md:py-22">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-apple-md bg-apple-bg-secondary">
            {!imageError ? (
              <img
                src="/junwei.jpeg"
                alt="Dr. Junwei Zhang"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-apple-text-tertiary">
                <span className="text-title-2">JZ</span>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-display md:text-[2.5rem] md:leading-tight font-bold text-apple-text-primary tracking-tight mb-3">
            Dr. Junwei Zhang
          </h1>

          <p className="text-body-lg text-apple-text-secondary mb-5 max-w-2xl">
            Smart Glass GenAI Engineer at{' '}
            <span className="font-semibold text-apple-text-primary">Meta</span>
            {' · '}IEEE T-CSVT Associate Editor{' · '}IEEE Senior Member{' · '}TGO Tech Leader
          </p>

          <p className="text-body text-apple-text-tertiary mb-6 max-w-2xl leading-relaxed">
            Ph.D. from{' '}
            <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Stony Brook University
            </a>
            . Previously at DoorDash, Microsoft Azure, and Uber. Research in smart glass technology, multi-modal AI, computational geometry, and parallel computing.
          </p>

          {/* Compact metrics row */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-center">
            <div>
              <div className="text-title-2 font-bold text-amber-600">{metrics.publications}+</div>
              <div className="text-caption text-apple-text-tertiary">Publications</div>
            </div>
            <div>
              <div className="text-title-2 font-bold text-amber-600">{metrics.citations}</div>
              <div className="text-caption text-apple-text-tertiary">Citations</div>
            </div>
            <div>
              <div className="text-title-2 font-bold text-amber-600">{metrics.hIndex}</div>
              <div className="text-caption text-apple-text-tertiary">h-index</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#publications"
              className="inline-flex items-center px-5 py-2.5 rounded-apple-lg text-body font-medium bg-apple-accent text-white hover:opacity-90 transition-opacity"
            >
              View Publications
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-apple-lg text-body font-medium border border-apple-accent text-apple-accent hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-apple-lg text-body font-medium text-apple-accent hover:bg-blue-50 transition-colors"
            >
              <i className="ai ai-google-scholar"></i>
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
