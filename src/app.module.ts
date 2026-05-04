import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OutletModule } from './outlet/outlet.module';
import { SalesChannelModule } from './sales-channel/sales-channel.module';
import { SalesModule } from './sales/sales.module';
import { ExpenseModule } from './expense/expense.module';
import { PurchaseModule } from './purchase/purchase.module';
import { CapitalExpenseModule } from './capital-expense/capital-expense.module';
import { StockDailyModule } from './stock-daily/stock-daily.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: configService.get('NODE_ENV') === 'development',
      }),
    }),
    AuthModule,
    UserModule,
    ProductModule,
    OutletModule,
    SalesChannelModule,
    SalesModule,
    ExpenseModule,
    PurchaseModule,
    CapitalExpenseModule,
    StockDailyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
