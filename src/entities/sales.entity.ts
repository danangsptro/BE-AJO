import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Outlet } from './outlet.entity';
import { SalesChannel } from './sales-channel.entity';
import { SalesItem } from './sales-item.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'date' })
  date?: string;

  @Column()
  outlet_id?: number;

  @Column()
  channel_id?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @ManyToOne(() => Outlet, outlet => outlet.sales)
  @JoinColumn({ name: 'outlet_id' })
  outlet?: Outlet;

  @ManyToOne(() => SalesChannel, channel => channel.sales)
  @JoinColumn({ name: 'channel_id' })
  channel?: SalesChannel;

  @OneToMany(() => SalesItem, salesItem => salesItem.sales)
  salesItems?: SalesItem[];
}