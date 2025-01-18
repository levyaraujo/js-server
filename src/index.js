import http from 'node:http';
import { URL } from 'node:url';

import routes from './routes.js';

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(request.url, `http://${request.headers.host}`);

  let { pathname } = parsedUrl;
  const splittedPathname = pathname.split('/').filter(Boolean);
  let id = null;

  if (splittedPathname.length > 1) {
    pathname = `/${splittedPathname[0]}/:id`;
    id = splittedPathname[1];
  }

  console.log(`${request.method} ${request.url}`);
  const route = routes.find((routeObject) => (
    routeObject.endpoint === pathname && routeObject.method === request.method
  ))

  if (route) {
    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    }

    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };
    return route.handler(request, response);
  }

  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end(`Cannot ${request.method} ${request.url}`);
})


server.listen(3000, () => {
  console.log('🔥 Server is running on http://localhost:3000');
})
