import * as graphql from "@nestjs/graphql";
import { QuestionGenerationService } from "./questiongeneration.service";

export class QuestionGenerationResolver {
  constructor(protected readonly service: QuestionGenerationService) {}

  @graphql.Mutation(() => String)
  async GenerateQuestion(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateQuestion(args);
  }
}
