import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EducationSection: React.FC = () => {
  const { cvData, t } = useLanguage();

  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <h2 className="section-title">{t('nav.education')}</h2>
        <div className="space-y-6">
          {cvData.education.map((edu) => (
            <div key={edu.id} className="card p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                  <span className="tag-primary">{edu.period}</span>
                  {edu.status === 'ongoing' && (
                    <span className="tag-accent">{t('label.current')}</span>
                  )}
                  {edu.gpa && (
                    <span className="tag-gold">{edu.gpa}</span>
                  )}
                </div>
              </div>
              {edu.highlights.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, index) => (
                      <span key={index} className="tag-primary text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 