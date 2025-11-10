import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
@Entity()
export class Car {
    @Field(() => String)
    @PrimaryKey({ type: 'uuid' })
    id: string = uuidv4();

    @Field()
    @Property()
    brand: string = '';

    @Field()
    @Property()
    model: string = '';

    @Field(() => Int)
    @Property()
    year: number = 0;

    @Field()
    @Property()
    isAvailable: boolean = true;
}
