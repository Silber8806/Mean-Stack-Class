var express = require('express');
var router = express.Router();
var taskController = require('../../controllers/taskController.js');


// we only use the task service interface for MongoDB (I would never write this comment in real life...)
const TaskService = taskController.TaskService;


// Cors headers and preflights
router.use((req, res, next)=>{
  res.set({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    "Access-Control-Allow-Headers": "Content-Type, Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-type':'application/json'
  });
  if (req.method == 'OPTIONS'){
  	console.log('options request sent!');
    return res.status(200).end();
  }
  next();
});

// tasks - list
router.get('/', (req,res,next)=>{
	console.log("list request sent...")
	TaskService.list()
		.then((tasks)=>{
			console.log(`API: found images ${tasks}`);
			res.status(200);
			res.json(tasks);
		})
});

// tasks - find
router.get('/:id', (req,res,next)=>{
	console.log('find request sent...')
	TaskService.find(req.params.id)
		.then((task)=>{
			console.log(`API: found images ${task}`);
			res.status(200);
			res.json(task);
		})
		.catch((err)=>{
			res.status(404);
			res.end();
		});
});


// tasks - create
router.post('/',(req,res,next)=>{
	console.log("post request sent....")
	console.log(req.body);
	TaskService.create({
		"name" : req.body.name,
		"description": req.body.description,
		"dueAt" : req.body.date,
	})
	.then((task)=>{
		res.status(200);
		res.json(task);
	})
	.catch((err)=>{
		res.status(500);
		res.end();
	})
});

// tasks - update
router.put('/:id',(req,res,next)=>{
	console.log('put request sent....')
	TaskService.update(req.params.id,req.body)
		.then((updatedTask)=>{
			res.status(200);
			res.json(updatedTask);
		})
		.catch((err)=>{
			res.status(404);
			res.end();
		})
});

// tasks - delete
router.delete('/:id',(req,res,next)=>{
	console.log("delete request sent...")
	TaskService.delete(req.params.id)
		.then((deletedTask)=>{
			res.status(200);
			res.json(deletedTask);
		})
		.catch((err)=>{
			res.status(404);
			res.end();
		})
});

module.exports = router;