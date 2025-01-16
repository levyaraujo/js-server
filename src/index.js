import http from 'node:http';

import routes from './routes.js';

const server = http.createServer((request, response) => {
  console.log(`${request.method} ${request.url}`);
  const route = routes.find((routeObject) => (
    routeObject.endpoint === request.url && routeObject.method === request.method
  ))

  if (route) {
    return route.handler(request, response);
  }

  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end(`Cannot ${request.method} ${request.url}`);
})


server.listen(3000, () => {
  console.log('🔥 Server is running on http://localhost:3000');
})
