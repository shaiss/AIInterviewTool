import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GuidanceService } from "./guidance.service";

@swagger.ApiTags("guidances")
@common.Controller("guidances")
export class GuidanceController {
  constructor(protected readonly service: GuidanceService) {}

  @common.Post("/guide")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Guide(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Guide(body);
      }

  @common.Post("/submitText")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitText(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubmitText(body);
      }
}
