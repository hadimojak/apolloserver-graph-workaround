import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CreateCarInput } from './car.dto';

@Resolver(() => Car)
export class CarResolver {
    constructor(private readonly carService: CarService) { }

    @Query(() => [Car])
    async cars() {
        return this.carService.findAll();
    }

    @Query(() => Car)
    async car(@Args('id', { type: () => String }) id: string) {
        return this.carService.findOne(id);
    }

    @Mutation(() => Car)
    async createCar(@Args('input') input: CreateCarInput) {
        console.log('heeeeeeeeeerrrrrrrreeee');

        return this.carService.create(input);
    }
}
