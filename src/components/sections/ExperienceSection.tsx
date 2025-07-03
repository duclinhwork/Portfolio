'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Experience } from '@/types/cv';

export function ExperienceSection() {
  const { language, cvData } = useLanguage();

  const sectionTitle = language === 'en' ? 'Work Experience' : 'Kinh nghiệm Làm việc';

  return (
    <section id="section-1" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {sectionTitle}
          </h2>

          <div className="space-y-8">
            {cvData.experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} isLatest={index === 0} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  isLatest: boolean;
  language: 'en' | 'vi';
}

function ExperienceCard({ experience, isLatest, language }: ExperienceCardProps) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-2 top-6 w-4 h-4 rounded-full border-4 ${
        isLatest ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
      }`}></div>

      {/* Content */}
      <div className="ml-12">
        <Card variant="elevated" className="overflow-hidden">
          <CardContent>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {experience.position}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">
                  {experience.company}
                </p>
                {experience.department && (
                  <p className="text-gray-600 text-sm mb-2">
                    {experience.department}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">
                  {experience.period}
                </span>
                {experience.isCurrentJob && (
                  <Badge variant="success" size="sm">
                    {language === 'en' ? 'Current' : 'Hiện tại'}
                  </Badge>
                )}
              </div>
            </div>

            {/* Toggle Button */}
            {(experience.achievements.length > 0 || experience.responsibilities.length > 0) && (
              <div className="mb-6">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-200"
                >
                  <span className="text-sm sm:text-base">
                    {showDetails 
                      ? (language === 'en' ? 'Show Less' : 'Thu gọn')
                      : (language === 'en' ? 'View Details' : 'Xem Chi tiết')
                    }
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <svg 
                      className={`w-3 h-3 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            )}

            {/* Full Details - Show when expanded */}
            {showDetails && (
              <div className="space-y-6">
                {/* Achievements */}
                {experience.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                      {language === 'en' ? 'Key Achievements' : 'Thành tựu Nổi bật'}
                    </h4>
                    <div className="space-y-4">
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                              {achievement.title}
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Responsibilities */}
                {experience.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                      {language === 'en' ? 'Key Responsibilities' : 'Trách nhiệm Chính'}
                    </h4>
                    <div className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-1">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'Technologies Used' : 'Công nghệ Sử dụng'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 