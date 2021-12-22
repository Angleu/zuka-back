import {Router} from 'express';
import stripe from "../services/stripe";

const routes = Router();

routes.get('/payment',(request, response) => {
    response.json({message: "OK"});
});

routes.post('/payment',async (request, response) => {
   const account = await stripe.accounts.create({
       type:'express'
   });
    response.json(account);
})


export default routes;