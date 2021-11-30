import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesPage } from './launches.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchesPage,
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./launches-details/launches-details.module').then(
  //       (m) => m.LaunchesDetailsPageModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesPageRoutingModule {}
