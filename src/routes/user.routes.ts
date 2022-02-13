import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../model/User';
import Telephone from '../model/Telephone';
import UserController from '../Controller/UserController';
import LoginController from '../Controller/LoginController';


const routes = Router();

routes.get('/user', new UserController().handleExecute);
routes.get('/user/login', new LoginController().handleExecuteOnce)

routes.get('/user/:number', async (request, response) => {
    const {number} = request.params;
    const repository = getRepository(Telephone);
    const repositoryUser = getRepository(User);
    try{
        const telephone = await repository.findOne({where:{number}});
        // console.log(telephone)
        const {user} = telephone as Telephone
        const oldUser = await repositoryUser.findOne({where:{id_user: user}})

    
        return response.json(telephone).status(204);
    }catch(error){
        return response.status(401).json(error)
    }
})

routes.post('/user', new UserController().handleSave);

export default routes;
