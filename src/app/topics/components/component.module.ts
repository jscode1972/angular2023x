import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './pages/component.component';
//HotTableModule
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();

@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HotTableModule
  ]
})
export class ComponentModule { }
