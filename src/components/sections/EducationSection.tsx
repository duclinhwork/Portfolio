'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Education } from '@/types/cv';

export function EducationSection() {
  const { language, cvData } = useLanguage();

  const sectionTitle = language === 'en' ? 'Education' : 'Học vấn';

  return (
    <section id="section-4" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {sectionTitle}
          </h2>

          <div className="space-y-6">
            {cvData.education.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} isLatest={index === 0} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  education: Education;
  isLatest: boolean;
  language: 'en' | 'vi';
}

function EducationCard({ education, language }: EducationCardProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-2 top-6 w-4 h-4 rounded-full border-4 ${
        education.status === 'ongoing' ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
      }`}></div>

      {/* Content */}
      <div className="ml-12">
        <Card variant="elevated" className="overflow-hidden">
          <CardContent>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {education.degree}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">
                  {education.school}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">
                  {education.period}
                </span>
                <Badge 
                  variant={education.status === 'ongoing' ? 'warning' : 'success'} 
                  size="sm"
                >
                  {education.status === 'ongoing' 
                    ? (language === 'en' ? 'Ongoing' : 'Đang học')
                    : (language === 'en' ? 'Completed' : 'Hoàn thành')
                  }
                </Badge>
              </div>
            </div>

            {/* GPA */}
            {education.gpa && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  GPA: <span className="text-blue-600 font-semibold">{education.gpa}</span>
                </span>
              </div>
            )}

            {/* Highlights */}
            {education.highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {language === 'en' ? 'Highlights' : 'Điểm nổi bật'}
                </h4>
                <div className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 