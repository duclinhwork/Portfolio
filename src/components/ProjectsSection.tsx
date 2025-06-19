import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsSection: React.FC = () => {
  const { cvData, t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="section-title">{t('nav.projects')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cvData.projects.map((project) => (
            <div key={project.id} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary flex-1">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="tag-gold text-xs ml-2">Featured</span>
                )}
              </div>
              
              <p className="text-gray-700 mb-4">{project.summary}</p>
              
              <div className="space-y-3 mb-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p className="text-sm text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-primary text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.github && (
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  {t('button.viewProject')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 