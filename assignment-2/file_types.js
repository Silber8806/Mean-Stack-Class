const path = require('path');

var detect_file_type = function(path_to_file) {
	let mimeTypes = {
    'html' : "text/html",
    'css'  : "text/css",
    'js'   : "text/javascript",
    'png'  : "image/png",
    'jpg'  : "image/jpg"
  };

  let contentType = 'None';

  let extname = String(path.extname(path_to_file)).toLowerCase().replace('\.','');

  contentType = mimeTypes[extname] || contentType;

  return contentType
}


module.exports = detect_file_type;