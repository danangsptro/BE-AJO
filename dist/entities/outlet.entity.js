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
exports.Outlet = void 0;
const typeorm_1 = require("typeorm");
const sales_entity_1 = require("./sales.entity");
const capital_expense_entity_1 = require("./capital-expense.entity");
let Outlet = class Outlet {
    id;
    name;
    address;
    phone;
    created_at;
    sales;
    capitalExpenses;
};
exports.Outlet = Outlet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Outlet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Outlet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Outlet.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Outlet.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Outlet.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sales_entity_1.Sales, sales => sales.outlet),
    __metadata("design:type", Array)
], Outlet.prototype, "sales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => capital_expense_entity_1.CapitalExpense, capitalExpense => capitalExpense.outlet),
    __metadata("design:type", Array)
], Outlet.prototype, "capitalExpenses", void 0);
exports.Outlet = Outlet = __decorate([
    (0, typeorm_1.Entity)()
], Outlet);
//# sourceMappingURL=outlet.entity.js.map