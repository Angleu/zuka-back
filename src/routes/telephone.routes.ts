import { Router } from 'express';
import { getRepository } from 'typeorm';
import Telephone from '../model/Telephone';
import User from '../model/User';

const routes = Router();

routes.get('/user/telephone', async (request, response) => {
    const repository = getRepository(Telephone);
    try {
        const telephones = await repository.find();
        return response.status(200).json(telephones);
    } catch (error) {
        return response.status(401).send(error);
    }

});

routes.post('/user/telephone/:id_user', async (request, response) => {
    const { id_user } = request.params;
    const { number } = request.body;

    const repository = getRepository(Telephone);
    const repositoryUser = getRepository(User);

    try {
        const user = await repositoryUser.findOne({ where: {id_user} });
        const telephone = repository.create();
        telephone.number = number;
        telephone.user = user as User;
        
        await repository.save(telephone);

        return response.status(200).json(telephone);
    } catch (error) {
        return response.status(401).send(error);
    }

})


export default routes;