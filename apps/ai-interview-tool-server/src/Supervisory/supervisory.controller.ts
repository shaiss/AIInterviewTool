import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SupervisoryService } from "./supervisory.service";
import { SupervisoryResultDto } from "../supervisory/SupervisoryResultDto";

@swagger.ApiTags("supervisories")
@common.Controller("supervisories")
export class SupervisoryController {
  constructor(protected readonly service: SupervisoryService) {}

  @common.Post("/supervise")
  @swagger.ApiOkResponse({
    type: SupervisoryResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Supervise(
    @common.Body()
    body: string
  ): Promise<SupervisoryResultDto> {
        return this.service.Supervise(body);
      }
}
