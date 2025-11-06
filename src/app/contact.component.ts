import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
    <section class="container contact">
      <h3>Contact</h3>
      <p>If you'd like to get in touch, send an email to <a href="mailto:hello@example.com">hello@example.com</a></p>
    </section>
  `,
  styles: [
    `
    .container { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
    `
  ]
})
export class ContactComponent {}
