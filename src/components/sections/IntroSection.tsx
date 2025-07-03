'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';

export function IntroSection() {
  const { language, cvData } = useLanguage();

  return (
    <section id="section-0" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="/avatar.jpg"
                  alt={cvData.personal.name}
                  fill
                  className="rounded-full object-cover shadow-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {cvData.personal.name}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                {cvData.personal.title}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
                {cvData.summary}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(`mailto:${cvData.personal.email}`, '_blank')}
                  className="w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {language === 'en' ? 'Contact Me' : 'Liên hệ'}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(`https://${cvData.personal.linkedin}`, '_blank')}
                  className="w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </Button>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center justify-center md:justify-start text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{cvData.personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 