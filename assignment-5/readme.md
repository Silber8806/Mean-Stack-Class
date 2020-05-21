# Assignment #5 - REST APIs

# TA - How to run test?

Go to /tests folder.  Open test.html with your browser (it is not accessible by url).  It should produce a webpage with a user form in it.  There is a button called: test apis.

Click the test apis

This runs the tests.  You can go to the browsers console and it should show the 
tests running.

You can run these locally or against my website.  Just go to the test.js file located in /tests/js and comment out one of 2 baseURL variables within the function testAPIs function.  One points to a localhost and the other to the actual server.  Localhost, you'll have to start the service on your computer, but the other one should be up and running.

Test both and got the following results on my computer, check out files:

/tests/2020-04-10-test-localhost.txt (localhost:8080)

/tests/2020-04-10-test-server-main.txt (actual server used)

# Project Requirements

This assignment is designed to let you demonstrate your knowledge of building a REST API.

For this assignment there's no starter code provided, though you may expand on the application you started to build in Assignment #4, or begin something new. In that assignment, we asked you to think about the kind of Web application you'd like to build:

Think about a transactional website (which may grow into your final project). A good candidate is a site that contains a directory of some kind of resources (e.g. travel destinations, restaurants, photos, products for sale, astronomical bodies, blog posts, to-do list items -- whatever you like). For this assignment, you'll build a general express framework to support your website (more details below).

In Assignment #4 you created the handling for CRUD operations on your data - creating, reading, updating and deleting them - using Web forms and links.

For this assignment, you'll build on the work you've done (or, you can start over with a fresh project if you like) to provide REST API services that support CRUD operations for your data.

To get started, visit this project in Github Classroom (Links to an external site.) to initialize a new github repo for your project.
Clone the repo to your own development environment and use it for your work
You'll provide your own express application with the following characteristics from Assignment #4:

# Structure

A startup file located at bin/www as shown in the course

A package.json that contains:

all project dependencies

a start script for production (npm start)

a start script for development that uses nodemon and the debugger

.gitignore listing node_modules (you may have other entries in .gitignore as well, but node_modules must be present)
Directories (folders) in the project to include /views, /routes, /models. You may add other directories to contain other application logic or services.

Be sure your project doesn't include any generated JS or template files that your project does not use.

Your code should adhere to the Coding Standards and Style for the course

# Functionality

Your application should provide an REST interface that lets user(s) manage information stored in the database. The information can be whatever is relevant to your site - information about people, pictures, sports teams, universities, blog posts, or whatever you've chosen as the purpose of your project. Your application should support being able to retrieve a resource(s), create a new resource, update existing ones, and delete them (all four CRUD operations).

Your application must provide a REST API for all four CRUD operations for managing your data. It may provide an HTML interface as well - there's no need to remove it from your application. Just be sure that all four CRUD operations can be done via the REST API. 
Your application should not use GET requests to do Update or Delete operations.   

Database access should be provided by a service class that can provide services to both the REST API and Web/HTML routes. In other words, don't have mongoose methods such as find() and save() repeated in multiple different router js files.

Your REST API should respond appropriately to preflights, and all responses should have the correct mimetype and CORS headers set. Be sure to test your API from client-side code in the browser. 

Your application must use MongoDB (Atlas is recommended) to store data. Using Mongoose is recommended.

You should provide a working client-side test file that demonstrates that all the APIs are working. Be sure to document how to run the test so that your grading TA can run it. We provide a sample in the course github repo, and walk though it in Video 9.5.

# Submission

You should check your code into the project on github, and deploy and run your code on DO

Your submission to Canvas should include the URLs to your app running on DO and your github repo.

If your application requires explanation, provide this in the project's readme.md file.
Original Work

Remember to adhere to Harvard Extension School's academic standards, particularly with respect to plagiarism.
