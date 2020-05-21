var express = require('express');
var router = express.Router();

var task_cnt = 0;
var task_info = [];

// home page
router.get('/',(req,res)=> {
	res.render('home',{ "task_info": task_info});
});

// alias to home page
router.get('/tasks',(req,res)=> {
	res.render('home', {"task_info": task_info});
});

// look at specific task
router.get('/tasks/:taskid',(req,res)=> {
	let current_task = task_info.filter((t) => t.id == req.params.taskid)[0]
	if (current_task) {
		res.render('task', {"task": current_task});
	} else {
		res.render('404');
	}
});

// create a new task
router.post('/new-task',(req,res)=> {
	task_cnt++;
	let new_task = {
		"id" : task_cnt,
		"name" : req.body.name,
		"description": req.body.description,
		"date" : req.body.date,};
	task_info.push(new_task);
	res.redirect('/tasks');
});

module.exports = router;