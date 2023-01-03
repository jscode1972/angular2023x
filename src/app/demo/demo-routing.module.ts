import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' }, // 空寫在上面
  { path: 'demo', 
    component: DemoComponent,   
    children: [
      { path: '', redirectTo: 'flexbox', pathMatch: 'full' },  // 空寫在上面
      { path: 'flexbox', component: FlexboxComponent }, 
      //{ path: '**', redirectTo: '', pathMatch: 'full'  },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
