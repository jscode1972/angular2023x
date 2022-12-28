import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// main
import { HomeComponent } from './main/home.component';
import { NotfoundComponent } from './main/notfound.component';
// 其他
import { LayoutComponent } from './layout/layout.component';

import { WrapTemplateComponent } from './wrap/wrap-template.component';
import { WrapContentComponent } from './wrap/wrap-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },   // layout (排版)
  //{ path: 'directive', component: DirectiveComponent },   // directive (指令)
  //
  { path: 'wrap/template', component: WrapTemplateComponent },
  { path: 'wrap/content', component: WrapContentComponent },

  //{ path: 'xyz', children: [
  //  { path: '', component: XyzComponent },
  //  { path: 'x1', component: X1Component },
  //  { path: 'x2', component: X2Component }
  //  { path: '**', redirectTo: '', pathMatch: 'full' },
  //] },
  ////{ path: 'test', component: TestComponent },
  { path: '404', component: NotfoundComponent },
  //{ path: '**', redirectTo: '404' } // 此行取消, 不然沒法使用 child-routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
