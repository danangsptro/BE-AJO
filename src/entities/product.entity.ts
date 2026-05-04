import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesItem } from './sales-item.entity';
import { StockDaily } from './stock-daily.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  hpp?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @OneToMany(() => SalesItem, salesItem => salesItem.product)
  salesItems?: SalesItem[];

  @OneToMany(() => StockDaily, stockDaily => stockDaily.product)
  stockDailies?: StockDaily[];
}