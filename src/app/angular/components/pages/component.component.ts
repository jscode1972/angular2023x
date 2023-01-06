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

 // 生命週期 

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
