import { Component } from '@angular/core';

import { topics } from 'src/app/shared';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent {
  topics = topics;
}
