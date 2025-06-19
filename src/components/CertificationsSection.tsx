import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Trophy, FileText } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const { cvData, language } = useLanguage();

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'award':
        return <Trophy className="w-5 h-5" />;
      case 'certification':
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'award':
        return {
          bg: 'bg-gradient-to-r from-yellow-400 to-orange-500',
          text: 'text-yellow-600',
          border: 'border-yellow-200',
          bgLight: 'bg-yellow-50'
        };
      case 'certification':
      default:
        return {
          bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          text: 'text-blue-600',
          border: 'border-blue-200',
          bgLight: 'bg-blue-50'
        };
    }
  };

  const getTypeLabel = (type?: string) => {
    const labels = {
      vi: {
        award: 'Giải thưởng & Cuộc thi',
        certification: 'Chứng chỉ'
      },
      en: {
        award: 'Awards & Competitions',
        certification: 'Certifications'
      }
    };
    return labels[language][type as keyof typeof labels.vi] || 'Chứng chỉ';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Group certifications by type
  const groupedCertifications = cvData.certifications.reduce((acc, cert) => {
    const type = cert.type || 'certification';
    if (!acc[type]) acc[type] = [];
    acc[type].push(cert);
    return acc;
  }, {} as Record<string, typeof cvData.certifications>);

  const typeOrder = ['award', 'certification'];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {language === 'vi' ? 'Chứng chỉ & Giải thưởng' : 'Certifications & Awards'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'vi'
              ? 'Các chứng chỉ chuyên môn, giải thưởng và thành tích nổi bật'
              : 'Professional certifications, awards, and notable achievements'
            }
          </p>
        </motion.div>

        {typeOrder.map(type => {
          const certifications = groupedCertifications[type];
          if (!certifications || certifications.length === 0) return null;
          
          const colors = getTypeColor(type);

          return (
            <motion.div
              key={type}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg mr-4 ${colors.bgLight} ${colors.border} border`}>
                  <div className={colors.text}>
                    {getTypeIcon(type)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {getTypeLabel(type)}
                  </h3>
                  <p className="text-gray-600">
                    {certifications.length} {language === 'vi' ? 'mục' : 'items'}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className={`h-1 w-20 rounded-full ${colors.bg}`}></div>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div className={`card p-6 h-full border-l-4 ${colors.border} hover:shadow-xl transition-all duration-300`}>
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-lg ${colors.bgLight} group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-2xl">
                            {cert.icon || getTypeIcon(cert.type)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 leading-tight">
                            {cert.title}
                          </h4>
                          {cert.issuer && (
                            <p className="text-secondary font-medium mt-2">
                              {cert.issuer}
                            </p>
                          )}
                          {cert.date && (
                            <div className="flex items-center mt-3">
                              <div className={`w-2 h-2 rounded-full ${colors.bg} mr-2`}></div>
                              <span className="text-sm text-gray-600">{cert.date}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Type badge */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.bgLight} ${colors.text} ${colors.border} border`}>
                          <div className="mr-1">
                            {getTypeIcon(cert.type)}
                          </div>
                          {getTypeLabel(cert.type)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection; 