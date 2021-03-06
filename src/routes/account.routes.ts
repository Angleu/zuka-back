import { Router } from 'express';
import AccountController from '../Controller/AccountController';

const routes = Router();

routes.get('/account/:id_user', new AccountController().hadleExecuteOne); // Precisa de analise
routes.get('/account', new AccountController().hadleExecute);
routes.post('/account', new AccountController().hadleSave);
routes.post('/account/deposit', new AccountController().hadleDepositExecute);

export default routes;