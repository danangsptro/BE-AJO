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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannel = void 0;
const typeorm_1 = require("typeorm");
const sales_entity_1 = require("./sales.entity");
let SalesChannel = class SalesChannel {
    id;
    name;
    sales;
};
exports.SalesChannel = SalesChannel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SalesChannel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sales_entity_1.Sales, sales => sales.channel),
    __metadata("design:type", Array)
], SalesChannel.prototype, "sales", void 0);
exports.SalesChannel = SalesChannel = __decorate([
    (0, typeorm_1.Entity)()
], SalesChannel);
//# sourceMappingURL=sales-channel.entity.js.map