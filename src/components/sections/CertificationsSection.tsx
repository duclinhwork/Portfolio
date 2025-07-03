'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Certification } from '@/types/cv';

export function CertificationsSection() {
  const { language, cvData } = useLanguage();

  const sectionTitle = language === 'en' ? 'Certifications & Awards' : 'Chứng chỉ & Giải thưởng';

  return (
    <section id="section-5" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {sectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificationCardProps {
  certification: Certification;
  language: 'en' | 'vi';
}

function CertificationCard({ certification, language }: CertificationCardProps) {
  const getIcon = (iconType: string) => {
    const icons = {
      trophy: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L8.5 8.5H2l5.25 3.5L5.5 18 10 14.5 14.5 18l-1.75-6L18 8.5h-6.5L10 2z" clipRule="evenodd" />
        </svg>
      ),
      certificate: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 01-1 1H8a1 1 0 110-2h4a1 1 0 011 1zm-1 4a1 1 0 100-2H8a1 1 0 100 2h4z" clipRule="evenodd" />
        </svg>
      ),
      award: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      medal: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 2C8.343 2 7 3.343 7 5v8a8 8 0 1016 0V5c0-1.657-1.343-3-3-3H10z" clipRule="evenodd" />
        </svg>
      ),
    };

    return icons[iconType as keyof typeof icons] || icons.certificate;
  };

  return (
    <Card variant="elevated" className="h-full">
      <CardContent className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gray-50 rounded-full">
            {getIcon(certification.icon)}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {certification.title}
        </h3>

        {/* Type Badge */}
        <div className="flex justify-center mb-3">
          <Badge 
            variant={certification.type === 'award' ? 'warning' : 'default'} 
            size="sm"
          >
            {certification.type === 'award' 
              ? (language === 'en' ? 'Award' : 'Giải thưởng')
              : (language === 'en' ? 'Certification' : 'Chứng chỉ')
            }
          </Badge>
        </div>

        {/* Issuer */}
        {certification.issuer && (
          <p className="text-gray-600 text-sm mb-2 font-medium">
            {certification.issuer}
          </p>
        )}

        {/* Date */}
        {certification.date && (
          <p className="text-gray-500 text-sm">
            {certification.date}
          </p>
        )}
      </CardContent>
    </Card>
  );
} 