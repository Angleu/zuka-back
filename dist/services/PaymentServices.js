"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stripe_1 = __importDefault(require("stripe"));
var Payment_1 = __importDefault(require("../Entities/Payment"));
var stripe = new stripe_1.default('sk_test_51K3dtoF9im6ZmFp2MCTksOhu7T87uTncuTpPx3b7vsz9ABekS2uwHzEBUjgCShrYoZEyKtxz6iui5X2KPRPb9jko00d3ep3dy8', {
    apiVersion: '2020-08-27',
});
var PaymentServices = /** @class */ (function () {
    function PaymentServices() {
    }
    PaymentServices.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payments, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payments = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, stripe.checkout.sessions.list()];
                    case 2:
                        result = (_a.sent()).data;
                        result.map(function (payment) {
                            var amount_total = payment.amount_total, currency = payment.currency, payment_method_types = payment.payment_method_types, customer = payment.customer, customer_details = payment.customer_details, cancel_url = payment.cancel_url;
                            payments.push(new Payment_1.default(amount_total, currency, payment_method_types, customer, customer_details, cancel_url));
                        });
                        return [2 /*return*/, payments];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, new Error('Something wrong with server')];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function save
     * @param customer token to identify user
     * @param amount value
     * @param currency coin
     * @param methodPayment
     * @returns Payment or Error
     */
    PaymentServices.prototype.save = function (customer, amount, currency, methodPayment) {
        return __awaiter(this, void 0, void 0, function () {
            var checkout, payment_method_types, customer_details, cancel_url, success_url, url, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!currency || !amount || !methodPayment)
                            return [2 /*return*/, new Error('Missing data to request')];
                        if (!customer)
                            return [2 /*return*/, new Error("Missing a customers")];
                        return [4 /*yield*/, stripe.checkout.sessions.create({
                                payment_method_types: ['card'],
                                mode: 'payment',
                                line_items: [{
                                        name: 'Pagamento',
                                        amount: amount,
                                        currency: currency,
                                        quantity: 1,
                                    }],
                                cancel_url: 'http://localhost:3000/cancel.html',
                                success_url: 'http://localhost:3000/sucess.html',
                                customer: customer
                            })];
                    case 1:
                        checkout = _a.sent();
                        payment_method_types = checkout.payment_method_types, customer_details = checkout.customer_details, cancel_url = checkout.cancel_url, success_url = checkout.success_url, url = checkout.url;
                        payment = new Payment_1.default(amount, currency, payment_method_types, customer, customer_details, cancel_url, success_url, url);
                        return [2 /*return*/, payment];
                }
            });
        });
    };
    return PaymentServices;
}());
exports.default = PaymentServices;
