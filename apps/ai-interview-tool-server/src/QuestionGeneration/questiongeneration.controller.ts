import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QuestionGenerationService } from "./questiongeneration.service";

@swagger.ApiTags("questionGenerations")
@common.Controller("questionGenerations")
export class QuestionGenerationController {
  constructor(protected readonly service: QuestionGenerationService) {}

  @common.Post("/generate-question")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateQuestion(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateQuestion(body);
      }
}
