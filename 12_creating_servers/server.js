const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`<h2>Hey there ;-)</h2>`);
});

server.listen(9111);

console.log('The server is running...');
