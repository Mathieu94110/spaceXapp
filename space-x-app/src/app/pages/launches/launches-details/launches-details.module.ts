import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchesDetailsPage } from './launches-details.page';
import { LaunchesDetailsPageRoutingModule } from './launches-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchesDetailsPageRoutingModule,
  ],
  declarations: [LaunchesDetailsPage],
})
export class LaunchesDetailsPageModule {}
