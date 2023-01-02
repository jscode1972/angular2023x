import { Component } from '@angular/core';

import { topics } from '../../shared';

@Component({
  selector: 'app-index-ts',
  templateUrl: './index-ts.component.html',
  styles: [
  ]
})
export class IndexTsComponent {
  topics = topics;
}
