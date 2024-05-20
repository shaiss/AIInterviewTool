import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ContextAnalysisService } from "./contextanalysis.service";
import { ContextAnalysisResultDto } from "../contextAnalysis/ContextAnalysisResultDto";

@swagger.ApiTags("contextAnalyses")
@common.Controller("contextAnalyses")
export class ContextAnalysisController {
  constructor(protected readonly service: ContextAnalysisService) {}

  @common.Post("/analyze")
  @swagger.ApiOkResponse({
    type: ContextAnalysisResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzeText(
    @common.Body()
    body: string
  ): Promise<ContextAnalysisResultDto> {
        return this.service.AnalyzeText(body);
      }
}
