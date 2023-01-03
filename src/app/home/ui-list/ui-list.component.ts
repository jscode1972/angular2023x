import { Component, OnInit } from '@angular/core';
import { Root, Properties, WeatherService } from 'src/app/shared';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {

  //data : Root | undefined;
  prop !: Properties;

  constructor(private svc : WeatherService){ }

  ngOnInit(): void { }

  showWeather() {
    this.svc.getWearher()
      // clone the data object, using its known Config shape
      .subscribe(
        d => {
          console.log(d); 
          this.prop = d.properties;
          console.log(this.prop); 
      }
    ); 
  }
}
