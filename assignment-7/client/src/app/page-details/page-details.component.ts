import { Component, OnInit } from '@angular/core';

// 3 services, activatedroute to get params, taskservice for our api 
// router to re-route to angular components when needed.
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Router } from '@angular/router'

// annoying time stuffs.
import * as moment from 'moment';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css'],
  providers: [ TaskService ]
})
export class PageDetailsComponent implements OnInit {

  title = 'TaskKitty - Details';

  task:any;
  newtask:any;

  constructor(private taskService:TaskService,
  			  private route: ActivatedRoute,
          private router: Router) { }

  ngOnInit(): void {
    // get all tasks from the service... seen in providers
    this.taskService.listTasks().subscribe((tasks:any)=>{
      this.getTask();
    });
  }

  // get task for pre-filling form.
  getTask(): void{
  	const param = this.route.snapshot.paramMap.get('id');
  	this.taskService.getTask(param)
  		.subscribe((task) => {
  			this.task = task;
        this.task.date = moment(this.task.dueAt).format("YYYY-MM-DD")
  			this.title = this.task.name;
  		});
  }

  // powers the create button, clones task...
  createTask():void{
    this.newtask = {};
    this.newtask.name = this.task.name;
    this.newtask.description = this.task.description;
    this.newtask.date = moment(this.task.date).add(1, 'm').toDate();

    this.taskService.createTask(this.newtask)
      .subscribe(()=>{
        console.log("deleting...");
        this.router.navigate(['']);
    });   
  }

  // update the existing task.... update button.
  updateTask():void {
    this.task.dueAt = moment(this.task.date).add(1,'m').toDate();
    this.taskService.updateTask(this.task._id, this.task)
      .subscribe((result)=>{
        this.router.navigate(['/tasks/' + this.task._id]);
      });
  }

  // delete the current task... delete button.
  deleteTask(id) : void {
  console.log(id);
  this.taskService.deleteTask(id)
    .subscribe(()=>{
      console.log("deleting...");
      this.router.navigate(['']);
    });
  }

}
