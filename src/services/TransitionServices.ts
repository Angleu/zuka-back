// import Transation from "../model/Transation";
// import {getRepository} from 'typeorm';
// import User from "../model/User";


// interface TransationRequest{
//     from_user: string;
//     to_user: string;
//     amount: number;
//     type: string;
//     description: string;
// }
// export default class TransitionServices {
//     async execute(): Promise<Transation[]> {
//         const repository = getRepository(Transation);
//         const transation = await repository.find();
//         return transation;

//     }

//     async save({ to_user, from_user, amount, type, description}: TransationRequest): Promise<Transation | Error> {
//         const repository = getRepository(Transation);

//         if(!to_user || !from_user)
//             return new Error('Missing data to transition');

//         if(!amount)
//             return new Error('Missing value');

//             const userRepository = getRepository(User);
//             const t_user = await userRepository.findOne({where: {id_user: to_user}});
//             const f_user = await userRepository.findOne({where: {id_user: from_user}});

//             if(!t_user || !f_user)
//             return new Error('Users does not exist');


//         const transation = repository.create({
//             amount,
//             description,
//             type,
//             to_user: t_user,
//             from_user: f_user
//         })

//         await repository.save(transation);

//         return transation;
//     }
// }