import { Injectable } from '@angular/core';

// Imported moments for data formatting...
import * as moment from 'moment';

// Provides access to tasks for other services
@Injectable()
export class TaskService {

	// Actual task list...replace with database later...
	taskList = [	
		{
			name:"Party Time!  TGIF!",
			description:"Party!",
			dueAt:moment(1585267200000).format("YYYY-MM-DD")
		},
		{
			name:"Sleeping it off...",
			description:"zzzZZZzzz",
			dueAt:moment(1586908800000).format("YYYY-MM-DD")
		},
		{
			name:"Enjoy Coffee and read!",
			description:"Have a chill day!",
			dueAt:moment(1586390400000).format("YYYY-MM-DD")
		},
		{
			name:"Monday!  Again!",
			description:"Weekend over too quickly!",
			dueAt:moment(1585526400000).format("YYYY-MM-DD")
		},
		{
			name:"get groceries",
			description:"need to get out",
			dueAt:moment(1586649600000).format("YYYY-MM-DD")
		},
		{
			name:"Test on screen",
			description:"Testing 1234 before api",
			dueAt:moment(1586390400000).format("YYYY-MM-DD")
		},
		{
			name:"Trial",
			description:"Another Try",
			dueAt:moment(1586476800000).format("YYYY-MM-DD")
		}
	];

	constructor() { }

	// list all tasks...
	listTasks(){
		return this.taskList;
	}
}
