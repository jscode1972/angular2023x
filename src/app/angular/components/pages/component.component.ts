import { Component, OnInit } from '@angular/core';

import Handsontable from "handsontable";
import { frameworks, stackblitz } from '../../../shared';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit { 
  links = frameworks;
  blitz = stackblitz.component;
  //
  dataset : any[] = [
    {id: 1, catg: '基本繫結', name: '文件插值 (text-interpolation',   url: this.blitz.text_interpolation,   note: '動態計算: {{a*b} }'},
    {id: 2, catg: '基本繫結', name: '事件繫結 (event-binding',        url: this.blitz.event_binding,        note: '<button (click)="onSetFontSize(1)" '},
    {id: 3, catg: '基本繫結', name: '屬性繫結1(property-binding',     url: this.blitz.property_binding,     note: '<button [disabled]="fontSize===16"'},
    {id: 4, catg: '基本繫結', name: '屬性繫結2(attribute-binding',    url: this.blitz.attribute_binding,    note: '<button [attr.disabled]="fontSize === 16 ? \'disabled\':null"'},
    {id: 5, catg: '基本繫結', name: '樣式繫結 (single-style-binding', url: this.blitz.single_style_binding, note: '<p [style.fontSize.pt]="fontSize"'},
    {id: 6, catg: '基本繫結', name: '複合樣式 (mutli-style-binding',  url: this.blitz.mutli_style_binding,  note: '<p [style]="\'font-size: 12pt; color: red\'"'},
    {id: 7, catg: '基本繫結', name: '類別繫結 (class-binding 多樣式',  url: this.blitz.class_binding,        note: '<p [class]="fontClass"> (fontClass是函式,且click可以當expression?)'},
    // 巢狀互動
    {id: 8, catg: '巢狀互動', name: '@Input裝飾器 (input-property',   url: this.blitz.input_property,        note: '父注入 <子元件 [size]="fontSize" -> 子接收 @Input() prop'},
    {id: 9, catg: '巢狀互動', name: '@Input高活用 (input-setter-property', url: this.blitz.input_setter_property, note: '父注入 <子元件 size="12"..> -> 子接收 @Input() set/get => 問題:上層可以取值嗎？'},
    {id:10, catg: '巢狀互動', name: '@Attribute裝飾器 (attribute-property', url: this.blitz.attribute_property, note: '適合常數值(red) <子元件 color="red"..> -> constructor(@Attribute(\'color\') public color: string)'},
    // @Output
    {id:11, catg: '@Output', name: '通知父元件 (output-event',   url: this.blitz.output_event, note: '父注入 <子元件 (prop)="onChange($e)"> => new EventMitter()'},
    {id:12, catg: '@Output', name: '雙向繫結 (two-way-binding',  url: this.blitz.two_way_binding, note: '父注入 <子元件 [(屬性)]="值"'},
    {id:13, catg: '@Output', name: '範本參考 (template-reference-variable',  url: this.blitz.template_reference_variable, note: '父方主動取值 <app-font-size #fontSize>'},
    // 頁面範本 ng-template
    {id:14, catg: '頁面範本', name: '頁面範本 (ng-template',  url: this.blitz.ng_template, note: '重複使用 <div *ngTemplateOutlet="sample">  <ng-template #sample>'},
    {id:15, catg: '頁面範本', name: '注入資料 (ng-template-variable', url: this.blitz.ng_template_variable, note: '<父 context:{..}> <子 let-xx="xx">'},
    {id:16, catg: '頁面範本', name: '簡化設定 (ng-template-implicit', url: this.blitz.ng_template_implicit, note: '$implicit & let-xx'},
    // 動態內容投影
    {id:16, catg: '動態投影', name: '插入內容 (ng-content',      url: this.blitz.ng_content,     note: '夾層插入 inner_html'},    
    {id:16, catg: '動態投影', name: '豐富表單 (form-container',  url: this.blitz.form_container, note: '按選擇器定位插入多重區塊 (明天做元件)'},
    // 生命週期 
    {id:16, catg: '生命週期', name: '監控輸入屬性值 (changes-life', url: this.blitz.changes_life,  note: '原生變數 ngOnChanges'},
    {id:16, catg: '生命週期', name: '監控物件參考 (do-check-life',  url: this.blitz.do_check_life, note: '物件參考(reference) 只能 ngDoCheck'},
    {id:16, catg: '生命週期', name: '監控動態投影 (content-life',   url: this.blitz.content_life,  note: '子方監控 @ContentChild => 還沒研究'},
    {id:16, catg: '生命週期', name: '監控動態投影 (view-life',      url: this.blitz.view_life,     note: '父方監控 @ViewChild => 還沒研究'},
    // 封裝模式 (樣式範圍) 不太懂
    {id:16, catg: '封裝模式', name: '不封裝 (encapsulation-none',  url: this.blitz.encapsulation_none,   note: '難懂'},
    {id:16, catg: '封裝模式', name: '瀏覽器原生DOM (encapsulation-shadow-dom', url: this.blitz.encapsulation_shadow, note: '難懂'},
    {id:16, catg: '封裝模式', name: 'host-selector',              url: this.blitz.host_selector,         note: '難懂'}
  ];   
  //
  //hotSettings : Handsontable.GridSettings = {};
  hotSettings: Handsontable.GridSettings = {
    data: this.dataset,
    /*[ ['A1', 'https://handsontable.com/docs/img/examples/professional-javascript-developers-nicholas-zakas.jpg'],
        ['A2', 'https://handsontable.com/docs/img/examples/javascript-the-good-parts.jpg']
    ],
  colHeaders: true,
  rowHeaders: true, // 奇怪標題高跟資料不同
   */
  rowHeights: 12,
  height: '500px', // 'auto',
  licenseKey: 'non-commercial-and-evaluation',
  hiddenColumns: {
    // specify columns hidden by default
    columns: [2]
  },
  //
  columns: [
    {  data: "id",   title: "ID"  },
    {  data: "catg", title: "catg" },
    {  data: "name", title: "name" },
    {  data: "url",  title: "URL",
      renderer(instance, td, row, col, prop, value, cellProperties) {
        /**************************
        const img = document.createElement('img');
        img.src = value;
        img.addEventListener('mousedown', event => {
          event.preventDefault();
        });
        td.innerText = '';
        td.appendChild(img);
        *************************/
        const a = document.createElement('a');
        a.href = value;
        a.text = instance.getDataAtCell(row, col-1);;
        a.target = '_blank';
        a.addEventListener('mousedown', event => {
          event.preventDefault();
        });
        td.innerText = ''; // 必須清空
        td.appendChild(a);
        //
        return td;
      }
    },
    { data: "note", title: "說明"  },
  ]};
  
  constructor( ) {    }

  ngOnInit(){  }
}
