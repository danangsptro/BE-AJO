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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalExpenseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const capital_expense_service_1 = require("./capital-expense.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_guard_1 = require("../auth/role.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let CapitalExpenseController = class CapitalExpenseController {
    capitalExpenseService;
    constructor(capitalExpenseService) {
        this.capitalExpenseService = capitalExpenseService;
    }
    findAll() {
        return this.capitalExpenseService.findAll();
    }
    findOne(id) {
        return this.capitalExpenseService.findOne(+id);
    }
    create(capitalExpense) {
        return this.capitalExpenseService.create(capitalExpense);
    }
    update(id, capitalExpense) {
        return this.capitalExpenseService.update(+id, capitalExpense);
    }
    remove(id) {
        return this.capitalExpenseService.remove(+id);
    }
};
exports.CapitalExpenseController = CapitalExpenseController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all capital expenses' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of capital expenses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CapitalExpenseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get capital expense by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Capital expense found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Capital expense not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CapitalExpenseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new capital expense' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Capital expense created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CapitalExpenseController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update capital expense by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Capital expense updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Capital expense not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CapitalExpenseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete capital expense by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Capital expense deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Capital expense not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CapitalExpenseController.prototype, "remove", null);
exports.CapitalExpenseController = CapitalExpenseController = __decorate([
    (0, swagger_1.ApiTags)('capital-expenses'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('capital-expenses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [capital_expense_service_1.CapitalExpenseService])
], CapitalExpenseController);
//# sourceMappingURL=capital-expense.controller.js.map