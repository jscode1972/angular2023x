import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutDemoRoutingModule } from './layout-demo-routing.module';
import { LayoutDemoComponent } from './pages/layout-demo.component';

@NgModule({
  declarations: [
    LayoutDemoComponent
  ],
  imports: [
    CommonModule,
    LayoutDemoRoutingModule
  ]
})
export class LayoutDemoModule { }
