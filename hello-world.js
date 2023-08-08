
console.log("HELLO WORLD")


var http = require("http")
http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"})
response.end.toString(`<h1>Hello Node!!!!</h1>\n`);

}).listen(3000)
console.log("Server running at http://localhost:3000");


var fs = require("fs")
fs.writeFile("welcome.txt", "Hello node", function (err) {
  console.log("data saved");
  if (err) {
    console.err(err);
  }
});

fs.readFile("hello.txt", function(err, data){
  if (err) return console.log(err)
  else 
    console.log('data from file hello.txt',data.toString())
})
