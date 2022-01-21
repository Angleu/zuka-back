"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = /** @class */ (function () {
    function Payment(amount, currency, methodPayment, customer, customer_details, cancelUrl, successUrl, url) {
        this.amount = amount;
        this.currency = currency;
        this.methodPayment = methodPayment;
        this.customer = customer;
        this.customer_details = customer_details;
        this.cancelUrl = cancelUrl || '';
        this.successUrl = successUrl || '';
        this.url = url || '';
    }
    return Payment;
}());
exports.default = Payment;
