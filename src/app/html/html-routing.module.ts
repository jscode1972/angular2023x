import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssComponent } from './css/css.component';

const routes: Routes = [
  { path: 'html', 
    component: CssComponent,   
    children: [
       { path: '', redirectTo: 'css', pathMatch: 'full' }, 
       { path: 'css', component: CssComponent },
      // { path: '**', component:  CssComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
