import { Component, OnInit, ViewChild } from '@angular/core';
import { CustButtonStyleDirective } from './cust-button/cust-button-style.directive';
import { CustLimitDirective } from './cust-limit/cust-limit.directive';

@Component({
  selector: 'app-cust-attribute',
  template: `
<div>
  參考網址: 
  <a target="_blank" href="https://stackblitz.com/edit/ng-book-attribute-directive-style"> directive-style </a> /
  <a target="_blank" href="https://stackblitz.com/edit/ng-book-directive-export-as"> directive-export-as </a> /
  <a target="_blank" href="https://stackblitz.com/edit/ng-book-attribute-directive-confirm"> directive-confirm </a> <br/>
</div>
  <hr/>

  <button type="button">一般按鈕</button>
  <button type="button" (click)="onClick('red')" #button="customButtonStyle" appCustButtonStyle > 已套用變大 (變紅色) </button>
  <button type="button" appCustButtonConfirm="是否確認?" (confirm)="onConfirm()">按下確認</button>

  <ng-container [appCustLimit]="userLimit">
  <span>目前的權限：{{ userLimit }}</span>
  <div class="item" *appCustLimitCase="'user'">這個區塊只有使用者看得到</div>
  <div class="item" *appCustLimitCase="'admin'">這個區塊只有管理員看得到</div>
  <div class="item">這個區塊全部使用者都看得到</div>
  </ng-container>
  `,
  styles: ['p { font-family: Lato; }',
           'button { margin-right: 20px; }'
  ]
})
export class CustAttributeComponent implements OnInit {

    // userLimit = 'admin';
    userLimit = 'user';

  @ViewChild('button', { static: true }) button !: CustButtonStyleDirective; 

  ngOnInit(): void {
    //this.button.changeColor('red');
  }
  
  onClick(color : string) {
    this.button.changeColor(color);
  }

  onConfirm(): void {
    alert('確定');
  }
}
