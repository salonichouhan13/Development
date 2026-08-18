const http = require('http')

const server = http.createServer((req,res) =>{
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>second page</title></head>');
    res.write('<body><h1>Welcome to home !</h1></body>');
    res.write('</html>');
     return res.end();
    

  }else if(req === '/Products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>second page</title></head>');
    res.write('<body><h1>Check out our products</h1></body>');
    res.write('</html>');
    return res.end();

  }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>second page</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end();
  }
})
const port = 3300;
server.listen(port,() =>{
  console.log('Server Running On Address http://localhost:${port}');
})