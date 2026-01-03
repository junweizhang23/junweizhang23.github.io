'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.leadership': 'Leadership',
    'nav.experience': 'Experience',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'hero.title': 'Dr. Junwei Zhang',
    'hero.subtitle': 'Meta Smart Glass GenAI Engineer | IEEE Associate Editor | Stanford CS Master',
    'sidebar.visitor': 'Global Visitor Analytics',
    'sidebar.academic': 'Academic & Industry Impact',
    'sidebar.leadership': 'Academic Leadership',
    'footer.rights': 'All rights reserved.',
  },
  zh: {
    'nav.about': '关于',
    'nav.leadership': '学术领导',
    'nav.experience': '工作经历',
    'nav.research': '研究方向',
    'nav.publications': '发表论文',
    'nav.contact': '联系方式',
    'hero.title': '张俊伟 博士',
    'hero.subtitle': 'Meta智能眼镜GenAI工程师 | IEEE副编辑 | 斯坦福CS硕士',
    'sidebar.visitor': '全球访问统计',
    'sidebar.academic': '学术与产业影响',
    'sidebar.leadership': '学术领导力',
    'footer.rights': '版权所有。',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
