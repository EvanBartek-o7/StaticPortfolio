export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'other';
  proficiency?: 'beginner' | 'intermediate' | 'advanced';
}

