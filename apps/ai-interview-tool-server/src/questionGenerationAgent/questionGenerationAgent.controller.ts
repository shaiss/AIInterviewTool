import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestionGenerationAgentService } from "./questionGenerationAgent.service";
import { QuestionGenerationAgentControllerBase } from "./base/questionGenerationAgent.controller.base";

@swagger.ApiTags("questionGenerationAgents")
@common.Controller("questionGenerationAgents")
export class QuestionGenerationAgentController extends QuestionGenerationAgentControllerBase {
  constructor(protected readonly service: QuestionGenerationAgentService) {
    super(service);
  }
}
