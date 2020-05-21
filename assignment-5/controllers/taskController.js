const Task = require('../models/taskModel.js');
const ObjectId = require('mongodb').ObjectID;

class TaskService{

	static list(){
		return Task.find({})
			.sort({dueAt: 1})
			.then((tasks)=> {
				return tasks
			});
	}

	static find(id){
		return Task.findById(id)
			.then((found_task)=>{
				return found_task;
			});
	}

	static create(obj){
		var task = new Task(obj);
		return task.save();
	}

	static update(id, data){
		return Task.findById(id)
			.then((task)=>{
				task.set(data);
				task.save();
				return task;
			})
	}

	static delete(id){
		return Task.remove({_id: id})
			.then((obj)=>{
				return obj;
			});
	}
}

module.exports.TaskService = TaskService;