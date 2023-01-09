import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
//import { AdminlteComponent } from './adminlte/adminlte.component';
import { AdminlteLayoutComponent } from './adminlte//adminlte-layout.component';
import { AngularComponent } from '../deploy/angular/angular.component';
import { NpmComponent } from '../deploy/npm/npm.component';
import { AdminlteComponent } from '../deploy/adminlte/adminlte.component';
import { HandsonComponent } from '../deploy/handson/handson.component';

const routes: Routes = [
  { path: 'deploy', 
    component: AdminlteLayoutComponent,   
    children: [
       { path: '', redirectTo: 'angular', pathMatch: 'full' }, 
       { path: 'angular', component: AngularComponent },
       { path: 'npm', component: NpmComponent }, 
       { path: 'adminlte', component: AdminlteComponent },
       { path: 'handson', component: HandsonComponent}
      // { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  ////{ path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
