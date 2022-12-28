import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
//
import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { TaskComponent } from './task/task.component';
//
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
//
import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';
import { NgComponentBComponent } from './ng-component-outlet/children/ng-component-b.component';
import { NgComponentAComponent } from './ng-component-outlet/children/ng-component-a.component';
// @ViewChild
import { ViewChildComponent } from './view-child/view-child.component';
import { FontSizeComponent } from './view-child/font-size/font-size.component';
// <button appCustButton>
import { CustAttributeComponent } from './custom-attribute/cust-attribute.component';
import { CustButtonDirective } from './custom-attribute/cust-button/cust-button.directive';

@NgModule({
  declarations: [
    DirectiveComponent,
    TaskComponent,
    //
    NgForComponent,  // *ngFor
    NgIfComponent,   // *ngIf
    NgComponentOutletComponent, NgComponentAComponent, NgComponentBComponent, // *ngComponentOutlet
    ViewChildComponent, FontSizeComponent, CustButtonDirective, CustAttributeComponent, // @ViewChild
    //<button appCustButton>
  ],
  imports: [
    BrowserModule,
    CommonModule,
    //
    DirectiveRoutingModule,
  ]
})
export class DirectiveModule { }
