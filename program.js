//*** Hello World **//

// console.log("HELLO WORLD");

//** Baby Steps **//

// console.log(sum(process.argv));
//
// function sum(array) {
//   var sum = 0;
//   for(var i = 2; i < array.length; i++) {
//     sum += +array[i];
//   }
//   return sum;
// }

//** My First I/O! **//

// var fs = require('fs');
// var path = process.argv[2];
// var lines = fs.readFileSync(path, 'utf8');
// console.log(lines.split('\n').length-1);

//** My First Async I/O! **//

// var fs = require('fs');
// var path = process.argv[2];
//
// fs.readFile(path, 'utf8', function (err, data) {
//   if(err) throw err;
//   var lines = data.split('\n').length-1;
//   console.log(lines);
// });

//** Filtered LS **//

// var fs = require('fs');
// var path = process.argv[2];
// fs.readdir(path, function callback (err, list) {
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].indexOf(".md") > -1) {
//       console.log(list[i]);
//     }
//   }
// });

//** Make It Modular **//
// var filter = require('./readFilter.js')
// var path = process.argv[2];
// var extension = "md"
//
// filter(path, extension, function(err, data){
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.join('\n'));
// });

//** official solution - Make it Modular **//
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

//** HTTP Client **//

// var http = require("http");
//
// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8');
//   response.on('data', console.log);
//   response.on('error', console.error);
// })

//** HTTP Collect **//
//ignore hint #1
// var http = require('http');
// var bl = require('bl')
//
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(err,data) {
//     if (err) {
//       return console.error(err);
//     }
//     var data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }))
// })

//** Juggling Async **//

// var http = require('http');
// var urls = [process.argv[2], process.argv[3], process.argv[4]];
// var responses = [];
// var count = 1
// var completedRequests = 0;
//
// for (i in urls) {
//   getResponses(i, urls[i])
// }
//
// function getResponses(count, url) {
//   http.get(url, function(response){
//     response.setEncoding('utf8');
//
//     var string = '';
//     response.on('data', function(chunk){
//       string += chunk;
//     });
//
//     response.on('end', function() {
//       responses[count] = string;
//       completedRequests ++;
//       if(completedRequests >= 3){
//         for(var i in responses){
//           console.log(responses[i]);
//         }
//       }
//     })
//   });
// }

//** Time Server **//

var portNumber = process.argv[2],
net = require('net'),
strftime = require('strftime');
net.createServer(function (socket) {
  var date = new Date();
  socket.end(strftime('%F %T', date).slice(0, -3));
}).listen(portNumber);

//** HTTP File Server **//


//** HTTP Uppercaserer **//


//** HTTP JSON API Server **//
