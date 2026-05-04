import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'date' })
  date?: string;

  @Column('decimal', { precision: 15, scale: 2 })
  amount?: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  note?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;
}