import * as graphql from "@nestjs/graphql";
import { GuidanceAgentResolverBase } from "./base/guidanceAgent.resolver.base";
import { GuidanceAgent } from "./base/GuidanceAgent";
import { GuidanceAgentService } from "./guidanceAgent.service";

@graphql.Resolver(() => GuidanceAgent)
export class GuidanceAgentResolver extends GuidanceAgentResolverBase {
  constructor(protected readonly service: GuidanceAgentService) {
    super(service);
  }
}
