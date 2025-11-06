import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home.component').then(m => m.HomeComponent)
	},
	{
		path: 'about',
		loadComponent: () => import('./about.component').then(m => m.AboutComponent)
	},
	{
		path: 'projects',
		loadComponent: () => import('./projects.component').then(m => m.ProjectsComponent)
	},
	{
		path: 'contact',
		loadComponent: () => import('./contact.component').then(m => m.ContactComponent)
	},
	{ path: '**', redirectTo: '' }
];
