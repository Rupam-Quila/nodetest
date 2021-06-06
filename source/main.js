var http=require('http');
var URL=require('url');

const { url } = require('inspector');
var server=http.createServer(function(req,res){
    //res.end("Hello World")
    /*if(req.url=="/"){
        res.writeHead(200,{'Conten-Type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end();
    }
    else if (req.url=="/about") {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    } 
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }*/

    var myURL="https://www.sunwebdev.com/blog.html?year=2020&month=july";
    var myURLBreak=URL.parse(myURL,true);

    var myDomain=myURLBreak.host;
    var myPaty=myURLBreak.pathname;
    var mySearch=myURLBreak.search;

    res.writeHead(200,{'Content-type':'text/html'});
    res.write(myDomain);
    res.write("\t\t");
    res.write(myPaty);
    res.write(mySearch);
    res.end();
    
});

server.listen(5050);
console.log("Server Run Success");