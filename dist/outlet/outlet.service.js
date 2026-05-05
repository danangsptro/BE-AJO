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
exports.OutletService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const outlet_entity_1 = require("../entities/outlet.entity");
let OutletService = class OutletService {
    outletRepository;
    constructor(outletRepository) {
        this.outletRepository = outletRepository;
    }
    findAll() {
        return this.outletRepository.find();
    }
    async findOne(id) {
        const outlet = await this.outletRepository.findOne({ where: { id } });
        if (!outlet) {
            throw new common_1.NotFoundException('Outlet not found');
        }
        return outlet;
    }
    create(outlet) {
        return this.outletRepository.save(outlet);
    }
    async update(id, outlet) {
        await this.outletRepository.update(id, outlet);
        return this.findOne(id);
    }
    async remove(id) {
        await this.outletRepository.delete(id);
    }
};
exports.OutletService = OutletService;
exports.OutletService = OutletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(outlet_entity_1.Outlet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OutletService);
//# sourceMappingURL=outlet.service.js.map