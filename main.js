// First we want to create sarver and we need 'http'(core module) to create sarver.
// We will connect or import the 'http' sarver.
// we will use require() function. 
// The "require()" fatch the module which we want to use
// There is a method called "createSarver()" that we will call here.
// The createSarver() method has two parameters. First is "request" and the other is "response"

let http = require('http');

let server = http.createServer(function (request, response) {
    response.end("Hello World");
})

server.listen(5050);
console.log("Server run success");