import { Router } from 'express';
import { getRepository } from 'typeorm';
import Common_Acccount from '../model/Common_Account';
import User from '../model/User';

const routes = Router();

routes.get('/common_account', async (request, response) => {
    const repository = getRepository(Common_Acccount);

    try {
        const common_accounts = await repository.find();
        return response.status(200).json(common_accounts);

    } catch (erro) {
        return response.status(401).send(erro);
    }
});

routes.post('/common_account/:id_user', async (request, response) => {

    const { id_user } = request.params;

    const repository = getRepository(Common_Acccount);
    const repositoryUser = getRepository(User);
    try{
        const common_account = repository.create();
        
        const user = await repositoryUser.findOne({where:{id_user}});
        common_account.id_user = user as User;
    
        const oldCommonAcount = await repository.findOne({where:{id_user}})
        
        if(!oldCommonAcount){
            const newAccount = await repository.save(common_account);
            return response.status(200).json(newAccount);
        }
        return response.status(201).json({
            message: 'Already have a Account'
        })
    }catch(error){
        return response.status(401).json(error);
    }

});



export default routes;