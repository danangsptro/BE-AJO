"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalExpenseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const capital_expense_entity_1 = require("../entities/capital-expense.entity");
const capital_expense_service_1 = require("./capital-expense.service");
const capital_expense_controller_1 = require("./capital-expense.controller");
let CapitalExpenseModule = class CapitalExpenseModule {
};
exports.CapitalExpenseModule = CapitalExpenseModule;
exports.CapitalExpenseModule = CapitalExpenseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([capital_expense_entity_1.CapitalExpense])],
        providers: [capital_expense_service_1.CapitalExpenseService],
        controllers: [capital_expense_controller_1.CapitalExpenseController],
    })
], CapitalExpenseModule);
//# sourceMappingURL=capital-expense.module.js.map