import * as graphql from "@nestjs/graphql";
import { ContextAnalysisAgentResolverBase } from "./base/contextAnalysisAgent.resolver.base";
import { ContextAnalysisAgent } from "./base/ContextAnalysisAgent";
import { ContextAnalysisAgentService } from "./contextAnalysisAgent.service";

@graphql.Resolver(() => ContextAnalysisAgent)
export class ContextAnalysisAgentResolver extends ContextAnalysisAgentResolverBase {
  constructor(protected readonly service: ContextAnalysisAgentService) {
    super(service);
  }
}
