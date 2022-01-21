import { Router } from 'express';
import AccountController from '../Controller/AccountController';

const routes = Router();

routes.get('/account', new AccountController().hadleExecute);
routes.get('/account/:id_user', new AccountController().hadleExecuteOne);
routes.post('/account', new AccountController().hadleSave);

export default routes;