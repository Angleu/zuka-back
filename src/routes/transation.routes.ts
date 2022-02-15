import {Router} from 'express';
import TransationController from '../Controller/TransationController';


const routes = Router();

routes.get('/account/transation/:id_account', new TransationController().handleExecute);
routes.post('/account/transation', new TransationController().handleSave); // post


export default routes;