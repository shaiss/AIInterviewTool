import * as graphql from "@nestjs/graphql";
import { GuidanceService } from "./guidance.service";

export class GuidanceResolver {
  constructor(protected readonly service: GuidanceService) {}

  @graphql.Mutation(() => String)
  async Guide(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Guide(args);
  }

  @graphql.Mutation(() => String)
  async SubmitText(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubmitText(args);
  }
}
