import { Component, OnInit } from '@angular/core';

// new task sevice to be injected here...
import { TaskService } from '../task.service';

import * as moment from 'moment';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ TaskService ]
})
export class CanvasComponent implements OnInit {
  constructor(private taskService:TaskService) {
  }

  // default no tasks...
  taskList = null;

  ngOnInit(): void {
    this.updateTaskList();
  }

  updateTaskList():void{
    // get all tasks from the service... seen in providers
    this.taskService.listTasks().subscribe((tasks:any)=>{
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].dueAt = moment(tasks[i].dueAt).format("YYYY-MM-DD");
      }
      this.taskList = tasks;
      console.log("This fired!");
    });    
  }
}
