import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DeployModule } from '../deploy/deploy.module';
// routing 
import { LayoutRoutingModule } from './layout-routing.module';
// adminlte
//import { AdminlteComponent } from './adminlte/adminlte.component';
import { AdminlteLayoutComponent } from './adminlte/adminlte-layout.component';
import { AdminlteHeaderComponent } from './adminlte/adminlte-header/adminlte-header.component';
import { AdminlteSidebarComponent } from './adminlte/adminlte-sidebar/adminlte-sidebar.component';
import { AdminlteContentComponent } from './adminlte/adminlte-content/adminlte-content.component';
import { AdminlteFooterComponent } from './adminlte/adminlte-footer/adminlte-footer.component';
import { AdminlteContentHeaderComponent } from './adminlte/adminlte-content/adminlte-content-header.component';
import { AdminlteContentTemplateComponent } from './adminlte/adminlte-content/adminlte-content-template.component';

@NgModule({
  declarations: [
       // adminlte
       AdminlteLayoutComponent,
       AdminlteHeaderComponent, AdminlteSidebarComponent,  AdminlteFooterComponent, 
       AdminlteContentComponent, AdminlteContentHeaderComponent, AdminlteContentTemplateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule
    //DeployModule  // 可以不用飲用
  ],
  exports: []
})
export class LayoutModule { }
