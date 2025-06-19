import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { cvData } = useLanguage();

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

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen flex items-center">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Avatar & Personal Info */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <motion.div 
                variants={avatarVariants}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <img
                      src="/avatar.jpg"
                      alt={cvData.personal.name}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>

              {/* Name & Title */}
              <div className="flex-1 min-w-0">
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4"
                >
                  {cvData.personal.name}
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed"
                >
                  {cvData.personal.title}
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 mb-8 leading-relaxed"
                >
                  {cvData.summary}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center lg:text-left">
              Liên hệ
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <motion.a
                href={`mailto:${cvData.personal.email}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="card p-4 flex items-center space-x-3 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-800 truncate">{cvData.personal.email}</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${cvData.personal.phone}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="card p-4 flex items-center space-x-3 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600">Điện thoại</p>
                  <p className="font-medium text-gray-800">{cvData.personal.phone}</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="card p-4 flex items-center space-x-3 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600">Địa điểm</p>
                  <p className="font-medium text-gray-800">{cvData.personal.location}</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                href={`https://${cvData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="card p-4 flex items-center space-x-3 hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="font-medium text-gray-800 truncate">linkedin.com/in/duclinhwork</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-primary/50 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 