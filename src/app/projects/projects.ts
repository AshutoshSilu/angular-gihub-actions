import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular frontend and Node.js backend',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: '🛒',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '📋',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      technologies: ['Vue.js', 'Chart.js', 'API Integration'],
      image: '🌤️',
      github: '#',
      demo: '#'
    }
  ];
}
