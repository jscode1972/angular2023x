import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxComponent } from './component/flex-box/flex-box.component';
import { MultiSlutComponent } from './component/multi-slut/multi-slut.component';

@NgModule({
  declarations: [
    FlexBoxComponent,
    MultiSlutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiSlutComponent
  ]
})
export class SharedModule { }
