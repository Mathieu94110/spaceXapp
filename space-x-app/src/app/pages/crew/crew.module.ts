import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrewPageRoutingModule } from './crew-routing.module';

import { CrewPage } from './crew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrewPageRoutingModule
  ],
  declarations: [CrewPage]
})
export class CrewPageModule {}
