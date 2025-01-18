import { UserController } from './controllers/UserController.js';

const routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: new UserController().listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: new UserController().getUserById
  }
]

export default routes;