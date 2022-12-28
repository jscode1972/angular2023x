import { Component } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  //styleUrls: ['./ng-for.component.css']
  styles: []
})
export class NgForComponent {
  tasks: Task[] = [
    new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
    new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
    new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
    new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  ];

  trackByItems(index: number, task: Task): string {
    return task.TaskSn;
  }

  onReset(): void {
    this.tasks = [
      new Task({ TaskSn: '001', TaskName: '待辦事項 甲', State: 'None' }),
      new Task({ TaskSn: '002', TaskName: '待辦事項 乙', State: 'Doing' }),
      new Task({ TaskSn: '004', TaskName: '待辦事項 丙', State: 'None' }),
      new Task({ TaskSn: '005', TaskName: '待辦事項 丁', State: 'Finish' }),
    ];
  }  
}
