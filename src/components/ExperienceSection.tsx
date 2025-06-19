import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, TrendingUp, Users, Zap, Award } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { cvData, t, language } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'business_growth': return <TrendingUp className="w-4 h-4" />;
      case 'efficiency': return <Zap className="w-4 h-4" />;
      case 'user_experience': return <Users className="w-4 h-4" />;
      case 'innovation': return <Award className="w-4 h-4" />;
      case 'recognition': return <Award className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'business_growth': return 'text-green-600 bg-green-50';
      case 'efficiency': return 'text-blue-600 bg-blue-50';
      case 'user_experience': return 'text-purple-600 bg-purple-50';
      case 'innovation': return 'text-orange-600 bg-orange-50';
      case 'recognition': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('nav.experience')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'vi' 
              ? 'Hành trình phát triển chuyên môn với những thành tựu và đóng góp cụ thể'
              : 'Professional development journey with specific achievements and contributions'
            }
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {cvData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-6 hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                      {exp.isCurrentJob && (
                        <span className="tag-accent text-xs animate-pulse">
                          {t('label.current')}
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-1">{exp.company}</p>
                    {exp.department && (
                      <p className="text-gray-600 text-sm">{exp.department}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                    <span className="tag-primary">{exp.period}</span>
                  </div>
                </div>
                
                {/* Summary */}
                <p className="text-gray-700 mb-6 leading-relaxed">{exp.summary}</p>
                
                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-gold" />
                      {language === 'vi' ? 'Thành tựu nổi bật' : 'Key Achievements'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          className="bg-white rounded-lg p-4 border border-gray-100 hover:border-primary/20 transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${getImpactColor(achievement.impact)}`}>
                              {getImpactIcon(achievement.impact)}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800 mb-1">
                                {achievement.title}
                              </h5>
                              <p className="text-sm text-gray-600 mb-2">
                                {achievement.description}
                              </p>
                              {achievement.metrics && (
                                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                  {achievement.metrics}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Content */}
                <div className="border-t border-gray-100 pt-4">
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="flex items-center justify-between w-full text-left text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>{language === 'vi' ? 'Xem chi tiết' : 'View Details'}</span>
                    <motion.div
                      animate={{ rotate: expandedItems.has(exp.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedItems.has(exp.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedItems.has(exp.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-6">
                          {/* Responsibilities */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">
                              {language === 'vi' ? 'Trách nhiệm chính' : 'Key Responsibilities'}
                            </h5>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start space-x-2 text-sm text-gray-700"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{responsibility}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Challenges */}
                          {exp.technicalChallenges && exp.technicalChallenges.length > 0 && (
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-3">
                                {language === 'vi' ? 'Thách thức kỹ thuật' : 'Technical Challenges'}
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {exp.technicalChallenges.map((challenge, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 rounded-lg p-3 text-sm"
                                  >
                                    <span className="text-gray-700">{challenge}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technologies */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">
                              {language === 'vi' ? 'Công nghệ sử dụng' : 'Technologies Used'}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="tag-accent text-xs"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 