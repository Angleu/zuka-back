import { Request, Response } from "express";
import LoginServices from "../services/LoginServices";


class LoginController {

    async handleExecuteOnce(request: Request, response: Response){
        const {email, password} = request.body;

        if(!email || !password)
            return response.status(302).send("Missing email or password");
        const service = new LoginServices();
        const result = await service.executeOnce(email, password);

        if(result instanceof Error) 
            return response.status(302).send(result.message);
        return response.status(200).json(result);
    }  

}

export default LoginController;