import { Component, OnInit } from '@angular/core';

// new task sevice to be injected here...
import { TaskService } from '../task.service';

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
    // get all tasks from the service... seen in providers
    this.taskList = this.taskService.listTasks();
  }
}
