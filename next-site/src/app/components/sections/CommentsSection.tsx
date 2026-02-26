'use client';

import { useEffect } from 'react';

export default function CommentsSection() {
  useEffect(() => {
    const loadGiscus = () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'junweizhang23/junweizhang23.github.io');
        script.setAttribute('data-repo-id', 'R_kgDOL0PDHg');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOL0PDHs4C0gva');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const container = document.getElementById('giscus-container');
        if (container && !container.querySelector('script[src="https://giscus.app/client.js"]')) {
          container.appendChild(script);
        }
      } catch (error) {
        console.log('Giscus setup error:', error);
      }
    };

    const timer = setTimeout(loadGiscus, 1000);
    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Discussions
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-lg mx-auto">
        Join the conversation about research, collaborations, and academic topics.
      </p>

      <div className="rounded-apple-lg border bg-apple-bg-tertiary p-6" style={{ borderColor: 'var(--color-border)' }}>
        <div id="giscus-container" className="min-h-[200px]">
          <div className="text-center text-apple-text-placeholder py-8">
            <div className="animate-pulse text-body">Loading discussions...</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-separator)' }}>
          <p className="text-footnote text-apple-text-placeholder text-center">
            Powered by GitHub Discussions. A GitHub account is required to participate.
          </p>
        </div>
      </div>
    </section>
  );
}
