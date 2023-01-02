import { Component, OnInit } from '@angular/core';

declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(){  }

  ngOnInit(): void {
    $("#tabs" ).tabs();
  }

  onShow(e : string) {
    console.log(e);
    $('div.child').attr("hidden",true);
    $(e).attr("hidden",false);
  }
}

