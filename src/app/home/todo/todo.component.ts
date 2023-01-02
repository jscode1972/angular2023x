import { Component } from '@angular/core';

import { frameworks, topics, css } from 'src/app/shared';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  links = frameworks;
  topics = topics;
  css = css;
}
