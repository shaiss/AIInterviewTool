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
import { ContextAnalysisAgentWhereUniqueInput } from "./ContextAnalysisAgentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContextAnalysisAgentUpdateInput } from "./ContextAnalysisAgentUpdateInput";

@ArgsType()
class UpdateContextAnalysisAgentArgs {
  @ApiProperty({
    required: true,
    type: () => ContextAnalysisAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContextAnalysisAgentWhereUniqueInput)
  @Field(() => ContextAnalysisAgentWhereUniqueInput, { nullable: false })
  where!: ContextAnalysisAgentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContextAnalysisAgentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContextAnalysisAgentUpdateInput)
  @Field(() => ContextAnalysisAgentUpdateInput, { nullable: false })
  data!: ContextAnalysisAgentUpdateInput;
}

export { UpdateContextAnalysisAgentArgs as UpdateContextAnalysisAgentArgs };
