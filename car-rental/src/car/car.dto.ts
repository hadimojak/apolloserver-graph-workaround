import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
    @Field()
    brand: string;

    @Field()
    model: string;

    @Field(() => Int)
    year: number;
}
