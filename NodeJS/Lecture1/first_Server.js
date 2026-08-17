const http = require('http')

// function requestListener(req,res){
//   console.log(req);
// }
// http.createServer(requestListener);

// anonyms function

const server =  http.createServer((req,res) => {
  console.log(req);
});


const port = 3100;
server.listen(port ,() =>{
  console.log('Server Runnig on address http://localhost:${port} ')

})
