import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'capsules',
    loadChildren: () =>
      import('./pages/capsules/capsules.module').then(
        (m) => m.CapsulesPageModule
      ),
  },
  {
    path: 'cores',
    loadChildren: () =>
      import('./pages/cores/cores.module').then((m) => m.CoresPageModule),
  },
  {
    path: 'crew',
    loadChildren: () =>
      import('./pages/crew/crew.module').then((m) => m.CrewPageModule),
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./pages/launches/launches.module').then(
        (m) => m.LaunchesPageModule
      ),
  },
  {
    path: 'launches-details',
    loadChildren: () =>
      import('./pages/launches/launches-details/launches-details.module').then(
        (m) => m.LaunchesDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
