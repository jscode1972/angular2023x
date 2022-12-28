import { Component, OnInit, Type } from '@angular/core';
import { NgComponentAComponent } from './children/ng-component-a.component';
import { NgComponentBComponent } from './children/ng-component-b.component';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css']
})
export class NgComponentOutletComponent implements OnInit {
  component!: Type<any>;

  ngOnInit(): void {
    this.onSwitch('a');
  }

  onSwitch(type: string) {
    switch (type) {
      case 'a':
        this.component = NgComponentAComponent;
        break;
      case 'b':
        this.component = NgComponentBComponent;
        break;
    }
  }
}
