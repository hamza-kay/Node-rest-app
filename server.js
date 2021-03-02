// server.js
// var app = require('./app');
// var port = process.env.PORT || 4000;
// var server = app.listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });


var app = require('./app');
var serverless = require('serverless-http');
module.exports.handler = serverless(app);