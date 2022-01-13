import { Router } from 'express';
import TelephoneController from '../Controller/TelephoneController';

const routes = Router();

routes.get('/user/telephone', new TelephoneController().hadleExecute);
routes.post('/user/telephone', new TelephoneController().handleSave)

export default routes;