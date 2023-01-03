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
import { ComponentModule } from './topics/components/component.module';
import { DirectiveModule } from './directive/directive.module';
import { WeblinkModule } from './weblink/weblink.module';

//import { WildcardModule } from './wildcard.module';
import { WildcardRoutingModule } from './wildcard-routing.module';
import { ServicesModule } from './topics/services/services.module';
import { LayoutDemoModule } from './xyz/layout-demo/layout-demo.module';

//import {ButtonModule} from 'primeng/button';
//import {AccordionModule} from 'primeng/accordion';
//import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // 系統內建模組
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // http client 必要
    // 外掛模組
    HotTableModule,
    // 保險起見, 有子路由模組 => 必須加入
    HomeModule,
    LayoutModule,    // 
    WeblinkModule,   // 子路由模組
    // topics
    ComponentModule, // 子路由模組需透過主模組抓到
    DirectiveModule, // 子路由模組需透過主模組抓到
    ServicesModule,  // 子路由模組需透過主模組抓到
    // xyz
    LayoutDemoModule,
    
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
