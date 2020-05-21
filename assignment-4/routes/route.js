const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID;
const flash = require('connect-flash');
const moment = require('moment');
require('dotenv').config();

// database connection info
const mongoose_connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodeclasscluster-s8nwd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const mongoose_options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

// database connection
mongoose.connect(mongoose_connection_string,mongoose_options)
	.catch((err)=>{
		console.log(err);
});
var Task = require('../models/taskModel');

// flash
router.use(flash());

// home page
router.get('/',(req,res) => {
	Task.find({})
		.sort({dueAt: 1})
		.then((tasks)=> {
			res.render('home',{"task_info": tasks, "flash_errs": req.flash("error"),"flash_info": req.flash("info")})
		})
		.catch((err)=>{
			if(err){
				res.render('404');
			}
		});
});

// alias to home page
router.get('/tasks',(req,res)=> {
	res.redirect('/');
});

// look at specific task
router.get('/tasks/:taskid',(req,res)=> {
	Task.findById(req.params.taskid)
		.then((current_task)=>{
			res.render('task',{"task": current_task, "flash_errs": req.flash("error"),"flash_info": req.flash("info")});
		})
		.catch((err)=>{
			if(err){
				console.log(err);
				res.render('404');
		}
	});
});

// create a new task
router.post('/new-task',(req,res)=> {
	let task_details = {
		"name" : req.body.name,
		"description": req.body.description,
		"dueAt" : req.body.date,
	};
	let task = new Task(task_details);
	task.save()
		.then(()=>{
			req.flash("info", "created task!");
			res.redirect('/tasks');
		})
		.catch((err)=>{
			req.flash("error", "Error while create task!");
			res.redirect('back');
		});
});

// update a task
router.post('/update-task',(req,res)=>{
	let task_details = {
		"name" : req.body.name,
		"description": req.body.description,
		"dueAt": req.body.date,
	};
	Task.findByIdAndUpdate(req.body.id,task_details,(err,post)=>{
		req.flash("info", "updated task!");
		res.redirect('/tasks/' + req.body.id);
	}).catch((err)=>{
		req.flash("error", "Error while updating task!");
		res.redirect('back');
	});
});

//delete a task
router.post('/delete-task',(req,res)=>{
	Task.deleteOne({"_id": ObjectId(req.body.id)},(err,result)=>{
		req.flash("info", "deleted task!");
		res.redirect('/tasks');
	}).catch((err)=>{
		req.flash("error", "Error while deleting task!");
		res.redirect('back');
	});;
});

// throw a 404 error pass to error function
router.use((req, res, next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//custom error handler
router.use(function(err, req, res, next){
	console.log(`error: ${err}`)
	console.log("stack trace:")
	console.error(err.stack);
	if (err.message == "Not Found") {
		res.render("404");
	} else {
		next(err);
	}
});

module.exports = router;