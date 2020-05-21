# Assignment 2: Node modules and packages

Start out with the version of the simple HTTP server example from class that's included in this project.  This is a working HTTP file server. You'll be making several modifications to the starter code, and adding some files of your own.

1. **Manage dependencies in your project:** Add a `package.json` to manage dependencies in your project. Remember that `npm init` can help you here.

```
added package with the following structure using npm init:
```

```js
{
  "name": "assignment-2-silber8806",
  "version": "1.0.0",
  "description": "project2",
  "main": "simple-http-file-server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/HarvardDCENode/assignment-2-Silber8806.git"
  },
  "author": "Chris Kottmyer",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/HarvardDCENode/assignment-2-Silber8806/issues"
  },
  "homepage": "https://github.com/HarvardDCENode/assignment-2-Silber8806#readme"
}
```


2. **Use a third-party package in your Project:** Install a third-party package from npm - you select one of your choice. It can be a logging utility like `log-util`, a general purpose utility package like `underscore` or something else you like. Use it in your project. Be sure to include it as a dependency in `package.json`.

```
I installed log-util as seen by the below dependencies.  I use 
the log.info function to log information about the query object
 to the console.
```

```js
{
  "name": "assignment-2-silber8806",
  "version": "1.0.0",
  "description": "project2",
  "main": "simple-http-file-server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/HarvardDCENode/assignment-2-Silber8806.git"
  },
  "author": "Chris Kottmyer",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/HarvardDCENode/assignment-2-Silber8806/issues"
  },
  "homepage": "https://github.com/HarvardDCENode/assignment-2-Silber8806#readme",
  "dependencies": {
    "log-util": "^2.3.0",
    "underscore": "^1.9.2"
  }
}
```


3. **Create and use your own file-based module:** This code sample contains code to associate `Content-type` with filename extensions. Create a Node module of your own that extracts this functionality from the provided .js file, and puts it into a new module that you'll `require` instead. This need not be a complete package with its own package.json, etc. Just a new .js file that you'll `require` and use. It should export a function that accepts a url, a filename or a filename extension (your choice), and returns the appropriate information. If the `Content-type` is unknown, don't include a `Content-type` header in your http response at all.  

```
module: file_types.js

basic function takes as a parameter a url path to a file 
returns a content type based on the file extension.  This
is basically a copy + paste job and only occurs when a file 
is requested.  The function returns "None" if it  can't 
determine a file content type.  An if 
statement in simple-http-server handles the "None" 
case by not adding a content type to the response header.
```

4. **Parse the query string arguments from the URL:** Add functionality to the web server that detects any query string arguments included in the URL and prints them to the console. We're not going to do anything with them besides log them at this time. It's just to provide practice with parsing the URL.  So, if your url looks like `http://128.0.0.1:8080/index.html?name=Javascript`, then the log output should be `name: Javascript`.  

```
Add this below the deconstructor statement for query.  
I looped through the query object keys.  I write to console
the key and the property value associated with the key. 
I use the log-util library to do this.  This should
satisify this requirement as well as question 2.
```

5. **Create some HTML and image assets to serve:**  Add a static HTML file in `htdocs` to the project for the server to serve. It's fine to add some images, CSS or other assets as well, if you like. Essentially, create a simple page for your server to serve. You won't be graded on your HTML page being fancy - just provide something for your server to deliver.

```
html documents:
/htdocs/index.html 

jpg images:
/htdocs/fractal.jpg
/htdocs/diamond.jpg

I google image searched for diamond and fractal.  
I took the first two pictures that looked nice.  
HTML document is from example.com.  I copy-pasted 
it into index.html to use as an example.  This is 
something I commonly use for demonstrations as well 
as it's quick and easy.
```

6. Push your code back up to github, and deploy it to DO

```
Doing this now!
```

7. Submit the URL to the page served by your server on DO, and the URL to your Github repo to Assignment 2 in Canvas

```
Will deploy tonight!
```