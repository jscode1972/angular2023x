import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { RepoComponent } from './pages/repo.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyDirective } from './zippy/zippy.directive';


@NgModule({
  declarations: [
    RepoComponent,
    ZippyComponent,
    ZippyDirective,
  ],
  imports: [
    CommonModule,
    RepoRoutingModule
  ]
})
export class RepoModule { }
