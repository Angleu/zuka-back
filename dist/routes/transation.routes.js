"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TransationController_1 = __importDefault(require("../Controller/TransationController"));
var routes = (0, express_1.Router)();
routes.get('/account/transation/:id_account', new TransationController_1.default().handleExecute);
routes.post('/account/transation', new TransationController_1.default().handleSave); // post
exports.default = routes;
