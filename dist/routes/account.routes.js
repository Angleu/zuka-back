"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AccountController_1 = __importDefault(require("../Controller/AccountController"));
var routes = (0, express_1.Router)();
routes.get('/account', new AccountController_1.default().hadleExecute);
routes.post('/account', new AccountController_1.default().hadleSave);
exports.default = routes;