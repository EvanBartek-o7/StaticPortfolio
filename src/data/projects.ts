import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    longDescription: 'Built with React and Node.js, featuring a complete shopping cart system, user profiles, and admin dashboard. Integrated Stripe for secure payments and includes real-time inventory management.',
    image: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'Developed using React and Firebase, allowing teams to create, assign, and track tasks. Features include drag-and-drop organization, notifications, and team chat functionality.',
    image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+Manager',
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple locations.',
    longDescription: 'Built with React and integrated with OpenWeatherMap API. Features include location search, favorite locations, and detailed weather charts. Fully responsive design.',
    image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather',
    technologies: ['React', 'TypeScript', 'CSS', 'REST API'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and experience.',
    longDescription: 'Built with React and TypeScript, featuring smooth animations, responsive design, and optimized performance. Includes project showcase, experience timeline, and contact form.',
    image: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Portfolio',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    featured: false,
    category: 'web'
  }
];

