import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { WrapTemplateComponent } from './wrap-template.component';
import { WrapContainerComponent } from './wrap-container.component';
import { WrapContentComponent } from './wrap-content.component';

@NgModule({
  declarations: [
    WrapTemplateComponent,
    WrapContainerComponent,
    WrapContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WrapModule { }
