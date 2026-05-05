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
exports.SalesChannelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sales_channel_entity_1 = require("../entities/sales-channel.entity");
let SalesChannelService = class SalesChannelService {
    salesChannelRepository;
    constructor(salesChannelRepository) {
        this.salesChannelRepository = salesChannelRepository;
    }
    findAll() {
        return this.salesChannelRepository.find();
    }
    async findOne(id) {
        const salesChannel = await this.salesChannelRepository.findOne({ where: { id } });
        if (!salesChannel) {
            throw new common_1.NotFoundException('SalesChannel not found');
        }
        return salesChannel;
    }
    create(salesChannel) {
        return this.salesChannelRepository.save(salesChannel);
    }
    async update(id, salesChannel) {
        await this.salesChannelRepository.update(id, salesChannel);
        return this.findOne(id);
    }
    async remove(id) {
        await this.salesChannelRepository.delete(id);
    }
};
exports.SalesChannelService = SalesChannelService;
exports.SalesChannelService = SalesChannelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sales_channel_entity_1.SalesChannel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SalesChannelService);
//# sourceMappingURL=sales-channel.service.js.map