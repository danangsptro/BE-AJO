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
exports.Sales = void 0;
const typeorm_1 = require("typeorm");
const outlet_entity_1 = require("./outlet.entity");
const sales_channel_entity_1 = require("./sales-channel.entity");
const sales_item_entity_1 = require("./sales-item.entity");
let Sales = class Sales {
    id;
    date;
    outlet_id;
    channel_id;
    created_at;
    outlet;
    channel;
    salesItems;
};
exports.Sales = Sales;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sales.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Sales.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Sales.prototype, "outlet_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Sales.prototype, "channel_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Sales.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => outlet_entity_1.Outlet, outlet => outlet.sales),
    (0, typeorm_1.JoinColumn)({ name: 'outlet_id' }),
    __metadata("design:type", outlet_entity_1.Outlet)
], Sales.prototype, "outlet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sales_channel_entity_1.SalesChannel, channel => channel.sales),
    (0, typeorm_1.JoinColumn)({ name: 'channel_id' }),
    __metadata("design:type", sales_channel_entity_1.SalesChannel)
], Sales.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sales_item_entity_1.SalesItem, salesItem => salesItem.sales),
    __metadata("design:type", Array)
], Sales.prototype, "salesItems", void 0);
exports.Sales = Sales = __decorate([
    (0, typeorm_1.Entity)()
], Sales);
//# sourceMappingURL=sales.entity.js.map