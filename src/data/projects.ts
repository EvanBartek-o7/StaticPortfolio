import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Audio Workspace Web-app',
    description: 'A browser-based DAW that imitates the functionality of popular DAWs such as FL Studio and Ableton.',
    longDescription: 'Created a web-app that imitates the functionality of popular DAWs such as FL Studio and Ableton but in the browser, allowing users to make and store songs from scratch with a familiar tool. The app supports real time collaboration using a Yjs web server for CRDT management and syncing of data.',
    image: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Digital+Audio+Workspace',
    technologies: ['TypeScript', 'React', 'Yxjs', 'Web Audio API'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Video Game Tracker',
    description: 'A background application to track processes on the computer, limiting screen time on specified video games.',
    longDescription: 'Developed background application to track processes on the computer, limiting screen time on specified video games. Paired with a GUI that allows the user to visually see and edit processes along with the time spent on each game. Coded in Python using tkinter for the GUI, psutil for the background tracking, and SQLite3 for the database.',
    image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Video+Game+Tracker',
    technologies: ['Python', 'tkinter', 'psutil', 'SQLite3'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    category: 'desktop'
  },
  {
    id: '3',
    title: 'Fitness Tracking Web-app',
    description: 'A web-app that allows users to track their fitness by setting weekly and daily goals for eating and fitness.',
    longDescription: 'Created a web-app that allows users to track their fitness by setting weekly and daily goals for eating and fitness. The app uses Back4App along with Parse and React to provide a fast and clean user experience. Learned concepts such as REST, components, web architecture, and AI development with Cursor.',
    image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Fitness+Tracker',
    technologies: ['React', 'Back4App', 'Parse', 'REST API'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'E-Commerce Website',
    description: 'A rudimentary e-commerce website built with a group of 4 using the Django framework and SQLite database.',
    longDescription: 'Produced a rudimentary e-commerce website with a group of 4 using the Django framework and SQLite database. Learned standards such as object oriented programming and languages like Java, Python, Javascript, and Clojure.',
    image: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=E-Commerce',
    technologies: ['Django', 'Python', 'SQLite', 'JavaScript'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    category: 'web'
  },
  {
    id: '5',
    title: 'HTTP Client-Server File Management',
    description: 'A HTTP-like client-server file management application for remote transfer and manipulation of files.',
    longDescription: 'Created a HTTP-like client-server file management application that allowed for the remote transfer and manipulation of files over multiple servers and multiple clients. Coded in C and used both UDP and TCP Protocols. Overview of networking concepts including protocols, encryption, streaming, and standards like P2P vs centralized.',
    image: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=File+Management',
    technologies: ['C', 'UDP', 'TCP', 'Socket Programming', 'Networking'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    category: 'system'
  }
];

