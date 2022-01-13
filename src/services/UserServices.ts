import { getRepository } from 'typeorm';
import User from "../model/User";


interface UserRequest {
    name: string;
    email: string;
    dataBirthday:string
    password: string;
    confirmPassword: string;
}

export default class UserServices {

    async execute(): Promise<User[]> {
        const repository = getRepository(User);
        const users = await repository.find();

        return users;
    }

    async save({ name, email, dataBirthday,password, confirmPassword }: UserRequest): Promise<User | Error> {
        const repository = getRepository(User);

        if (!name || !email)
            return new Error('name of email is empty');

        if (password !== confirmPassword)
            return new Error('Passworld are not same');


        if (await repository.findOne({ email }))
            return new Error('User already exist');

        const date = Date.parse(dataBirthday)

        const user = repository.create({
            name,
            email,
            dataBirthday:date,
            password
        });
        await repository.save(user);

        return user;
    }

}