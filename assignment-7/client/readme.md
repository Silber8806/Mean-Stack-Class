# TaskYarn

This is the angular app called TaskYarn, it's TasKitty's front-end.  Name Yarn, because Yarn is used to create beautiful pieces of art and also is something cats play with.  Dumb, but all I could think of at the time.  The Front-end is completed enough to warrant it's own readme.md file.

# High Level tour!

app -> router -> (page-home, page-detail)

pages are composed of:

header
footer
sidebar

and a custom component! 

page-home -> Canvas component
page-detail -> an ngForm

All of this is supported by a task data service that uses the APIs in the /server folder.  Operations are 1-to-1 with that rest API.

Header/Footer/Sidebar don't change per page except for header's content.  It is either TasKitty - Home Page or the name of the active Task.

Canvas component is just a table of all tasks where each row is a task directive.  Each task has an event emitter that fires if the task is deleted and refreshes the Canvas component.

Page-detail just lists the details of a task and allows you to update, clone or delete the task (create => clone).

Both the page-detail and sidebar are ngModel bi-directionally linked forms with a ton of validation.  Fun! The add task, create, update buttons will only be enabled if the information validates properly.  That is all 3 fields: name, description and date are present and name is at least 3 characters.

General workflow: Login to main page, see your tasks, use sidebar to add any new tasks, go to a specific task: modify, clone or delete the task.  Nothing more to it.