import { Component } from '@angular/core';

import { Root, Properties, WeatherService } from './shared';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    //data : Root | undefined;
    prop !: Properties;
    constructor(private svc : WeatherService){ }

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
