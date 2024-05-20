/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ContextAnalysisAgent } from "./ContextAnalysisAgent";
import { ContextAnalysisAgentCountArgs } from "./ContextAnalysisAgentCountArgs";
import { ContextAnalysisAgentFindManyArgs } from "./ContextAnalysisAgentFindManyArgs";
import { ContextAnalysisAgentFindUniqueArgs } from "./ContextAnalysisAgentFindUniqueArgs";
import { CreateContextAnalysisAgentArgs } from "./CreateContextAnalysisAgentArgs";
import { UpdateContextAnalysisAgentArgs } from "./UpdateContextAnalysisAgentArgs";
import { DeleteContextAnalysisAgentArgs } from "./DeleteContextAnalysisAgentArgs";
import { ContextAnalysisAgentService } from "../contextAnalysisAgent.service";
@graphql.Resolver(() => ContextAnalysisAgent)
export class ContextAnalysisAgentResolverBase {
  constructor(protected readonly service: ContextAnalysisAgentService) {}

  async _contextAnalysisAgentsMeta(
    @graphql.Args() args: ContextAnalysisAgentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ContextAnalysisAgent])
  async contextAnalysisAgents(
    @graphql.Args() args: ContextAnalysisAgentFindManyArgs
  ): Promise<ContextAnalysisAgent[]> {
    return this.service.contextAnalysisAgents(args);
  }

  @graphql.Query(() => ContextAnalysisAgent, { nullable: true })
  async contextAnalysisAgent(
    @graphql.Args() args: ContextAnalysisAgentFindUniqueArgs
  ): Promise<ContextAnalysisAgent | null> {
    const result = await this.service.contextAnalysisAgent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ContextAnalysisAgent)
  async createContextAnalysisAgent(
    @graphql.Args() args: CreateContextAnalysisAgentArgs
  ): Promise<ContextAnalysisAgent> {
    return await this.service.createContextAnalysisAgent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ContextAnalysisAgent)
  async updateContextAnalysisAgent(
    @graphql.Args() args: UpdateContextAnalysisAgentArgs
  ): Promise<ContextAnalysisAgent | null> {
    try {
      return await this.service.updateContextAnalysisAgent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ContextAnalysisAgent)
  async deleteContextAnalysisAgent(
    @graphql.Args() args: DeleteContextAnalysisAgentArgs
  ): Promise<ContextAnalysisAgent | null> {
    try {
      return await this.service.deleteContextAnalysisAgent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
