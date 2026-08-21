const http = require('http')

const server = http.createServer((req,res) =>{
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
     res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>second page</title></head>');
    res.write('<body><h1>Enter your Details</h1>');
    res.write('<form action="/submit details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="male"> Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');

    res.write('</form>');
    res.write('</body>')
    res.write('</html>');
     return res.end();
    
}
else if(req === '/Products'){
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