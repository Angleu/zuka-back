import { getRepository } from 'typeorm';
import Address from '../model/Address';
import User from '../model/User';

interface AddressRequest{
    id_user: string;
    country: string;
    street: string;
    city: string;
}

export default class AddressServices {
    async execute(): Promise<Address[]> {
        const repository = getRepository(Address);
        const addresses = await repository.find({
            relations: ['user']
        });
        return addresses;
    }
    async save({id_user, country,street, city}: AddressRequest): Promise<Address | Error> {

        const repository = getRepository(Address);
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ where: { id_user } });

        if (!user)
            return new Error("User does not exist");

        const address = repository.create({
            user,
            country,
            street,
            city
        });
        
        await repository.save(address);

        return address;

    }
}