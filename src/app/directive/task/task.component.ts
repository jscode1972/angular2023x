import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  //templateUrl: './task.component.html',
  template: `
  <span>{{ task.TaskName }}</span>
  <div [ngSwitch]="task.State">
    <span *ngSwitchCase="'Doing'">進行中</span>
    <span *ngSwitchCase="'Finish'">已完成</span>
    <span *ngSwitchDefault>未安排</span>
  </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
}

