import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Data Service for tasks...
import { TaskService } from '../task.service';

import * as moment from 'moment';

// Static content as component for later use...
// Sidebar contains a disabled form as a stub for the later assignment.
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ TaskService ]
})
export class SidebarComponent implements OnInit {

  // emits events to update Canvas Component
  @Output() updateCanvas = new EventEmitter<string>();

  task:any = {};

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  // saves the task and submits to database as new task
  save(newtaskform) : void {
    this.task.date = moment(this.task.date).add(1,'m').toDate();
  	this.taskService.createTask(this.task)
  		.subscribe((task)=>{
  			location.reload();
  			newtaskform.reset();
  		});
  }
}
