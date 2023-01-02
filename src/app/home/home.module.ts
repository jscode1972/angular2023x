import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { TodoComponent } from './todo/todo.component';
import { IdeaComponent } from './idea/idea.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { VideoComponent } from './video/video.component';
import { LinksComponent } from './links/links.component';
import { ConfigComponent } from './config.component';
//
import { ConfigModule } from './config/config.module';
import { LessonComponent } from './lesson/lesson.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    IdeaComponent,
    UiListComponent,
    VideoComponent,
    LinksComponent,
    ConfigComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ConfigModule
  ]
})
export class HomeModule { }
