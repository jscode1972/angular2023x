import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDemoComponent } from './pages/layout-demo.component';

const routes: Routes = [
  { path: 'layout-demo', 
    component: LayoutDemoComponent,   
    children: [
       //{ path: '', redirectTo: 'css', pathMatch: 'full' }, 
       //{ path: 'css', component: CssComponent },
      // { path: '**', component:  CssComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutDemoRoutingModule { }
