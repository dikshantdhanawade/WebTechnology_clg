let http=require('http')
let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World! This is my tiny HTTP server.')
});

const PORT=3000;

server.listen(PORT,()=>{
    console.log('server is running on http://localhost:${PORT}');
});

