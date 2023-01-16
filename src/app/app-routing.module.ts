import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { WeblinkComponent } from './weblink/weblink.component';

const routes: Routes = [
  { path: 'weblink', component: WeblinkComponent },   // 網路連結
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
