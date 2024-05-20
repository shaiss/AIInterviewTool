import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ContextAnalysisResultDtoObject")
class ContextAnalysisResultDto {
    @Field(() => GraphQLJSON)
    entities!: InputJsonValue;
}

export { ContextAnalysisResultDto as ContextAnalysisResultDto };