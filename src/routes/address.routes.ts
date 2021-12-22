import { Router } from 'express';
import { getRepository } from 'typeorm';
import Address from '../model/Address';
import User from '../model/User';

const routes = Router();

routes.get('/user/address', async (request, response) => {
    const repository = getRepository(Address);
    try {
        const addresses =  await repository.find();
        response.status(200).json(addresses);
    } catch (error) {
        return response.status(401).send(error);
    }
    

});

routes.post('/user/address/:id_user', async (request, response) => {

    const { id_user } = request.params;
    const { street, city } = request.body;
    const repository = getRepository(Address);
    const userRepository = getRepository(User);
    
    
    try {
        const user = await userRepository.findOne({ where: {id_user} });

        const address = repository.create();
        address.city = city;
        address.street = street;
        address.user = user as User;

        await repository.save(address);
        return response.status(200).json(address);
    } catch (error) {
        return response.status(401).send(error);
    }

})

export default routes;