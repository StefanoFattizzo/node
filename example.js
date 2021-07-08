//function myCallback(err,data) {
//    if (err) throw err; 
//    console.log(data.length);
//}
//var fs = require("fs");
//fs.readFile(process.argv[2], 'utf8', myCallback);
//console.log("hello world");

var http = require("http");
var s = http.createServer(webServerProcessor)
s.listen(80);


function webServerProcessor(request,response) {
    console.log(request);
    var corpo = "hello world!";
    var content_length = corpo.length;
    response.writeHead(200, {'Content-Length' : content_length, 'Content-Type' : 'text/plain'});

    response.end(corpo);
}