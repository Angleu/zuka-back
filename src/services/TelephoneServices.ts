import { getRepository } from "typeorm";
import User from "../model/User";
import Telephone from "../model/Telephone";


interface TelephoneRequest {
    id_user: string;
    number: string;
}

export default class TelephoneService {
    async execute(): Promise<Telephone[]> {
        const repository = getRepository(Telephone);
        const telephones = repository.find({
            relations: ['user']
        });

        return telephones;
    }

    async save({ id_user, number }: TelephoneRequest): Promise<Telephone | Error> {
        const repository = getRepository(Telephone);
        const repositoryUser = getRepository(User);

        const user = await repositoryUser.findOne({ where: {id_user} });

        if(!user)
            return new Error('User does not exist');

        const telephone = repository.create({
            number,
            user
        });

        await repository.save(telephone);
        return telephone;
    }
}