'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types/cv';

export function ProjectsSection() {
  const { language, cvData } = useLanguage();

  const sectionTitle = language === 'en' ? 'Featured Projects' : 'Dự án Nổi bật';

  return (
    <section id="section-3" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {sectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  language: 'en' | 'vi';
}

function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-900 flex-1">
            {project.title}
          </h3>
          {project.featured && (
            <Badge variant="success" size="sm">
              {language === 'en' ? 'Featured' : 'Nổi bật'}
            </Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.summary}
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
              {language === 'en' ? 'Highlights' : 'Điểm nổi bật'}
            </h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">
            {language === 'en' ? 'Technologies' : 'Công nghệ'}
          </h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.github, '_blank')}
            className="w-full"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            {language === 'en' ? 'View Code' : 'Xem Code'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 