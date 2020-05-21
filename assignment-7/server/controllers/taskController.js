const Task = require('../models/taskModel.js');
const ObjectId = require('mongodb').ObjectID;

// Taks data service for restful api
class TaskService{

	// list all tasks
	static list(){
		return Task.find({})
			.sort({dueAt: 1})
			.then((tasks)=> {
				return tasks
			});
	}

	// find specific task
	static find(id){
		return Task.findById(id)
			.then((found_task)=>{
				return found_task;
			});
	}

	// create task
	static create(obj){
		var task = new Task(obj);
		return task.save();
	}

	// update task
	static update(id, data){
		return Task.findById(id)
			.then((task)=>{
				task.set(data);
				task.save();
				return task;
			})
	}

	// delete teh task
	static delete(id){
		return Task.remove({_id: id})
			.then((obj)=>{
				return obj;
			});
	}
}

module.exports.TaskService = TaskService;