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
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const purchase_entity_1 = require("../entities/purchase.entity");
let PurchaseService = class PurchaseService {
    purchaseRepository;
    constructor(purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }
    findAll() {
        return this.purchaseRepository.find();
    }
    async findOne(id) {
        const purchase = await this.purchaseRepository.findOne({ where: { id } });
        if (!purchase) {
            throw new common_1.NotFoundException('Purchase not found');
        }
        return purchase;
    }
    create(purchase) {
        if (purchase.price && purchase.qty && purchase.discount !== undefined) {
            purchase.total_price = (purchase.price * purchase.qty) - (purchase.discount || 0);
        }
        return this.purchaseRepository.save(purchase);
    }
    async update(id, purchase) {
        await this.purchaseRepository.update(id, purchase);
        return this.findOne(id);
    }
    async remove(id) {
        await this.purchaseRepository.delete(id);
    }
};
exports.PurchaseService = PurchaseService;
exports.PurchaseService = PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(purchase_entity_1.Purchase)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PurchaseService);
//# sourceMappingURL=purchase.service.js.map