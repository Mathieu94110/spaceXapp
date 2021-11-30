import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchesPage } from './launches.page';
import { LaunchesPageRoutingModule } from './launches-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LaunchesPageRoutingModule],
  declarations: [LaunchesPage],
  exports: [RouterModule],
})
export class LaunchesPageModule {}
