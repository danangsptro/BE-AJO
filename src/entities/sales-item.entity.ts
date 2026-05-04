import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sales } from './sales.entity';
import { Product } from './product.entity';

@Entity()
export class SalesItem {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  sales_id?: number;

  @Column()
  product_id?: number;

  @Column('int')
  qty?: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price?: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  discount?: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total_price?: number;

  @Column('decimal', { precision: 10, scale: 2 })
  hpp?: number;

  @Column('decimal', { precision: 10, scale: 2 })
  profit?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @ManyToOne(() => Sales, sales => sales.salesItems)
  @JoinColumn({ name: 'sales_id' })
  sales?: Sales;

  @ManyToOne(() => Product, product => product.salesItems)
  @JoinColumn({ name: 'product_id' })
  product?: Product;
}