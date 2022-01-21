import { Request, Response } from "express";
import CustomerServices from "../services/CustomerServices";

export default class CustomerController{

    async handleExecute(request: Request, response: Response){
        const service = new CustomerServices();

        const result = await service.execute();

        if(result instanceof Error)
            return response.status(400).json(result.message);
        
            return response.status(200).json(result);
    }

    async handleSave(request: Request, response: Response){
        const {name, email, address, phone} = request.body;
        const service = new CustomerServices();

        const result = await service.save({name,email,address, phone})

        if(result instanceof Error)
            return response.status(401).json(result.message)
        
        return response.status(200).json(result);
    }
}