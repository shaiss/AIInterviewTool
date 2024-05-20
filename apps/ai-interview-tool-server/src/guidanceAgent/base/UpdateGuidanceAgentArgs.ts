/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GuidanceAgentWhereUniqueInput } from "./GuidanceAgentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GuidanceAgentUpdateInput } from "./GuidanceAgentUpdateInput";

@ArgsType()
class UpdateGuidanceAgentArgs {
  @ApiProperty({
    required: true,
    type: () => GuidanceAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GuidanceAgentWhereUniqueInput)
  @Field(() => GuidanceAgentWhereUniqueInput, { nullable: false })
  where!: GuidanceAgentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GuidanceAgentUpdateInput,
  })
  @ValidateNested()
  @Type(() => GuidanceAgentUpdateInput)
  @Field(() => GuidanceAgentUpdateInput, { nullable: false })
  data!: GuidanceAgentUpdateInput;
}

export { UpdateGuidanceAgentArgs as UpdateGuidanceAgentArgs };