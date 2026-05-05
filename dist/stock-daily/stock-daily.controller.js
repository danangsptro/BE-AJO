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
exports.StockDailyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const stock_daily_service_1 = require("./stock-daily.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_guard_1 = require("../auth/role.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let StockDailyController = class StockDailyController {
    stockDailyService;
    constructor(stockDailyService) {
        this.stockDailyService = stockDailyService;
    }
    findAll() {
        return this.stockDailyService.findAll();
    }
    findOne(id) {
        return this.stockDailyService.findOne(+id);
    }
    create(stockDaily) {
        return this.stockDailyService.create(stockDaily);
    }
    update(id, stockDaily) {
        return this.stockDailyService.update(+id, stockDaily);
    }
    remove(id) {
        return this.stockDailyService.remove(+id);
    }
};
exports.StockDailyController = StockDailyController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all daily stocks' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of daily stocks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockDailyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get daily stock by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daily stock found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Daily stock not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockDailyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('owner', 'admin', 'staff'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new daily stock record' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Daily stock created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StockDailyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update daily stock by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daily stock updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Daily stock not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StockDailyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete daily stock by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daily stock deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Daily stock not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockDailyController.prototype, "remove", null);
exports.StockDailyController = StockDailyController = __decorate([
    (0, swagger_1.ApiTags)('stock-daily'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('stock-daily'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [stock_daily_service_1.StockDailyService])
], StockDailyController);
//# sourceMappingURL=stock-daily.controller.js.map