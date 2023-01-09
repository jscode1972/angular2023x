import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { NpmComponent } from './npm/npm.component';
import { AdminlteComponent } from './adminlte/adminlte.component';
import { HandsonComponent } from './handson/handson.component';

@NgModule({
  declarations: [
    AngularComponent,
    NpmComponent,
    AdminlteComponent,
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
