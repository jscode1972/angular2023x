import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeblinkRoutingModule } from './weblink-routing.module';
import { WeblinkComponent } from './weblink.component';

@NgModule({
  declarations: [
    WeblinkComponent
  ],
  imports: [
    CommonModule,
    WeblinkRoutingModule
  ]
})
export class WeblinkModule { }
