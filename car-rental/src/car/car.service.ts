import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Car } from './car.entity';
import { CreateCarInput } from './car.dto';

@Injectable()
export class CarService {
  constructor(private readonly em: EntityManager) {}

  async create(input: CreateCarInput) {
    const car = this.em.create(Car, {
      ...input,
      isAvailable: true
    });
    await this.em.persistAndFlush(car);
    return car;
  }

  async findAll() {
    return this.em.find(Car, {});
  }

  async findOne(id: string) {
    return this.em.findOne(Car, { id });
  }
}
