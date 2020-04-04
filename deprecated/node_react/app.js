const express = require("express");
const server = express();
const path = require("path");

server.use('/assets', express.static('assets'))

server.get('/', (req,res) => {
  // res.sendFile(path.join(__dirname+'/dist/index.html'));

  
  //__dirname : It will resolve to your project folder.
});

server.listen(3000);

console.log("Running at Port 3000");



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });