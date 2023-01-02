import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
//
import { WeblinkComponent } from './weblink/weblink.component';

const routes: Routes = [
  //注意! home 有自己的 routing, 故以下一行拿掉 (home/contact/about)
  //{ path: '', component: HomeComponent },
  //{ path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'weblink', component: WeblinkComponent },   // 網路連結
  { path: 'demo', component: DemoComponent }
  //{ path: 'xyz', children: [
  //  { path: '', component: XyzComponent },
  //  { path: 'x1', component: X1Component },
  //  { path: 'x2', component: X2Component }
  //  { path: '**', redirectTo: '', pathMatch: 'full' },
  //] },
  //{ path: '404', component: NotfoundComponent },
  //{ path: '**', redirectTo: '404' } // 此行取消, 不然沒法使用 child-routing
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
