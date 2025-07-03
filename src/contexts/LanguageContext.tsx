'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, CVData } from '@/types/cv';
import cvEnglish from '@/data/cv-english.json';
import cvVietnamese from '@/data/cv-vietnamese.json';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cvData: CVData;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
      setLanguage(savedLanguage);
    }
    setIsLoading(false);
  }, []);

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  // Get CV data based on current language
  const cvData: CVData = language === 'vi' ? (cvVietnamese as CVData) : (cvEnglish as CVData);

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    cvData,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
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