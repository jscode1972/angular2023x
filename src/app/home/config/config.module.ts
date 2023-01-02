import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularJsonComponent } from './angular-json.component';
import { SetRoutingComponent } from './set-routing.component';
import { SetEnvironmentComponent } from './set-environment.component';
import { IndexTsComponent } from './index-ts.component';
import { CssNavComponent } from './css-nav.component';

@NgModule({
  declarations: [
    AngularJsonComponent,
    SetRoutingComponent,
    SetEnvironmentComponent,
    IndexTsComponent,
    CssNavComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    AngularJsonComponent,
    SetRoutingComponent,
    SetEnvironmentComponent,
    IndexTsComponent,
    CssNavComponent
  ]
})
export class ConfigModule { }
