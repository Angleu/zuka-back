import { Request, Response } from "express";
import TransitionServices from "../services/TransitionServices";


class TransationController {

    async handleExecute(request: Request, response: Response){
        const { id_account } = request.params; // receve param
        const service = new TransitionServices();
        const result = await service.execute(id_account);

        if(result instanceof Error)
        return response.json(result.message).status(401);

        return response.status(200).json(result);
    }  

   async handleSave(request: Request, response: Response) {

        const { amount, description, type, to_user, email, coin } = request.body;
        const result = await new TransitionServices().save({amount, description, type, to_user, email, coin});
        if(result instanceof Error)
            return response.status(401).json(result.message);

        return response.status(200).json(result);
    }
}

export default TransationController;