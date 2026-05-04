import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesChannel } from '../entities/sales-channel.entity';

@Injectable()
export class SalesChannelService {
  constructor(
    @InjectRepository(SalesChannel)
    private salesChannelRepository: Repository<SalesChannel>,
  ) {}

  findAll(): Promise<SalesChannel[]> {
    return this.salesChannelRepository.find();
  }

  async findOne(id: number): Promise<SalesChannel> {
    const salesChannel = await this.salesChannelRepository.findOne({ where: { id } });
    if (!salesChannel) {
      throw new NotFoundException('SalesChannel not found');
    }
    return salesChannel;
  }

  create(salesChannel: Partial<SalesChannel>): Promise<SalesChannel> {
    return this.salesChannelRepository.save(salesChannel);
  }

  async update(id: number, salesChannel: Partial<SalesChannel>): Promise<SalesChannel> {
    await this.salesChannelRepository.update(id, salesChannel);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.salesChannelRepository.delete(id);
  }
}