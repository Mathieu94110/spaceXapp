import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapsulesPageRoutingModule } from './capsules-routing.module';

import { CapsulesPage } from './capsules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapsulesPageRoutingModule
  ],
  declarations: [CapsulesPage]
})
export class CapsulesPageModule {}
