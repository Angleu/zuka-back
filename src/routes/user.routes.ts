import { Router } from 'express';
// import { } from 'bcrypt'
import { getRepository } from 'typeorm';
import User from '../model/User';

const routes = Router();

routes.get('/user', async (request, response) => {
    const repository = getRepository(User);
    try{
        const users = await repository.find();
    
        return response.json(users).status(204);
    }catch(error){
        return response.status(401).json(error)
    }
})

routes.post('/user', async (request, response) => {
    const { name, email, password, confirmPassword } = request.body;
    const repository = getRepository(User);

    try {
        if (!name || !email)
            throw response.status(400).send('Missing name or password');
        if (password !== confirmPassword)
            throw response.status(400).send('you need the same password');

        const user = repository.create();

        const searchUser = await repository.findOne({email});
        if(searchUser)
            return response.status(200).send("user already exist")


        user.name = name;
        user.email = email;
        user.password = password;

        await repository.save(user);

        response.json(user).status(204);
    } catch (error) {
        return response.status(401).json(error)
    }




});


export default routes;
