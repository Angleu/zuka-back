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
var AccountServices_1 = __importDefault(require("../services/AccountServices"));
var AccountController = /** @class */ (function () {
    function AccountController() {
    }
    AccountController.prototype.hadleExecute = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var service, addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new AccountServices_1.default();
                        return [4 /*yield*/, service.execute()];
                    case 1:
                        addresses = _a.sent();
                        return [2 /*return*/, response.status(200).json(addresses)];
                }
            });
        });
    };
    AccountController.prototype.hadleSave = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_user, coin, service, address;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id_user = _a.id_user, coin = _a.coin;
                        service = new AccountServices_1.default();
                        return [4 /*yield*/, service.save({ id_user: id_user, coin: coin })];
                    case 1:
                        address = _b.sent();
                        if (address instanceof Error)
                            return [2 /*return*/, response.status(401).json(address.message)];
                        return [2 /*return*/, response.status(200).json(address)];
                }
            });
        });
    };
    AccountController.prototype.hadleExecuteOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id_user, service, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_user = request.params.id_user;
                        service = new AccountServices_1.default();
                        return [4 /*yield*/, service.executeOneAccount(id_user)];
                    case 1:
                        account = _a.sent();
                        if (account instanceof Error)
                            return [2 /*return*/, response.send(account.message).status(401)];
                        return [2 /*return*/, response.json(account).status(200)];
                }
            });
        });
    };
    AccountController.prototype.hadleDepositExecute = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_account, amount, coin, service, account;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id_account = _a.id_account, amount = _a.amount, coin = _a.coin;
                        service = new AccountServices_1.default();
                        return [4 /*yield*/, service.depositExecute(id_account, amount, coin)];
                    case 1:
                        account = _b.sent();
                        if (account instanceof Error)
                            return [2 /*return*/, response.json(account.message).status(401)];
                        return [2 /*return*/, response.json(account).status(200)];
                }
            });
        });
    };
    return AccountController;
}());
exports.default = AccountController;
