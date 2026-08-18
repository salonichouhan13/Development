const http = require('http')
 
const server =  http.createServer((req,res) =>{
  console.log(req.url, req.method, req.headers);

  // sending Response

  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1> Hello Saloniee</h1></body>');
  res.write('</html>');
  res.end();

});

const port = 3200;
server.listen(port,() =>{
  console.log('server runnig on http://localhost:${port}')
});