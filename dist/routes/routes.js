"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./user.routes"));
var address_routes_1 = __importDefault(require("./address.routes"));
var telephone_routes_1 = __importDefault(require("./telephone.routes"));
var account_routes_1 = __importDefault(require("./account.routes"));
var transation_routes_1 = __importDefault(require("./transation.routes"));
var routes = (0, express_1.Router)();
routes.use(transation_routes_1.default);
routes.use(account_routes_1.default);
routes.use(telephone_routes_1.default);
routes.use(address_routes_1.default);
routes.use(user_routes_1.default);
exports.default = routes;
