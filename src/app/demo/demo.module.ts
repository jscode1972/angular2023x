import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './pages/demo.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  declarations: [
    DemoComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
