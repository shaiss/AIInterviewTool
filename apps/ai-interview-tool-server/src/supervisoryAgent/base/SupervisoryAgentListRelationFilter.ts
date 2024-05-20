/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisoryAgentWhereInput } from "./SupervisoryAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SupervisoryAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SupervisoryAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisoryAgentWhereInput)
  @IsOptional()
  @Field(() => SupervisoryAgentWhereInput, {
    nullable: true,
  })
  every?: SupervisoryAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupervisoryAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisoryAgentWhereInput)
  @IsOptional()
  @Field(() => SupervisoryAgentWhereInput, {
    nullable: true,
  })
  some?: SupervisoryAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupervisoryAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisoryAgentWhereInput)
  @IsOptional()
  @Field(() => SupervisoryAgentWhereInput, {
    nullable: true,
  })
  none?: SupervisoryAgentWhereInput;
}
export { SupervisoryAgentListRelationFilter as SupervisoryAgentListRelationFilter };
