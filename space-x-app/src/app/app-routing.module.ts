import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'capsules',
    loadChildren: () =>
      import('./capsules/capsules.module').then((m) => m.CapsulesPageModule),
  },
  {
    path: 'cores',
    loadChildren: () =>
      import('./cores/cores.module').then((m) => m.CoresPageModule),
  },
  {
    path: 'crew',
    loadChildren: () =>
      import('./crew/crew.module').then((m) => m.CrewPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
