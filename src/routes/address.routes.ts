import { Router } from 'express';
import AddressController from '../Controller/AddressController';

const routes = Router();

routes.get('/user/address',new AddressController().hadleExecute);

routes.post('/user/address/', new AddressController().hadleSave);

export default routes;