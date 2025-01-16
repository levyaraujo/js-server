import users from '../mocks/users.js';

export class UserController {
  listUsers(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
  }
}