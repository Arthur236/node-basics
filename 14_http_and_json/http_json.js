const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverRes) => {
  if (req.method === 'GET' && req.url === '/posts') {
    https.get(url, (res) => {
      res.on('data', (data) => {
        res.setEncoding('utf8');
        serverRes.write(data);
      });

      res.on('end', () => {
        serverRes.end();
      });
    });
  } else {
    serverRes.writeHead(404, { 'Content-Type': 'text/plain' });
    serverRes.end('404 Error: Could not find the resource you were looking for');
  }
}).listen(9111);

console.log('Server is running...');
