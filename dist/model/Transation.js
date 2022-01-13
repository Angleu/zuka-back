"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Account_1 = __importDefault(require("./Account"));
var Transation = /** @class */ (function () {
    function Transation() {
        if (!this.id_transation) {
            this.id_transation = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Transation.prototype, "id_transation", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Account_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_account' }),
        __metadata("design:type", Account_1.default)
    ], Transation.prototype, "to_user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Account_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_account' }),
        __metadata("design:type", Account_1.default)
    ], Transation.prototype, "from_user", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Transation.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transation.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transation.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Transation.prototype, "created_at", void 0);
    Transation = __decorate([
        (0, typeorm_1.Entity)('transation'),
        __metadata("design:paramtypes", [])
    ], Transation);
    return Transation;
}());
exports.default = Transation;
