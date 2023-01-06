import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './pages/topics.component';
import { RouteLinksComponent } from './route-links/route-links.component';
import { CompoLinksComponent } from './compo-links/compo-links.component';
import { OtherLinksComponent } from './other-links/other-links.component';

@NgModule({
  declarations: [
    TopicsComponent,
    RouteLinksComponent,
    CompoLinksComponent,
    OtherLinksComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    SharedModule
  ]
})
export class TopicsModule { }
