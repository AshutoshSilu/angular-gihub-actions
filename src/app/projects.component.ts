import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from './projects.data';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
    <section class="container projects">
      <h3>Projects</h3>
      <ul>
        <li *ngFor="let p of projects">
          <h4>{{ p.title }}</h4>
          <p>{{ p.description }}</p>
          <a *ngIf="p.link" [href]="p.link" target="_blank" rel="noopener">View</a>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
    .container { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
    .projects ul { list-style: none; padding: 0; }
    .projects li { border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 6px; }
    .projects h4 { margin: 0 0 0.25rem 0; }
    `
  ]
})
export class ProjectsComponent {
  projects = projects;
}
