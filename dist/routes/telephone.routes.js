"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TelephoneController_1 = __importDefault(require("../Controller/TelephoneController"));
var routes = (0, express_1.Router)();
routes.get('/user/telephone', new TelephoneController_1.default().hadleExecute);
routes.post('/user/telephone', new TelephoneController_1.default().handleSave);
exports.default = routes;
