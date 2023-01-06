import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { RepoComponent } from './pages/repo.component';

/*   children: [
      { path: '', redirectTo: 'flexbox1', pathMatch: 'full' },  // 空寫在上面
      { path: 'flexbox1', component: FlexboxComponent }, 
      //{ path: '**', redirectTo: '', pathMatch: 'full'  },
    ] */

const routes: Routes = [
  { path: 'repo', component: FlexboxComponent }, // 記得砍掉
  { path: 'repo', component: RepoComponent },
  { path: 'flex', component: FlexboxComponent },
  { path: '', redirectTo: 'flex', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
