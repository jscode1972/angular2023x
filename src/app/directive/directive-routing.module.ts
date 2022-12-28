import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { DirectiveComponent } from './directive.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CustAttributeComponent } from './custom-attribute/cust-attribute.component';

const routes: Routes = [
  { path: 'directive', 
    component: DirectiveComponent,   
    children: [
       { path: '', redirectTo: 'ng-for', pathMatch: 'full' }, 
       { path: 'ng-for', component: NgForComponent },
       { path: 'ng-if', component: NgIfComponent },
       { path: 'ng-component-outlet', component: NgComponentOutletComponent },
       { path: 'view-child', component: ViewChildComponent },
       { path: 'custom-attribute', component: CustAttributeComponent },
       //{ path: 'custom-structure', component: CustStructureComponent }, 
      // { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  ////{ path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
