import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { FontSizeComponent } from './font-size/font-size.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  //styleUrls: ['./view-child.component.css']
  styles: []
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  
  @ViewChild(FontSizeComponent) size!: FontSizeComponent;
  @ViewChild(FontSizeComponent, { static: true })

  staticSize!: FontSizeComponent;
  display = true;
  fontSize = 12;

  ngOnInit(): void {
    console.log('AppComponent - ngOnInit - size', this.size);
    console.log('AppComponent - ngOnInit - staticSize', this.staticSize);
  }

  ngAfterViewInit(): void {
    console.log('AppComponent - ngAfterViewInit - size', this.size);
    console.log('AppComponent - ngAfterViewInit - staticSize', this.staticSize);
  }
}
