import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { cvData, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white section-padding py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{cvData.personal.name}</h3>
            <p className="text-white/80 mb-4">{cvData.personal.title}</p>
            <p className="text-white/70 text-sm leading-relaxed">{cvData.summary}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">
              {language === 'vi' ? 'Liên hệ' : 'Contact'}
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`mailto:${cvData.personal.email}`}
                className="block text-white/80 hover:text-white transition-colors hover:underline"
              >
                📧 {cvData.personal.email}
              </a>
              <a 
                href={`tel:${cvData.personal.phone}`}
                className="block text-white/80 hover:text-white transition-colors hover:underline"
              >
                📱 {cvData.personal.phone}
              </a>
              <a 
                href={`https://${cvData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-colors hover:underline"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {cvData.personal.name}. {language === 'vi' ? 'Bản quyền thuộc về tác giả.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 