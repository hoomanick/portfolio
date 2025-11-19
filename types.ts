
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Research' | 'Professional' | 'Internship';
  points: string[];
}

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
  link?: string;
  type: 'Journal' | 'Conference';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Honor {
  year: string;
  title: string;
  description: string;
}
