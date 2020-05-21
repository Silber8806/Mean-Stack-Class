# Assignment #3 - ExpressJS, Routing and Templates

The description of this assignment can be found in Canvas at [Assignment #3](https://canvas.harvard.edu/courses/54354/assignments/249112) (Spring 2019)

You should build your application in this repo cloned for you in Github Classroom. You'll submit your project and github URLs in Canvas.  

## Application Requirements:

You'll provide your own express application with the following characteristics:

Structure

A startup file located at bin/www as shown in the course

A package.json that contains:

all project dependencies

a start script for production (npm start)

a start script for development that uses nodemon and the debugger

.gitignore listing node_modules (you may have other entries in .gitignore as well, but node_modules must be present)

Directories (folders) in the project to include /views, /routes.   

Your program must use a template engine to generate its HTML pages - you can use Pug/Jade, EJS, Handlebars, or any other express template you choose. Our examples in class will use Pug/Jade, so if you have no other preference, that may be a convenient choice.

You may use Express Generator (described on the last page of week 6) to help get your project started. You must clean it up by removing any generated JS or template files that your project does not use.    

Your code should adhere to the Coding Standards and Style for the course
Functionality

Your application will generate a website that contains at least two pages. The pages do not need to employ extensive Web design, but the purpose of the site and how to use it should be clear to a casual user. 

An HTML form on your website (may be on the home page or another page) with at least two input fields. Your form may use the GET method. (We will address POST requests in the next part of the course.)

The result of submitting the form should affect the content shown on the home page. For example if your form is for a blog post, you could display the post, or all posts. If your form collects to-do list items, you could display the latest item, or a list of all the submitted items.

There is no requirement to store the data collected to the filesystem or a database, though you are welcome to use a local data structure (such as an array) or app.locals (Links to an external site.) to store data while your application is running. This would allow you to display a list of collected items from the form.
There is no requirement to provide updating or deleting of data you've collected in your form.

Your project may contain client-side javascript if you like, but the logic of collecting and displaying your form data should be implemented with server-side code. No client-side Javascript is required or expected. 