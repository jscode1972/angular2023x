import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TodoComponent } from './todo/todo.component';
import { IdeaComponent } from './idea/idea.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { VideoComponent } from './video/video.component';
import { LinksComponent } from './links/links.component';
import { ConfigComponent } from './config.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 空寫在上面
  { path: 'home', 
    component: HomeComponent,   
    children: [
      { path: '', redirectTo: 'todo', pathMatch: 'full' },  // 空寫在上面
      { path: 'todo', component: TodoComponent }, 
      { path: 'idea', component: IdeaComponent }, 
      { path: 'ui-list', component: UiListComponent }, 
      { path: 'video', component: VideoComponent }, 
      { path: 'config', component: ConfigComponent }, // 路由弄不出第三層
      { path: 'links', component: LinksComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'  },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
