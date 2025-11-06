import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <section class="about container">
      <h3>About Me</h3>
      <p>
        I'm a frontend developer focused on building accessible, performant web apps.
        I love TypeScript, Angular, and good developer ergonomics.
      </p>
      <p>When I'm not coding I enjoy photography and hiking.</p>
    </section>
  `,
  styles: [
    `
    .container { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
    .about h3 { margin-top: 0; }
    `
  ]
})
export class AboutComponent {}
