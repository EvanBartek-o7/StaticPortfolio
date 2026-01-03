import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Winsupply',
    role: 'Web Developer Intern',
    startDate: '2021-06',
    endDate: 'Present',
    description: [
      'Collaborated with a team of 3 to build a full stack application from the ground up that integrated with existing enterprise systems which consolidated and analyzed data, increasing the efficiency of purchasing warehouse stock',
      'Queried and ran analysis on data using SQL from a IBM DB2 database in order to determine optimizations for stocking national distribution centers according to purchasing, inventory and sales',
      'Updated, created , and tested endpoints for an existing enterprise Tax Compliance backend',
      'Gathered requirements from 5 local warehouses to develop an application that enabled workers to quickly update the barcode number of an item using a scanner, easing transition for an acquired company',
      'Utilized SonarCloud to refactor and maintain legacy code, improving both time and cognitive complexity',
      'Developed and maintained web-apps using Angular and Spring Boot Java under the Software Development Lifecycle',
      'Wrote unit tests for front-end using Jest and back-end using Junit with Mockito, ensuring easy future development',
      'Interacted with multiple teams using git version control and Jira, following Agile workflow and enterprise standards'
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'SQL', 'IBM DB2', 'Jest', 'JUnit', 'Mockito', 'SonarCloud', 'Git', 'Jira']
  },
  {
    id: '2',
    company: 'Applied Analytics & Emerging Technology Lab (AETL)',
    role: 'Student Worker',
    startDate: '2021-09',
    endDate: '2021-12',
    description: [
      'Researched and Initiated front end development on a diagram plugin for the Odoo workspace',
      'Discussed with client to ascertain what features were needed and how to achieve the desired product'
    ],
    technologies: ['Odoo', 'Python', 'JavaScript', 'HTML', 'CSS', 'Git']
  }
];

