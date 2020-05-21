# Assignment #4 - Express Routing, MongoDB, and Mongoose

## Summary of Work:

This is a very basic todo list application.  Doesn't have many features.  Basic idea is you can use the left toolbar to add a task: name, description and due date.
It adds it to a table in the middle with a hyperlink for the name redirecting to a second form.  The second form just provides more details (nothing else).  You
can delete tasks on the main page / or on the detail page.  you can update a task on the detail page.  There is also a create button on the detail page in case
you want to duplicate the task.  I added flask-connect so that all the operations have messages.  Failures for the delete, create and update are also present.

The app itself isn't too fancy and hopefully is easy to use.

## Assignment Info:

Actual documented request (assignment details):

This assignment is designed to exercise your knowledge of Express, MongoDB and Mongoose.

For this assignment there's no starter code provided, though you may expand on the application you started to build in Assignment #3, or begin something new. In that assignment, we asked you to think about the kind of Web application you'd like to build:

Think about a transactional website (which may grow into your final project). A good candidate is a site that contains a directory of some kind of resources (e.g. travel destinations, restaurants, photos, products for sale, astronomical bodies, blog posts, to-do list items -- whatever you like). For this assignment, you'll build a general express framework to support your website (more details below).

For whatever your application does, we'll expand on that start by adding handling for CRUD operations on your data - creating, reading, updating and deleting them - using Web forms or links in your application.

We're specifically not requiring the use of REST APIs for these operations - simple FORMs POSTing to or links GETting Express routes is sufficient. We'll be covering REST APIs in the next part of the course.

To get started, visit this Github Classroom link (Links to an external site.) to initialize a new github repo for your project.
Clone the repo to your own development environment and use it for your work
You'll provide your own express application with the following characteristics (many are similar to Assignment #3):

Structure

A startup file located at bin/www as shown in the course
A package.json that contains:
all project dependencies
a start script for production (npm start)
a start script for development that uses nodemon and the debugger
.gitignore listing node_modules (you may have other entries in .gitignore as well, but node_modules must be present)

Directories (folders) in the project to include /views, /routes, /models.
Your routes must be based on route paths (Links to an external site.), as shown in the course examples.

Your program must use a template engine to generate its dynamic HTML pages - you can use Pug/Jade, EJS, Handlebars, or any other express template you choose. You may have static HTML files as well if you wish, but your application should use some dynamically-assembled pages that use templates.

You may use Express Generator to help get your project started. You must clean it up by removing any generated JS or template files that your project does not use.
Your code should adhere to the Coding Standards and Style for the course
Functionality

Your application should provide an HTML user interface that lets user(s) manage information stored in the database. The information can be whatever is relevant to your site - information about people, pictures, sports teams, universities, blog posts, or whatever you've chosen as the purpose of your project.

Your site user should be able to list resources, create a new resource, update existing ones, and delete them. (Whatever that looks like in the context of your application. In other words, your "list" might appear as an image gallery, or a directory of people.)  All four CRUD operations must be supported.

Your application must use MongoDB (Atlas is recommended) to store data.
You must use mongoose, with at least one Schema.

There is no specific number of forms or pages your application should have (though it must use at least one HTML form). Otherwise, use whatever makes sense for your app's purpose.
Your project may contain client-side javascript if you like, but the logic of collecting and displaying your form data should be implemented with server-side code.
A beautiful visual design is not a requirement for this assignment, but your application should have a clear, easy-to-use interface.

Submission

You should check your code into the project on github, and deploy and run your code on DO
Your submission to Canvas should include the URLs to your app running on DO and your github repo.

If your application requires explanation, provide this in the project's readme.md file.
Original Work
