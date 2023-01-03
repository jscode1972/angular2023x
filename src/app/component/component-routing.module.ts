import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';

const routes: Routes = [
  { path: 'component', 
    component: ComponentComponent,   
    children: [
     //{ path: '', redirectTo: 'next', pathMatch: 'full' }, 
     //{ path: 'next', component: NextComponent }, 
     //{ path: '**', redirectTo: component: OopsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
