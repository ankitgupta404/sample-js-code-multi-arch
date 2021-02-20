const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let arr = Array(1e6).fill("Hello World. This processor architecture is");
  res.end(`Hello World. This processor architecture is ${process.arch}`);
});

server.listen(port, () => {
  console.log(`Server running on processor architecture ${process.arch}`);
});