import Transation from "../model/Transation";
import {getRepository} from 'typeorm';
import Account from "../model/Account";
import User from '../model/User'


interface TransationRequest{
    email: string;
    to_user: string;
    amount: number;
    type: string;
    description: string;
    coin: string;
}
export default class TransitionServices {
    async execute(id_account: string): Promise<Transation[] | Error> {
        const repository = getRepository(Transation);
        const AccountRepository = getRepository(Account); // repository
        const account = await AccountRepository.findOne({where:{
            id_account
        }})
        if(!account)
            return new Error("Conta não Existe");

        const transation = await repository.find({
            where:{
                from_user: account.id_account
            }
        })

        return transation;

    }

    async save({ to_user, email, amount, type, description, coin}: TransationRequest): Promise<Transation | Error> {
        const repository = getRepository(Transation);

        if(!to_user || !email)
            return new Error('Missing data to transition');

        if(!amount)
            return new Error('Missing value');

            const AccountRepository = getRepository(Account);
            const t_user = await AccountRepository.findOne({where: {id_account: to_user}});
            const userRepository = getRepository(User);
            const user = await userRepository.findOne({where: {email}});
            const f_user = await AccountRepository.findOne({where:{
                user
            }});

            if(!t_user || !f_user)
            return new Error('Users does not exist');


        const transation = repository.create({
            amount,
            description,
            type,
            to_user: t_user,
            from_user: f_user,
            coin

        })

        await repository.save(transation);

        await AccountRepository.update({id_account:f_user.id_account },{
            balance: f_user.balance + amount
        })
        await AccountRepository.update({id_account:t_user.id_account },{
            balance: t_user.balance - amount
        })

        return transation;
    }
}