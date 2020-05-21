import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

// Provides access to tasks for other services
@Injectable()
export class TaskService {

	private apiurl = environment.apiurl;

	constructor(private http:HttpClient) { }

	// list all tasks...
	listTasks(){
		return this.http.get(this.apiurl + 'api/tasks');
	}

	// get specific task
	getTask(id){
		return this.http.get(this.apiurl + 'api/tasks/' + id);
	}

	// update a task by id with data provided
	updateTask(id,data){
		return this.http.put(this.apiurl + 'api/tasks/' + id, data);
	}

	// create a new task with task object provided
	createTask(task){
		return this.http.post(this.apiurl + 'api/tasks/', task);
	}

	// delete task by id...
	deleteTask(id){
		return this.http.delete(this.apiurl + 'api/tasks/' + id);
	}	
}
