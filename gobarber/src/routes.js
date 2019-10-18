import { Router } from 'express';
import UserControler from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserControler.update);

export default routes;
