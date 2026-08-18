const http = require('http')
 
const server =  http.createServer((req,res) =>{
  console.log(req.url, req.method, req.headers);

});

const port = 3200;
server.listen(port,() =>{
  console.log('server runnig on http://localhost:${port}')
});