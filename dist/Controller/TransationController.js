"use strict";
// import { Request, Response } from "express";
// import TransitionServices from "../services/TransitionServices";
// class TransationController {
//     async handleExecute(request: Request, response: Response){
//         const service = new TransitionServices();
//         const result = await service.execute();
//         response.status(200).json(result);
//     }  
//    async handleSave(request: Request, response: Response) {
//         const { amount, description, type, to_user, from_user } = request.body;
//         const result = await new TransitionServices().save({amount, description, type, to_user, from_user});
//         if(result instanceof Error)
//             return response.status(401).json(result.message);
//         return response.status(200).json(result);
//     }
// }
// export default TransationController;
