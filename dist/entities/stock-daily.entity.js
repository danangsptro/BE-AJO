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
exports.StockDaily = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const outlet_entity_1 = require("./outlet.entity");
let StockDaily = class StockDaily {
    id;
    date;
    product_id;
    outlet_id;
    starting_stock;
    ending_stock;
    created_at;
    product;
    outlet;
};
exports.StockDaily = StockDaily;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StockDaily.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], StockDaily.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StockDaily.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StockDaily.prototype, "outlet_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], StockDaily.prototype, "starting_stock", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], StockDaily.prototype, "ending_stock", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], StockDaily.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.Product)
], StockDaily.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => outlet_entity_1.Outlet),
    (0, typeorm_1.JoinColumn)({ name: 'outlet_id' }),
    __metadata("design:type", outlet_entity_1.Outlet)
], StockDaily.prototype, "outlet", void 0);
exports.StockDaily = StockDaily = __decorate([
    (0, typeorm_1.Entity)()
], StockDaily);
//# sourceMappingURL=stock-daily.entity.js.map