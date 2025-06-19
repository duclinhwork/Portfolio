import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageContextType, CVData } from '../data/types';
import cvVietnamese from '../data/cv-vietnamese.json';
import cvEnglish from '../data/cv-english.json';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [cvData, setCvData] = useState<CVData>(cvEnglish as CVData);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('cv-language') as Language;
    if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update CV data when language changes
    setCvData(language === 'vi' ? (cvVietnamese as CVData) : (cvEnglish as CVData));
    localStorage.setItem('cv-language', language);
  }, [language]);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  // Simple translation function for UI elements
  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      vi: {
        'nav.home': 'Trang chủ',
        'nav.about': 'Về tôi',
        'nav.experience': 'Kinh nghiệm',
        'nav.education': 'Học vấn',
        'nav.skills': 'Kỹ năng',
        'nav.projects': 'Dự án',
        'nav.certifications': 'Chứng chỉ',
        'nav.contact': 'Liên hệ',
        'button.readMore': 'Xem thêm',
        'button.readLess': 'Thu gọn',
        'button.viewProject': 'Xem dự án',
        'label.technologies': 'Công nghệ',
        'label.achievements': 'Thành tựu',
        'label.responsibilities': 'Trách nhiệm',
        'label.period': 'Thời gian',
        'label.company': 'Công ty',
        'label.position': 'Vị trí',
        'label.current': 'Hiện tại',
        'status.loading': 'Đang tải...',
        'status.error': 'Có lỗi xảy ra',
      },
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certifications': 'Certifications',
        'nav.contact': 'Contact',
        'button.readMore': 'Read More',
        'button.readLess': 'Read Less',
        'button.viewProject': 'View Project',
        'label.technologies': 'Technologies',
        'label.achievements': 'Achievements',
        'label.responsibilities': 'Responsibilities',
        'label.period': 'Period',
        'label.company': 'Company',
        'label.position': 'Position',
        'label.current': 'Current',
        'status.loading': 'Loading...',
        'status.error': 'Something went wrong',
      },
    };

    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
    cvData,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 