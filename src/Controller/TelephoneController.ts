import { Request, Response } from "express";
import TelephoneService from "../services/TelephoneServices";


export default class TelephoneController {
    async hadleExecute(request: Request, response: Response) {

        const service = new TelephoneService();
        const result = await service.execute();

        if (result instanceof Error)
            return response.status(401).json(result.message);

        return response.status(200).json(result);

    }

    async handleSave(request: Request, response: Response) {
        const { id_user, number } = request.body;
        const service = new TelephoneService();

        const result = await service.save({ id_user, number });

        if (result instanceof Error)
            return response.status(401).json(result.message);

        return response.status(200).json(result);

    }
}