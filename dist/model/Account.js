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
var User_1 = __importDefault(require("./User"));
var Acccount = /** @class */ (function () {
    function Acccount() {
        if (!this.id_account) {
            this.id_account = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Acccount.prototype, "id_account", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_user', referencedColumnName: 'id_user' }),
        __metadata("design:type", User_1.default)
    ], Acccount.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Acccount.prototype, "balance", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Acccount.prototype, "coin", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Acccount.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Acccount.prototype, "updated_at", void 0);
    Acccount = __decorate([
        (0, typeorm_1.Entity)('account'),
        __metadata("design:paramtypes", [])
    ], Acccount);
    return Acccount;
}());
exports.default = Acccount;
