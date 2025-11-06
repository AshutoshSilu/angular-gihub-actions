export interface Project {
  title: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Angular App',
    description: 'This portfolio demo built using Angular 20 and standalone components.',
    link: '#'
  },
  {
    title: 'Open-source Widget',
    description: 'A small widget library showing component-driven design and tests.',
    link: '#'
  },
  {
    title: 'Design System',
    description: 'A lightweight design system with tokens and accessible components.',
    link: '#'
  }
];
