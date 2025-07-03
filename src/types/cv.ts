export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Achievement {
  title: string;
  description: string;
  impact: 'efficiency' | 'business_growth' | 'recognition';
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  status: 'ongoing' | 'completed';
  gpa?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  department?: string;
  period: string;
  isCurrentJob: boolean;
  achievements: Achievement[];
  responsibilities: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[] | string[];
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
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  type: 'award' | 'certification';
  icon: string;
  date?: string;
  issuer?: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
}

export type Language = 'en' | 'vi'; 