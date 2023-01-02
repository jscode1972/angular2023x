import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { NpmComponent } from './npm/npm.component';
import { AdminlteComponent } from './adminlte/adminlte.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HandsonComponent } from './handson/handson.component';

@NgModule({
  declarations: [
    AngularComponent,
    NpmComponent,
    AdminlteComponent,
    PrimengComponent,
    HandsonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //AngularComponent,
    //NpmComponent
  ]
})
export class DeployModule { }
