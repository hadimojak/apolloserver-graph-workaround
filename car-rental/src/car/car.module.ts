import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Car])],
  providers: [CarService, CarResolver],
})
export class CarModule {}
