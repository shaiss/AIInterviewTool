import * as graphql from "@nestjs/graphql";
import { TranscriptionAgentResolverBase } from "./base/transcriptionAgent.resolver.base";
import { TranscriptionAgent } from "./base/TranscriptionAgent";
import { TranscriptionAgentService } from "./transcriptionAgent.service";

@graphql.Resolver(() => TranscriptionAgent)
export class TranscriptionAgentResolver extends TranscriptionAgentResolverBase {
  constructor(protected readonly service: TranscriptionAgentService) {
    super(service);
  }
}
