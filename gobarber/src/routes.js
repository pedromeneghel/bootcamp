import { Router } from 'express';
import multer from 'multer';
import UserControler from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

// Rotas acessivéis apenas para usuários logados
routes.use(authMiddleware);
routes.put('/users', UserControler.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
