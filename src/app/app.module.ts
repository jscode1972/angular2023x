import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
// register Handsontable's modules
registerAllModules();
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';
import { WeblinkModule } from './weblink/weblink.module';
import { HtmlModule } from './html/html.module';

//import { WildcardModule } from './wildcard.module';
import { WildcardRoutingModule } from './wildcard-routing.module';
import { ServicesModule } from './topics/services/services.module';

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
    HttpClientModule,
    //
    HotTableModule,
    // 保險起見, 有子路由模組 => 必須加入
    HomeModule,
    LayoutModule,    // 子路由模組
    ComponentModule, // 子路由模組
    DirectiveModule, // 子路由模組
    WeblinkModule,   // 子路由模組
    HtmlModule,
    ServicesModule,
    
    // wildcard 保持最後一個
    WildcardRoutingModule,

    //ButtonModule,
    //AccordionModule,
    //SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
