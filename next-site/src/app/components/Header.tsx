'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#research', label: t('nav.research') },
    { href: '#leadership', label: t('nav.leadership') },
    { href: '#publications', label: t('nav.publications') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b" style={{ borderColor: 'var(--color-separator)' }}>
      <nav className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-base font-semibold text-apple-text-primary tracking-tight">
          {language === 'zh' ? '张俊伟' : 'Junwei Zhang'}
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-caption text-apple-text-secondary hover:text-apple-text-primary rounded-apple-sm hover:bg-apple-bg-grouped transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 ml-3 pl-3 border-l" style={{ borderColor: 'var(--color-separator)' }}>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-apple-sm text-caption font-medium transition-all duration-150 ${
                language === 'en'
                  ? 'bg-apple-text-primary text-white'
                  : 'text-apple-text-tertiary hover:text-apple-text-primary hover:bg-apple-bg-grouped'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-2.5 py-1 rounded-apple-sm text-caption font-medium transition-all duration-150 ${
                language === 'zh'
                  ? 'bg-apple-text-primary text-white'
                  : 'text-apple-text-tertiary hover:text-apple-text-primary hover:bg-apple-bg-grouped'
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
