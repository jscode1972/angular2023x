import { Component } from '@angular/core';

import { frameworks, topics } from 'src/app/shared';

@Component({
  selector: 'app-adminlte',
  templateUrl: './adminlte.component.html',
  styleUrls: ['./adminlte.component.css']
})
export class AdminlteComponent {
  links = frameworks;
  topics = topics;
}
