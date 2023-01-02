import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  constructor() {  
    //console.log('設定餐ㄎㄠ-constructor');
  }

  ngOnInit(): void {
    $('.nav-link').on('click', this.show);
    // 預設全部
    $('a .nav-link').removeClass('active').removeAttr('aria-current');
    $('.topic').attr('hidden', true);
    // 預設 A 物件 
    $('a .nav-link .A').addClass('active').attr('aria-current', 'page');
    $('.A').removeAttr('hidden');
  }

  // 增減類別/屬性/樣式範例
  show(){
    //let idx = $(this).index();
    let id = $(this).attr('id');
    console.log('show');
    // 預設全部
    $('a').removeClass('active').removeAttr('aria-current');
    $('.topic').attr('hidden', true);
    // 預設 A 物件 
    $($(this)).addClass('active').attr('aria-current', 'page');
    $('.'+id).removeAttr('hidden');
    //$('.topic .'+id).css('background-color', 'red');
  }
}
