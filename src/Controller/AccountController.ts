import {Request, Response} from 'express';
import AccountServices from "../services/AccountServices";


export default class AccountController {
    async hadleExecute(request: Request, response: Response) {
        const service = new AccountServices();
        const addresses = await service.execute();

       return response.status(200).json(addresses);

    }
    async hadleSave(request: Request, response: Response) {
        const { id_user, coin } = request.body;
        const service = new AccountServices();
        const address = await service.save({ id_user, coin });

        if (address instanceof Error)
            return response.status(401).json(address.message);

       return response.status(200).json(address);

    }
    async hadleExecuteOne(request: Request, response: Response) {
        const { id_user } = request.params;
        const service = new AccountServices();
        const account = await service.executeOneAccount(id_user);

        if (account instanceof Error)
            return response.json(account.message).status(401);

       return response.json(account).status(200);
    }
    async hadleDepositExecute(request: Request, response: Response) {
        const { id_account, amount, coin } = request.body;
        const service = new AccountServices();
        const account = await service.depositExecute(id_account, amount, coin);

        if (account instanceof Error)
            return response.json(account.message).status(401);

        return response.json(account).status(200);
    }
}