import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { GitComponent } from './git/git.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    GitComponent,
    FirebaseComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }
