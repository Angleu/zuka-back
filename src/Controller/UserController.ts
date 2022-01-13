import { Request, Response } from "express";
import UserServices from "../services/UserServices";


class UserController {

    async handleExecute(request: Request, response: Response){
        const service = new UserServices();
        const result = await service.execute();
        response.status(200).json(result);
    }  

   async handleSave(request: Request, response: Response) {

        const { name, email,dataBirthday, password, confirmPassword } = request.body;
        const result = await new UserServices().save({name, email,dataBirthday, password, confirmPassword});
        if(result instanceof Error)
            return response.status(401).json(result.message);

        return response.status(200).json(result);
    }
}

export default UserController;