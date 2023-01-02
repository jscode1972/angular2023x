import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { AdminlteComponent } from './adminlte.component';
import { AngularComponent } from '../../deploy/angular/angular.component';
import { NpmComponent } from '../../deploy/npm/npm.component';

const routes: Routes = [
  { path: 'deploy', 
    component: AdminlteComponent,   
    children: [
       { path: '', redirectTo: 'angular', pathMatch: 'full' }, 
       { path: 'angular', component: AngularComponent },
       { path: 'npm', component: NpmComponent }, 
      // { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  ////{ path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLTERoutingModule { }
