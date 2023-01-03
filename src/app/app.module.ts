import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// register Handsontable's modules
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();
//
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { DirectiveModule } from './directive/directive.module';
import { WeblinkModule } from './weblink/weblink.module';
// Angular
import { ComponentModule } from './angular/components/component.module';
import { ServicesModule } from './angular/services/services.module';
// Demo
import { DemoModule } from './demo/demo.module';
// Xyz

//import { WildcardModule } from './wildcard.module';
import { WildcardRoutingModule } from './wildcard-routing.module';

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
    // Angular topics
    ComponentModule, // 子路由模組需透過主模組抓到
    DirectiveModule, // 子路由模組需透過主模組抓到
    ServicesModule,  // 子路由模組需透過主模組抓到
    // Demo
    DemoModule,
    // xyz
    
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
