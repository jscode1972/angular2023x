import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';

const routes: Routes = [
  { path: 'component', 
    component: ComponentComponent,   
    children: [
     //{ path: '', redirectTo: 'ng-for', pathMatch: 'full' }, 
     //{ path: 'custom-structure', component: CustStructureComponent }, 
     //{ path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  ////{ path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
