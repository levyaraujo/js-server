const http = require('node:http');
const users = require('./mocks/users');

const server = http.createServer((request, response) => {
  console.log(`${request.method} ${request.url}`);

  if (request.url === '/users') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end(`Cannot ${request.method} ${request.url}`);
})


server.listen(3000, () => {
  console.log('🔥 Server is running on http://localhost:3000')
})
