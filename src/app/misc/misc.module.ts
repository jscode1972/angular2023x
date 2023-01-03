import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GitComponent } from './git/git.component';
import { FirebaseComponent } from './firebase/firebase.component';


@NgModule({
  declarations: [
    RxjsComponent,
    GitComponent,
    FirebaseComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule
  ]
})
export class MiscModule { }
