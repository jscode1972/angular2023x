import { Component, OnInit, ViewChild } from '@angular/core';
import { CustButtonDirective } from './cust-button/cust-button.directive';

@Component({
  selector: 'app-cust-attribute',
  template: `
<div>
  參考網址: 
  <a target="_blank" href="https://stackblitz.com/edit/ng-book-attribute-directive-style"> attribute-directive-style </a> /
  <a target="_blank" href="https://stackblitz.com/edit/ng-book-directive-export-as"> directive-export-as </a> 
</div>
  <hr/>
  <button type="button" (click)="onClick('red')">一般按鈕 (變紅色)</button>
  <button type="button"  
    #button="customButton" 
    appCustButton
    (click)="onClick('blue')"> 已套用變大指令 (變藍色)
  </button>
  `,
  styles: ['p { font-family: Lato; }',
           'button { margin-right: 20px; }'
  ]
})
export class CustAttributeComponent implements OnInit {

  @ViewChild('button', { static: true }) button !: CustButtonDirective; 

  ngOnInit(): void {
    //this.button.changeColor('red');
  }
  onClick(color : string) {
    this.button.changeColor(color);
  }
}
