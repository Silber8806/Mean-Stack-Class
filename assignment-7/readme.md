# Assignment #7 - Final Assignment

TasKitty is a very basic service for tracking tasks.  Each task is composed of a task name, task description and a due date in the future.  The service supports: Creating, Updating, Deleting and Reading current tasks.  The url for the project can be found here: http://142.93.2.191:8000/.

For Assignment 7, I took the UI from assignment 6 built in Angular and "glued" it onto assignment 5 the Restful API piece.  I completely removed all the /views from the express app and rebuilt everything in Angular itself including from validation.  The only thing I didn't add was flash messaging (as it's not required for the course).  All data is served via the restful api service at /api/tasks/[option task id].

## How to run locally:

Clone the repository locally.  Then within the /server and /client directories located in the project root, type:

npm install

Once it has finished installing, go to /client and type:

ng build --configuration="production"

After the front-end is built, you should be able to start the server with:

npm start

It should serve the entire project on localhost at: https://localhost:8080/.

If you want to run this in development mode, you can just go to /server and run npm run-script start-dev followed by typing ng serve in /client.  This will serve a development version over https://localhost:4200, which still uses the production database for communication (in future we can replace the database url for development server with development mongo instance).

## Software infrastructure explained:

High level the project is split into two sections:  Server folder and a Client folder.

Server -> contains a node express application that serves a restful api only.  This represents the entire backend portion of the project.

Client -> a Angular application that configures the entire front-end of the application.  This includes only 2 pages packed with some cool functionality: home page and task detail page.


### Server

app.js in the root folder serves /routes/api/api-tasks.js.  The /model and /controllers support a data service class that provides basic CRUD operations from MongoDB.  There are no /views in this project, because it is all handled by Angular.  This backend acts more like a microservice that can be scaled out with additional servers if needed.

### Client

The client is written completely in Angular (front-end).  I purposely forced all the front-end code as I wanted to force myself to adapt to Angular without using express templating and views as a crutch.  It ended up working rather well.  High level overview:

src contains souce code and dist is compiled front-end code.  Dist is created when you run the ng build --configuration="production" command.  If you don't provide the configuration, it will build the development version.  Only difference is that the development version uses localhost api vs the production version uses the DO server.

The src includes an environment file.  This only contains the url to the restful api service for both development (localhost) and production server (DO server).  Src also includes assets in the form of a single image in the /assets/images folder.

As for the app logic, it's a bit complex, but I'll add a hierarchial diagram below:

app component represents a router -> router routes to either / or /tasks/ID.  The former is the home page and the later a details page per task.  

The home page is composed of the: page-home component.  It has the following structure:

page-home -> page
    header -> website header
    footer -> website footer
    sidebar -> quickbar for adding tasks
    canvas -> list of all tasks in the system.  This is in the form of a table.
        tasks -> each row is itself a component and includes all info about tasks.  it also includes an image that allows tasks to be deleted.

The product detail page is similar ot the above and presented by the page-details component, but replaces the Canvas component with an Angular template form.  The angular template form has 3 operations: create, update and delte.

Within my system, you can add tasks with the sidebar.  You can also go to the task detail page either: add a task, modify the current task or delete the current task.  

There is a ton of validation for the forms.  The sidebar checks if each field is touched/dirty or invalid.  If any of those conditions are met, it will show a message telling you the issue.  The add task button is disabled until you properly fill out the form.  To submit, all 3 fields have to have a value.

The task detail form checks the same conditions and only allows you to submit if all 3 values are provided: name, description and due date.

Overall work flow is: home page -> add task or click task -> modify task if needed.

### Angular services used

I use data service class to handle interactions between the restful api and the angular service.  This is located in /src/app/task.service.ts (under client folder).  This specific class uses the Http module.  I also use a router in the app component as well as activated route in page-details component.  The task directive also has an event emitter that gets called by the Canvas object to do real-time updates.

I wanted to do the same thing for sidebar, but found out event emitters only work on child-parent relationships.  So I just reload the page there.  

### Improvements:

I really should add a 404 page.  I also think it would be nice to add angular-flash to bring back the flash capabilities from the express app.  Then of course we can do more features for something like this as it's currently just a prototype of a task app.