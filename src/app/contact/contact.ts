import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactInfo = [
    { icon: '📧', label: 'Email', value: 'ashutosh7004@gmail.com', link: 'mailto:ashutosh7004@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 (993) 7988895', link: 'tel:+919937988895' },
    { icon: '📍', label: 'Location', value: 'New York, NY', link: '#' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/ashutosh', link: 'https://linkedin.com/in/ashutosh.raula' }
  ];
}
