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
exports.SalesChannelController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sales_channel_service_1 = require("./sales-channel.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_guard_1 = require("../auth/role.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let SalesChannelController = class SalesChannelController {
    salesChannelService;
    constructor(salesChannelService) {
        this.salesChannelService = salesChannelService;
    }
    findAll() {
        return this.salesChannelService.findAll();
    }
    findOne(id) {
        return this.salesChannelService.findOne(+id);
    }
    create(salesChannel) {
        return this.salesChannelService.create(salesChannel);
    }
    update(id, salesChannel) {
        return this.salesChannelService.update(+id, salesChannel);
    }
    remove(id) {
        return this.salesChannelService.remove(+id);
    }
};
exports.SalesChannelController = SalesChannelController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sales channels' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of sales channels' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalesChannelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sales channel by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sales channel found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales channel not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesChannelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new sales channel' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sales channel created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SalesChannelController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update sales channel by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sales channel updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales channel not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SalesChannelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('owner', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete sales channel by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sales channel deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales channel not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesChannelController.prototype, "remove", null);
exports.SalesChannelController = SalesChannelController = __decorate([
    (0, swagger_1.ApiTags)('sales-channels'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('sales-channels'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [sales_channel_service_1.SalesChannelService])
], SalesChannelController);
//# sourceMappingURL=sales-channel.controller.js.map