
import React from 'react';
import { Project, NavLink, Skill } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BootStore (Web Frontend)',
    description: 'A fully responsive football boots store designed with a clean interface and special attention to mobile/tablet user experience. Features scalable units (rem) and cross-browser compatibility.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/mohamedgharbyy/BootStore',
    liveUrl: 'https://mohamedgharbyy.github.io/BootStore/'
  },
  {
    id: '2',
    title: 'AetherCloud - Hackathon',
    description: 'A web application for local data storage developed during the "Nuit de l\'info" Hackathon. Built collaboratively under strict time constraints to deliver a functional team solution.',
    technologies: ['Web Development', 'Local Storage', 'Collaboration', 'Agile'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/mohamedgharbyy',
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5 & Semantic Web', level: 95, category: 'Frontend' },
  { name: 'CSS3 (Flexbox/Grid/Responsive)', level: 90, category: 'Frontend' },
  { name: 'JavaScript (Dynamic UI)', level: 85, category: 'Frontend' },
  { name: 'MySQL (DB Design/SQL)', level: 80, category: 'Backend' },
  { name: 'Python (OOP/Classes)', level: 75, category: 'Backend' },
  { name: 'C (Algorithms/Memory)', level: 70, category: 'Backend' },
  { name: 'Cisco Packet Tracer', level: 65, category: 'Tools' },
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
];
