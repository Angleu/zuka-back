"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AddressController_1 = __importDefault(require("../Controller/AddressController"));
var routes = (0, express_1.Router)();
routes.get('/user/address/:id_user', new AddressController_1.default().hadleExecuteOnce);
routes.get('/user/address', new AddressController_1.default().hadleExecute);
routes.post('/user/address/', new AddressController_1.default().hadleSave);
exports.default = routes;
