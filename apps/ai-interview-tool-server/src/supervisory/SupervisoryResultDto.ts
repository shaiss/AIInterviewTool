import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("SupervisoryResultDtoObject")
class SupervisoryResultDto {
    @Field(() => GraphQLJSON)
    suggestedQuestions!: InputJsonValue;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    backgroundInfo!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    summary!: string;
}

export { SupervisoryResultDto as SupervisoryResultDto };