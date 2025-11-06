import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <section class="hero">
      <h2>Hi — I'm Jane Developer</h2>
      <p class="lead">I build delightful web experiences using Angular and modern web tech.</p>
      <p>
        <a routerLink="/projects" class="btn">See my projects</a>
        <a routerLink="/about" class="btn ghost">About me</a>
      </p>
    </section>
  `,
  styles: [
    `
    .hero { text-align: center; padding: 3rem 1rem; }
    .hero h2 { font-size: 2rem; margin: 0 0 0.5rem 0; }
    .lead { color: #444; margin-bottom: 1rem; }
    .btn { background: linear-gradient(90deg,#ff6a00,#c026d3); color: white; padding: 0.6rem 1rem; border-radius: 6px; text-decoration: none; }
    .btn.ghost { background: transparent; color: #333; border: 1px solid #ddd; margin-left: 0.5rem; }
    `
  ]
})
export class HomeComponent {}
