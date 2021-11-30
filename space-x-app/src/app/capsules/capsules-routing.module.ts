import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapsulesPage } from './capsules.page';

const routes: Routes = [
  {
    path: '',
    component: CapsulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapsulesPageRoutingModule {}
