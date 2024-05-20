import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranscriptionAgentService } from "./transcriptionAgent.service";
import { TranscriptionAgentControllerBase } from "./base/transcriptionAgent.controller.base";

@swagger.ApiTags("transcriptionAgents")
@common.Controller("transcriptionAgents")
export class TranscriptionAgentController extends TranscriptionAgentControllerBase {
  constructor(protected readonly service: TranscriptionAgentService) {
    super(service);
  }
}
