import { Component, OnInit } from '@angular/core';
//
import { stackblitz, frameworks } from '../shared';

declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-weblink',
  templateUrl: './weblink.component.html',
  styleUrls: ['../shared/tabs-c3school.css']
})
export class WeblinkComponent implements OnInit {
  
  links = frameworks;
  blitz = stackblitz;

  // https://www.jqueryscript.net/other/Creating-A-Vertical-Tabs-System-with-jQuery-CSS3.html

  ngOnInit(): void {
    $('.tabs nav a').on('click', this.show_tab);
  }
  // 須改寫
  show_tab() {
     let idx = $(this).index();
     $('.tabs .content.visible').removeClass('visible');
     $('.tabs .content:nth-of-type(' + (idx + 1) + ')').addClass('visible');
     // Set the tab to selected
     $('.tabs nav a.selected').removeClass('selected');
     $('.tabs nav a:nth-of-type(' + (idx + 1) + ')').addClass('selected');
  }
}
