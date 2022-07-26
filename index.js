/*console.log("Day 2 nodejs example")

setTimeout(function() {
    console.log('3 seconds have passed');
}, 2000);

var time = 0;

var timer = setInterval(function () {
    time +=2
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);*/

/*const EventEmitter = require('events');
const { EventEmitter } = require('stream');
const EventEmitter = new EventEmitter();

EventEmitter.on('tutorial', (num1,num2) => {
    console.log(num1 + num2);
});

EventEmitter.emit('tutorial',1,2);*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

