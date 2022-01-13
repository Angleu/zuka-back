"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().catch(function (error) {
    console.log('error in connection: ', error);
}).then(function (snap) {
    console.log('Connection is OK');
});
