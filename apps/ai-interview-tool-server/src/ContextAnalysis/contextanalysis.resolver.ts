import * as graphql from "@nestjs/graphql";
import { ContextAnalysisResultDto } from "../contextAnalysis/ContextAnalysisResultDto";
import { ContextAnalysisService } from "./contextanalysis.service";

export class ContextAnalysisResolver {
  constructor(protected readonly service: ContextAnalysisService) {}

  @graphql.Mutation(() => ContextAnalysisResultDto)
  async AnalyzeText(
    @graphql.Args()
    args: string
  ): Promise<ContextAnalysisResultDto> {
    return this.service.AnalyzeText(args);
  }
}
