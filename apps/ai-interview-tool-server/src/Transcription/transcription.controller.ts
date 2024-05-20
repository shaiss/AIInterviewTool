import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TranscriptionService } from "./transcription.service";

@swagger.ApiTags("transcriptions")
@common.Controller("transcriptions")
export class TranscriptionController {
  constructor(protected readonly service: TranscriptionService) {}

  @common.Post("/transcribe")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranscribeAudio(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TranscribeAudio(body);
      }
}
