# Assignment #6 - Angular

TasKitty is a very basic service for tracking tasks.  Each task is composed of a task name, task description and a due date in the future.  The service supports: Creating, Updating, Deleting and Reading current tasks.  Assignment 5 prototype, which we will recreate in the Final can be seen here: http://142.93.2.191:8088/.

For Assignment 6, I took the front-end portion of assignment 5 and recreated it in angular.  For this exercise, I only reconstructed the home page.  The angular app has the following components:

1. Canvas -> Main portion of the application containing content.  Currently, it has a table that contains all tasks.
2. Footer -> Footer of the web page.
3. Header -> Header of the web page.  Kind of like the navbar.
4. Sidebar -> a web form used for quickly adding new tasks.  Currently disabled in this iteration.

Attribute Derictives: 

5. Task (technically an attribute directive) -> representing a task.  It is used to display the rows in the Canvas table.

To support this structure, I have one service called creatively TaskService.  That service is injected into the Canvas app where it passes a task per row of a table.  The row in the table is 
represented by a attribute directive Task, which takes the task information and uses it to display each column: name, description, due date and a static image X for deletion.  The delete icon is currently disabled during this iteration.

The name of this front-end portion of the project is TaskYarn.  The reason?  TasKitty is the backend and kittens often play with Yarn balls.  Yarn is also used to make beautiful pictures or objects.  Hence a "pretty" front-end that the backend plays with.  Where pretty means just functional lol.

## See the StackBliz Example here:

Here is the visualization for the app: https://angular-manknx.stackblitz.io

Here is the code set up on stackblitz: https://stackblitz.com/edit/angular-manknx

## How to run locally:

Clone the repository locally.  Then within the root directory go to the TaskYarn folder and type:

npm install

Once it has finished installing, type:

npm serve

It should serve it on localhost at: https://localhost:4200/

The page is completely static per the assignment, so there isn't really much to interact with.  I will built the former behavior back into the application in the next assignment.

