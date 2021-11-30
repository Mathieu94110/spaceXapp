import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesDetailsPage } from './launches-details.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchesDetailsPage,
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
export class LaunchesDetailsPageRoutingModule {}
