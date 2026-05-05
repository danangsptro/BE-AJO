"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockDailyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const stock_daily_entity_1 = require("../entities/stock-daily.entity");
const stock_daily_service_1 = require("./stock-daily.service");
const stock_daily_controller_1 = require("./stock-daily.controller");
let StockDailyModule = class StockDailyModule {
};
exports.StockDailyModule = StockDailyModule;
exports.StockDailyModule = StockDailyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([stock_daily_entity_1.StockDaily])],
        providers: [stock_daily_service_1.StockDailyService],
        controllers: [stock_daily_controller_1.StockDailyController],
    })
], StockDailyModule);
//# sourceMappingURL=stock-daily.module.js.map