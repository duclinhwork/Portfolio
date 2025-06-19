import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Brain, Wrench, BarChart3, Cloud, Users, Code, Database, TrendingUp } from 'lucide-react';

interface SkillCategory {
  key: string;
  rank: number;
  icon: React.ReactNode;
  nameVi: string;
  nameEn: string;
  color: string;
  skills: string[];
  descriptionVi: string;
  descriptionEn: string;
}

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      key: 'data_engineering',
      rank: 1,
      icon: <Wrench className="w-6 h-6" />,
      nameVi: 'Data Engineering & ETL',
      nameEn: 'Data Engineering & ETL',
      color: 'from-blue-500 to-indigo-600',
      skills: ['SQL Server', 'BigQuery', 'Airflow', 'SSIS', 'ETL Pipeline', 'Data Catalog', 'Data Contracts'],
      descriptionVi: 'Vận hành và mở rộng các hệ thống dữ liệu quy mô lớn',
      descriptionEn: 'Building and operating large-scale data systems'
    },
    {
      key: 'analytics_viz',
      rank: 2,
      icon: <BarChart3 className="w-6 h-6" />,
      nameVi: 'Analytics & Visualization',
      nameEn: 'Analytics & Visualization',
      color: 'from-green-500 to-teal-500',
      skills: ['Power BI', 'Looker', 'Dashboard Creation', 'BI Reporting', 'A/B Testing', 'Data Wrangling'],
      descriptionVi: 'Phân tích dữ liệu và tạo báo cáo trực quan hiệu quả',
      descriptionEn: 'Data analysis and creating effective visual reports'
    },
    {
      key: 'cloud_automation',
      rank: 3,
      icon: <Cloud className="w-6 h-6" />,
      nameVi: 'Cloud & Automation',
      nameEn: 'Cloud & Automation',
      color: 'from-orange-500 to-red-500',
      skills: ['Google Cloud Storage', 'Cloud Functions', 'n8n', 'GitLab', 'Automation Tools', 'API Development'],
      descriptionVi: 'Triển khai giải pháp đám mây và tự động hóa quy trình',
      descriptionEn: 'Implementing cloud solutions and process automation'
    },
    {
      key: 'ai_ml',
      rank: 4,
      icon: <Brain className="w-6 h-6" />,
      nameVi: 'GenAI & Machine Learning',
      nameEn: 'GenAI & Machine Learning',
      color: 'from-purple-500 to-pink-500',
      skills: ['Python', 'Machine Learning', 'NLP', 'LLM', 'Prompt Engineering', 'RAG', 'Sentiment Analysis'],
      descriptionVi: 'Chuyên sâu AI/ML và ứng dụng thực tiễn',
      descriptionEn: 'Deep expertise in AI/ML with real-world applications'
    },
    {
      key: 'soft_skills',
      rank: 5,
      icon: <Users className="w-6 h-6" />,
      nameVi: 'Soft Skills',
      nameEn: 'Soft Skills',
      color: 'from-gray-500 to-gray-700',
      skills: language === 'vi' 
        ? ['Analytical Thinking', 'Problem-Solving', 'Communication', 'Presentation', 'Storytelling', 'Cross-Functional Collaboration']
        : ['Analytical Thinking', 'Problem-Solving', 'Communication', 'Presentation', 'Storytelling', 'Cross-Functional Collaboration'],
      descriptionVi: 'Kỹ năng giao tiếp & làm việc nhóm hiệu quả',
      descriptionEn: 'Effective communication and teamwork skills'
    }
  ];

  const getRankEmoji = (rank: number): string => {
    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];
    return emojis[rank - 1] || '';
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

  const categoryVariants = {
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
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {language === 'vi' ? 'Kỹ năng Chuyên môn' : 'Skills'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'vi' 
              ? 'Kỹ năng chuyên môn được sắp xếp theo thứ tự ưu tiên dựa trên tần suất ứng dụng thực tế trong công việc hàng ngày'
              : 'Skills organized by priority based on practical application frequency in daily work'
            }
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              variants={categoryVariants}
              className="group"
              onMouseEnter={() => setActiveCategory(category.key)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-primary">
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-3 mr-4">
                    <span className="text-2xl">{getRankEmoji(category.rank)}</span>
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {language === 'vi' ? category.nameVi : category.nameEn}
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({category.skills.length} {language === 'vi' ? 'kỹ năng' : 'skills'})
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {language === 'vi' ? category.descriptionVi : category.descriptionEn}
                    </p>
                  </div>
                  <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>



                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="bg-white rounded-lg p-3 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300`}></div>
                          <span className="text-sm font-medium text-gray-800 group-hover/skill:text-primary transition-colors">
                            {skill}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 