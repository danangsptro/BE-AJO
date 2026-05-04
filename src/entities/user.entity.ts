import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  STAFF = 'staff',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  username?: string;

  @Column()
  password?: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role?: UserRole;
}