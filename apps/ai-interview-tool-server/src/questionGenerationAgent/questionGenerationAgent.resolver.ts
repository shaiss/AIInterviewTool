import * as graphql from "@nestjs/graphql";
import { QuestionGenerationAgentResolverBase } from "./base/questionGenerationAgent.resolver.base";
import { QuestionGenerationAgent } from "./base/QuestionGenerationAgent";
import { QuestionGenerationAgentService } from "./questionGenerationAgent.service";

@graphql.Resolver(() => QuestionGenerationAgent)
export class QuestionGenerationAgentResolver extends QuestionGenerationAgentResolverBase {
  constructor(protected readonly service: QuestionGenerationAgentService) {
    super(service);
  }
}
