import {Router} from 'express';
import TransationController from '../Controller/TransationController';


const routes = Router();

routes.get('/account/transation', new TransationController().handleExecute);
routes.post('/account/transation', new TransationController().handleSave);


export default routes;