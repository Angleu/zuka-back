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
var Transation_1 = __importDefault(require("../model/Transation"));
var typeorm_1 = require("typeorm");
var Account_1 = __importDefault(require("../model/Account"));
var User_1 = __importDefault(require("../model/User"));
var TransitionServices = /** @class */ (function () {
    function TransitionServices() {
    }
    TransitionServices.prototype.execute = function (id_account) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, AccountRepository, account, transation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = (0, typeorm_1.getRepository)(Transation_1.default);
                        AccountRepository = (0, typeorm_1.getRepository)(Account_1.default);
                        return [4 /*yield*/, AccountRepository.findOne({ where: {
                                    id_account: id_account
                                } })];
                    case 1:
                        account = _a.sent();
                        if (!account)
                            return [2 /*return*/, new Error("Conta não Existe")];
                        return [4 /*yield*/, repository.find({
                                where: {
                                    from_user: account
                                }
                            })];
                    case 2:
                        transation = _a.sent();
                        return [2 /*return*/, transation];
                }
            });
        });
    };
    TransitionServices.prototype.save = function (_a) {
        var to_user = _a.to_user, email = _a.email, amount = _a.amount, type = _a.type, description = _a.description, coin = _a.coin;
        return __awaiter(this, void 0, void 0, function () {
            var repository, AccountRepository, t_user, userRepository, user, f_user, transation;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = (0, typeorm_1.getRepository)(Transation_1.default);
                        if (!to_user || !email)
                            return [2 /*return*/, new Error('Missing data to transition')];
                        if (!amount)
                            return [2 /*return*/, new Error('Missing value')];
                        AccountRepository = (0, typeorm_1.getRepository)(Account_1.default);
                        return [4 /*yield*/, AccountRepository.findOne({ where: { id_account: to_user } })];
                    case 1:
                        t_user = _b.sent();
                        userRepository = (0, typeorm_1.getRepository)(User_1.default);
                        return [4 /*yield*/, userRepository.findOne({ where: { email: email } })];
                    case 2:
                        user = _b.sent();
                        return [4 /*yield*/, AccountRepository.findOne({ where: {
                                    user: user
                                } })];
                    case 3:
                        f_user = _b.sent();
                        if (!t_user || !f_user)
                            return [2 /*return*/, new Error('Users does not exist')];
                        transation = repository.create({
                            amount: amount,
                            description: description,
                            type: type,
                            to_user: t_user,
                            from_user: f_user,
                            coin: coin
                        });
                        return [4 /*yield*/, repository.save(transation)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, AccountRepository.update({ id_account: f_user.id_account }, {
                                balance: f_user.balance + amount
                            })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, AccountRepository.update({ id_account: t_user.id_account }, {
                                balance: t_user.balance - amount
                            })];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, transation];
                }
            });
        });
    };
    return TransitionServices;
}());
exports.default = TransitionServices;
