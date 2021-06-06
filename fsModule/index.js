var fs = require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/"){
        //Asynchronous
        /*fs.readFile('home.html', function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });*/

        //Synchronous
        let viewdata=fs.readFileSync('home.html')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(viewdata);
        res.end();        
    } 
});

server.listen(4040);
console.log("Server is successfully running");






