var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//  task schema - links to mongodb database
var schema = new Schema({
	name: {type: String, required:true},
	description: {type: String,required:true},
	dueAt: {type: Date, required: true},
	createdAt: {type: Date},
	updatedAt: {type: Date}
});

module.exports = mongoose.model("Task", schema);