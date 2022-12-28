import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  //styleUrls: ['./ng-if.component.css']
  styles: []
})
export class NgIfComponent implements OnInit {
  tasks: Task[] = [];
  
  ngOnInit() {
    this.onLoad();
  }

  onLoad(): void {
    this.tasks = [
      new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
      new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
      new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
      new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
    ];
  }

  onClear(): void {
    this.tasks = [];
  }
}
