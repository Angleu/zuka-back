import { getRepository } from "typeorm";
import Account from "../model/Account";
import User from "../model/User";


interface AccountRequest {
    id_user: string,
    coin: string;
}

export default class AccountServices {
    async execute(): Promise<Account[]> {
        const repository = getRepository(Account);
        const accounts = await repository.find({
            relations: ['user']
        });
        return accounts;
    }
    async save({ id_user, coin = 'AOA' }: AccountRequest): Promise<Account | Error> {

        const repository = getRepository(Account);
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ where: { id_user } });

        if (!user)
            return new Error("User does not exist");

        const account = repository.create({
            user,
            coin,
            balance: 0.0
        });

        await repository.save(account);

        return account;

    }

    async executeOneAccount(id_user: string): Promise<Account | Error> {
        const repository = getRepository(Account);
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id_user
            }
        })
        const account = await repository.findOne({
            where: { user }
        });

        if (!account)
            return new Error('Account does not exist')

        return account;
    }

    async depositExecute(id_account: string, amount: number, coin: string): Promise<Account | Error> {
        const repository = getRepository(Account);
        
        const account = await repository.findOne({
            where: {
                coin,
                id_account
            }
        })
        const value = Number.parseFloat(account?.balance as unknown as string) + amount;
    
        console.log(value);
        await repository.update({
           id_account
        },
        {
            balance: value 
        })

        

        if (!account)
            return new Error('Account does not exist');

        return account;

    }
}