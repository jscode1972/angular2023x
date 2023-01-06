import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicsComponent } from './pages/topics.component';
import { RouteLinksComponent } from './route-links/route-links.component';
import { CompoLinksComponent } from './compo-links/compo-links.component';
import { OtherLinksComponent } from './other-links/other-links.component';

const routes: Routes = [
  { path: 'topics', 
    component: TopicsComponent,   
    children: [
      { path: 'compo', component: CompoLinksComponent }, 
      { path: 'route', component: RouteLinksComponent }, 
      { path: 'other', component: OtherLinksComponent }, 
      { path: '', redirectTo: 'compo', pathMatch: 'full' },  
    ]
  },
  { path: '', redirectTo: 'topics', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
