import { Request, Response } from 'express';
import AddressServices from "../services/AddressServices";


export default class AddressController {
    async hadleExecute(request: Request, response: Response) {
        const service = new AddressServices();
        const addresses = await service.execute();

        return response.status(200).json(addresses);

    }
    async hadleExecuteOnce(request: Request, response: Response) {
        const {id_user} = request.params;
        const service = new AddressServices();
        const address = await service.executeOnce(id_user);

        return response.status(200).json(address);

    }
    async hadleSave(request: Request, response: Response) {
        const { id_user, country,street, city } = request.body;
        const service = new AddressServices();
        const address = await service.save({ id_user, country ,street, city });

        if (address instanceof Error)
            return response.status(401).json(address.message);

        return response.status(200).json(address);

    }
}