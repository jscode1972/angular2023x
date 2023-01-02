import { Component } from '@angular/core';

import { frameworks } from 'src/app/shared';

@Component({
  selector: 'app-set-environment',
  templateUrl: './set-environment.component.html',
  styles: []
})
export class SetEnvironmentComponent {
  links = frameworks;
}
