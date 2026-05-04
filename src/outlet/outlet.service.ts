import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outlet } from '../entities/outlet.entity';

@Injectable()
export class OutletService {
  constructor(
    @InjectRepository(Outlet)
    private outletRepository: Repository<Outlet>,
  ) {}

  findAll(): Promise<Outlet[]> {
    return this.outletRepository.find();
  }

  async findOne(id: number): Promise<Outlet> {
    const outlet = await this.outletRepository.findOne({ where: { id } });
    if (!outlet) {
      throw new NotFoundException('Outlet not found');
    }
    return outlet;
  }

  create(outlet: Partial<Outlet>): Promise<Outlet> {
    return this.outletRepository.save(outlet);
  }

  async update(id: number, outlet: Partial<Outlet>): Promise<Outlet> {
    await this.outletRepository.update(id, outlet);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.outletRepository.delete(id);
  }
}