'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="border-b border-stone-200/50 dark:border-slate-700 bg-stone-50/90 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {language === 'zh' ? '张俊伟' : 'Junwei Zhang'}
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.about')}
              </a>
              <a href="#leadership" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.leadership')}
              </a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.experience')}
              </a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.research')}
              </a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.publications')}
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {t('nav.contact')}
              </a>
            </div>
            <div className="flex gap-2 border-l border-slate-300 dark:border-slate-600 pl-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'zh'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}