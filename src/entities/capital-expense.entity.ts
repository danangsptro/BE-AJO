import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Outlet } from './outlet.entity';

@Entity()
export class CapitalExpense {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'date' })
  date!: string;

  @Column('decimal', { precision: 15, scale: 2 })
  amount!: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  outlet_id?: number;

  @Column({ nullable: true })
  payment_method?: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;

  @ManyToOne(() => Outlet, (outlet) => outlet.capitalExpenses)
  @JoinColumn({ name: 'outlet_id' })
  outlet!: Outlet;
}
