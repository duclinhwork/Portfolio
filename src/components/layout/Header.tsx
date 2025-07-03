'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';

export function Header() {
  const { language, setLanguage, cvData } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const navItems = language === 'en' 
    ? ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Certifications']
    : ['Giới thiệu', 'Kinh nghiệm', 'Kỹ năng', 'Dự án', 'Học vấn', 'Chứng chỉ'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="font-bold text-xl text-gray-900">
            {cvData.personal.name}
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
          >
            <span className="text-sm font-medium">
              {language === 'en' ? 'EN' : 'VI'}
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 