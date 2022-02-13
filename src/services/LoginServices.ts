import { getRepository } from 'typeorm';
import User from "../model/User";


export default class LoginServices {

    async executeOnce(email: string, password: string): Promise<User | Error> {
        const repository = getRepository(User);
        const user = await repository.findOne({
            where:{
                email,
            }
        });

        if(!user)
            return new Error("User does not exist");
        if(user.password !== password)
            return new Error("Wrong Password try again");
        
        return user;
    }


}