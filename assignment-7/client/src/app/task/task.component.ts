import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Task service
import { TaskService } from '../task.service';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [ TaskService ]
})
export class TaskComponent implements OnInit {

  @Input() task;
  @Output() updateCanvas = new EventEmitter<string>();

  constructor(private taskService:TaskService) { 

  }

  ngOnInit(): void {
  }

  deleteTask(id){
    // use this function to delete taks by clicking x.png
  	this.taskService.deleteTask(id)
  		.subscribe(()=>{
  			console.log("delete!");
  			this.updateCanvas.emit();
  		});
  	};
}
