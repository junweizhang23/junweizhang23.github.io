'use client';

import { useEffect } from 'react';

export default function CommentsSection() {
  useEffect(() => {
    // Load Giscus script
    // To get the correct repo-id and category-id:
    // 1. Visit https://giscus.app
    // 2. Enter your repository: junweizhang23/junweizhang23.github.io
    // 3. Select category (usually "General" or "Announcements")
    // 4. Copy the repo-id and category-id from the generated script
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
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const commentsContainer = document.getElementById('giscus-container');
        if (commentsContainer && !commentsContainer.querySelector('script[src="https://giscus.app/client.js"]')) {
          commentsContainer.appendChild(script);
        }
      } catch (error) {
        console.log('Giscus setup error:', error);
      }
    };

    // Delay loading to ensure DOM is ready
    const timer = setTimeout(loadGiscus, 1000);

    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="mt-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Academic Discussions
      </h3>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
          Join the conversation about research, collaborations, and academic topics.
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Start a Discussion About:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                Smart Glass Technology
              </span>
              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                Multi-Modal AI Systems
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                IEEE Research
              </span>
              <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                Academic Collaborations
              </span>
              <span className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">
                AR/VR Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Giscus Comments Container */}
        <div id="giscus-container" className="min-h-[200px]">
          <div className="text-center text-slate-500 dark:text-slate-400 py-8">
            <div className="animate-pulse">Loading discussions...</div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Comments are powered by GitHub Discussions. You&apos;ll need a GitHub account to participate.
          </p>
        </div>
      </div>
    </section>
  );
}