'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function SkillsSection() {
  const { language, cvData } = useLanguage();

  const sectionTitle = language === 'en' ? 'Skills & Technologies' : 'Kỹ năng & Công nghệ';

  const skillCategories = Object.values(cvData.skills);

  return (
    <section id="section-2" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {sectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: {
    category: string;
    items: Array<{ name: string } | string>;
  };
}

function SkillCard({ category }: SkillCardProps) {
  // Helper function to get skill name
  const getSkillName = (item: { name: string } | string): string => {
    return typeof item === 'string' ? item : item.name;
  };

  // Get icon based on category
  const getCategoryIcon = (categoryName: string) => {
    const icons = {
      programming: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tools: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      analytics: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      soft_skills: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    };

    // Match category name to icon (case insensitive, handles both English and Vietnamese)
    const categoryLower = categoryName.toLowerCase();
    if (categoryLower.includes('programming') || categoryLower.includes('lập trình')) {
      return icons.programming;
    } else if (categoryLower.includes('tools') || categoryLower.includes('công cụ')) {
      return icons.tools;
    } else if (categoryLower.includes('analytics') || categoryLower.includes('phân tích')) {
      return icons.analytics;
    } else if (categoryLower.includes('soft') || categoryLower.includes('mềm')) {
      return icons.soft_skills;
    }
    
    return icons.tools; // default
  };

  return (
    <Card variant="elevated" className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          {getCategoryIcon(category.category)}
          <h3 className="font-semibold text-gray-900 text-lg">
            {category.category}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {category.items.map((item, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              size="sm"
              className="text-xs"
            >
              {getSkillName(item)}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 