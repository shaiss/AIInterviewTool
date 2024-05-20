import { Injectable } from "@nestjs/common";
import { ContextAnalysisResultDto } from "../contextAnalysis/ContextAnalysisResultDto";

@Injectable()
export class ContextAnalysisService {
  constructor() {}
  async AnalyzeText(args: string): Promise<ContextAnalysisResultDto> {
    throw new Error("Not implemented");
  }
}
