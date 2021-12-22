import {Router} from 'express';
import userRoute from './user.routes';
import addressRoute from './address.routes';
import telephoneRoute from './telephone.routes';
import common_AccountRoute from './common_account.routes';
import paymentRoute from './payment.routes';

const routes = Router();

routes.use(paymentRoute);
routes.use(common_AccountRoute);
routes.use(telephoneRoute);
routes.use(addressRoute);
routes.use(userRoute);


export default routes;