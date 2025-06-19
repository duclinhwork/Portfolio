export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  status: 'completed' | 'ongoing';
  gpa?: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  description: string;
  impact: 'business_growth' | 'efficiency' | 'user_experience' | 'innovation' | 'recognition';
  metrics?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  department?: string;
  period: string;
  isCurrentJob: boolean;
  summary: string;
  achievements: Achievement[];
  responsibilities: string[];
  technicalChallenges?: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
}

export interface SkillCategory {
  category: string;
  items: (string | SkillItem)[];
}

export interface Skills {
  programming: SkillCategory;
  tools: SkillCategory;
  analytics: SkillCategory;
  soft_skills: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  type?: 'award' | 'certification' | 'competition';
  icon?: string;
}

export interface CVData {
  personal: PersonalInfo;
  education: Education[];
  experience: WorkExperience[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
  summary: string;
}

export type Language = 'vi' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  cvData: CVData;
}

export interface UIContextType {
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface Translations {
  nav: {
    experience: string;
    education: string;
    skills: string;
    projects: string;
    certifications: string;
  };
  label: {
    current: string;
    achievements: string;
  };
} 