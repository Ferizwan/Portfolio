export type Theme = 'dark' | 'light';

export interface Education {
  id: string;
  institution: string;
  location: string;
  faculty?: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Exchange' | 'Internship' | 'Full-time' | 'Contract';
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  role: string;
  date: string;
  description: string[];
  technologies: string[];
  highlights: string[];
  image: string;
  images: string[];
  demoUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level?: number; // 0-100
    icon?: string;
    description?: string;
  }[];
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  vol: string;
  date: string;
  url?: string;
  abstract?: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  gpa: string;
  university: string;
  major: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}
