import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Outlet } from './outlet.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'date' })
  date?: string;

  @Column()
  product_id?: number;

  @Column()
  outlet_id?: number;

  @Column('int')
  qty?: number;

  @Column('decimal', { precision: 15, scale: 2 })
  price?: number;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  discount?: number;

  @Column('decimal', { precision: 15, scale: 2 })
  total_price?: number;

  @Column({ nullable: true })
  note?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Outlet)
  @JoinColumn({ name: 'outlet_id' })
  outlet: Outlet;
}