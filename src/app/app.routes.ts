import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./history/history.component').then((m) => m.HistoryComponent)
  },
  {
    path: 'geography',
    loadComponent: () =>
      import('./geography/geography.component').then(
        (m) => m.GeographyComponent
      )
  },
  {
    path: 'production',
    loadComponent: () =>
      import('./production/production.component').then(
        (m) => m.ProductionComponent
      )
  },
  {
    path: 'grapes',
    loadComponent: () =>
      import('./grapes/grapes.component').then((m) => m.GrapesComponent)
  },
  {
    path: 'wines',
    loadComponent: () =>
      import('./wines/wines.component').then((m) => m.WinesComponent)
  },
  {
    path: 'films',
    loadComponent: () =>
      import('./films/films.component').then((m) => m.FilmsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

