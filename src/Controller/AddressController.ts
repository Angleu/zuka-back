import { Request, Response } from 'express';
import AddressServices from "../services/AddressServices";


export default class AddressController {
    async hadleExecute(request: Request, response: Response) {
        const service = new AddressServices();
        const addresses = await service.execute();

        response.status(200).json(addresses);

    }
    async hadleSave(request: Request, response: Response) {
        const { id_user, country,street, city } = request.body;
        const service = new AddressServices();
        const address = await service.save({ id_user, country ,street, city });

        if (address instanceof Error)
            response.status(401).json(address.message);

        response.status(200).json(address);

    }
}