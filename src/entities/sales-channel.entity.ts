import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sales } from './sales.entity';

@Entity()
export class SalesChannel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @OneToMany(() => Sales, sales => sales.channel)
  sales?: Sales[];
}