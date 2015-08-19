function filter(path, extension, fn) {
  // var path = process.argv[2];
  var fs = require('fs');
  fs.readdir(path, function (err, data) {
    if (err) {
      return fn(err)
    }
    var tempArr = data.filter(function(line){
      return line.match("." + extension);
    });
      return fn(null, tempArr);
  });
};

module.exports = filter;

//** official solution **//
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
