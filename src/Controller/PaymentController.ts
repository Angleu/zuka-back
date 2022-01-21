import { Request, Response } from "express";
import PaymentServices from "../services/PaymentServices";


export default class PaymentController{

    async handleExecute(request: Request, response: Response){
        const service = new PaymentServices();
        const result = await service.execute();

        if(result instanceof Error)
            return response.status(500).json(result.message);

        return response.status(200).json(result);
    }
    async handleSave(request: Request, response: Response){
        
        const {amount, currency, methodPayment} = request.body;
        const {customer} = request.params;

        const service = new PaymentServices();
        const result = await service.save(customer,amount,currency,methodPayment);

        if(result instanceof Error)
            return response.status(400).json(result.message);

        return response.status(200).json(result);

    }
}