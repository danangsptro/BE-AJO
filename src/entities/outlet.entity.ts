import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sales } from './sales.entity';
import { CapitalExpense } from './capital-expense.entity';

@Entity()
export class Outlet {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @OneToMany(() => Sales, sales => sales.outlet)
  sales?: Sales[];

  @OneToMany(() => CapitalExpense, capitalExpense => capitalExpense.outlet)
  capitalExpenses?: CapitalExpense[];
}