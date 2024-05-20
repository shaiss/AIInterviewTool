import * as graphql from "@nestjs/graphql";
import { SupervisoryAgentResolverBase } from "./base/supervisoryAgent.resolver.base";
import { SupervisoryAgent } from "./base/SupervisoryAgent";
import { SupervisoryAgentService } from "./supervisoryAgent.service";

@graphql.Resolver(() => SupervisoryAgent)
export class SupervisoryAgentResolver extends SupervisoryAgentResolverBase {
  constructor(protected readonly service: SupervisoryAgentService) {
    super(service);
  }
}
