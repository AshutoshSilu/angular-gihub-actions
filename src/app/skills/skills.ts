import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    { name: 'Angular', icon: '🅰️', level: 90 },
    { name: 'TypeScript', icon: '📘', level: 85 },
    { name: 'JavaScript', icon: '🟨', level: 95 },
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'React', icon: '⚛️', level: 75 },
    { name: 'CSS/SCSS', icon: '🎨', level: 90 }
  ];
}
