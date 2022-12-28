import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveModule } from './directive/directive.module';

//import {ButtonModule} from 'primeng/button';
//import {AccordionModule} from 'primeng/accordion';
//import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,  // 必須加入子路由模組
    //ButtonModule,
    //AccordionModule,
    //SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
