"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stripe_1 = __importDefault(require("stripe"));
var secretKey = "sk_test_51K3dtoF9im6ZmFp2MCTksOhu7T87uTncuTpPx3b7vsz9ABekS2uwHzEBUjgCShrYoZEyKtxz6iui5X2KPRPb9jko00d3ep3dy8";
var stripe = new stripe_1.default(secretKey, {
    apiVersion: "2020-08-27"
    // typescript: true
});
exports.default = stripe;
