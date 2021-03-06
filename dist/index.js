"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
require("./database");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.listen(PORT, function () { return console.log('Execute server ' + PORT); });
