import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    role: 'Senior Frontend Developer',
    startDate: '2022-01',
    endDate: 'Present',
    description: [
      'Led development of customer-facing web applications using React and TypeScript',
      'Improved application performance by 40% through code optimization and lazy loading',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with design and backend teams to deliver high-quality features'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Jest']
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Developed and maintained full-stack web applications',
      'Built RESTful APIs using Node.js and Express',
      'Implemented responsive UI components with React',
      'Worked in an agile environment with weekly sprints'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript']
  },
  {
    id: '3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    startDate: '2019-03',
    endDate: '2020-05',
    description: [
      'Created responsive websites for various clients',
      'Transformed design mockups into functional web applications',
      'Optimized websites for performance and SEO',
      'Collaborated with designers and project managers'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress']
  }
];

