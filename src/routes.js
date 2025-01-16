import { UserController } from './controllers/UserController.js';

const routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: new UserController().listUsers
  }
]

export default routes;