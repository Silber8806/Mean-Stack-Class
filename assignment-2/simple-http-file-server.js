// start by navigating to the folder, and type 'node ../simple-http-file-server'
// access the app from you browser at http://localhost:8080/ (add any arbitrary path)

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const detect_file_type = require('./file_types');
const log = require('log-util');

console.log("created server function!")
var server = http.createServer((req, res) => {
	console.log("server fired...")
	console.log(req.url);

  // parse the URL into its component parts
	const parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl);
  // extract the pathname and query properties
	const { pathname, query } = parsedUrl;

	log.info("query string:");
	for (key in query){
		log.info(key + ': ' + query[key]);
	}
	log.info("end of query string...");
	// output absolute path info
	console.log('__dirname is %s', __dirname);
	console.log('cwd is %s', process.cwd());
	
	// Create an absolute path to the requested file.
	// Assume the server was started from the webroot
	const absolute_path_to_file = path.join(__dirname, pathname);
	console.log('absolute_path_to_file is %s', absolute_path_to_file);

	fs.readFile(absolute_path_to_file, (err, data) => {
		  if (err) {
	      console.log(err);
	      if (err.code == 'ENOENT'){
	        // file does not exist - we should return a 404 status code
					console.log('404 error getting ' + pathname);
					res.writeHead(404, {"Content-Type": "text/plain"});
					res.end('404: Page Not Found!');
	      } else if (err.code == 'EISDIR'){
	        // this is actually a directory - we should create a directory listing
					console.log('directory listing ' + pathname);
					fs.readdir(absolute_path_to_file, (err, files)=>{
						if (err) {
							res.writeHead(500, {"Content-Type": "text/plain"});
							res.end('Server Error 500');
						}
						let s = '<b>Directory Listing</b><br>';
						files.forEach((i)=>{
							s += (i + "<br>");
						});
						res.writeHead(200, {"Content-Type": "text/html"});
						res.end(s, 'utf8');
					});
	      }
	    } else {
		    // If we get to here, 'data' should contain the contents of the file
		    	let contentType = detect_file_type(pathname);
		    	console.log(contentType + " detected")
		    	if (contentType == "None") {
		    		res.writeHead(200);
		    	} else {
		    		res.writeHead(200, contentType);
		    	}
				res.end(data, 'binary', ()=>{
					console.log("file delivered: " + pathname);
				});
		}
	});
});

console.log("starting server...")
var port = 8080;
server.listen(port, () => {
  console.log("Listening on " + port);
});