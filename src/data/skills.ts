import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'language', proficiency: 'advanced' },
  { name: 'TypeScript', category: 'language', proficiency: 'advanced' },
  { name: 'Python', category: 'language', proficiency: 'intermediate' },
  { name: 'HTML', category: 'language', proficiency: 'advanced' },
  { name: 'CSS', category: 'language', proficiency: 'advanced' },
  
  // Frameworks
  { name: 'React', category: 'framework', proficiency: 'advanced' },
  { name: 'Next.js', category: 'framework', proficiency: 'intermediate' },
  { name: 'Node.js', category: 'framework', proficiency: 'advanced' },
  { name: 'Express', category: 'framework', proficiency: 'advanced' },
  { name: 'Vue.js', category: 'framework', proficiency: 'intermediate' },
  
  // Tools
  { name: 'Git', category: 'tool', proficiency: 'advanced' },
  { name: 'Webpack', category: 'tool', proficiency: 'intermediate' },
  { name: 'Vite', category: 'tool', proficiency: 'advanced' },
  { name: 'Docker', category: 'tool', proficiency: 'intermediate' },
  { name: 'Jest', category: 'tool', proficiency: 'intermediate' },
  { name: 'MongoDB', category: 'tool', proficiency: 'intermediate' },
  { name: 'PostgreSQL', category: 'tool', proficiency: 'intermediate' },
  
  // Other
  { name: 'REST APIs', category: 'other', proficiency: 'advanced' },
  { name: 'GraphQL', category: 'other', proficiency: 'intermediate' },
  { name: 'AWS', category: 'other', proficiency: 'beginner' }
];

