import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { CssComponent } from './css/css.component';


@NgModule({
  declarations: [
    CssComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
