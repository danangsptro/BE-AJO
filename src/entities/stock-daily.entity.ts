import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Outlet } from './outlet.entity';

@Entity()
export class StockDaily {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'date' })
  date?: string;

  @Column()
  product_id?: number;

  @Column()
  outlet_id?: number;

  @Column('int')
  starting_stock?: number;

  @Column('int')
  ending_stock?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Outlet)
  @JoinColumn({ name: 'outlet_id' })
  outlet: Outlet;
}