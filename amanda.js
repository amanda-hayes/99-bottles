console.log('hi from Amanda');
const http = require('http');
const server = http.createServer((req, res)=>{
console.log(`${req.client.remoteAddress} ${req.method} ${req.url}`)
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(`<h1>Hello World</h1>`);
res.end();
})
server.listen(3000)
console.log(server.address())