import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContextAnalysisAgentService } from "./contextAnalysisAgent.service";
import { ContextAnalysisAgentControllerBase } from "./base/contextAnalysisAgent.controller.base";

@swagger.ApiTags("contextAnalysisAgents")
@common.Controller("contextAnalysisAgents")
export class ContextAnalysisAgentController extends ContextAnalysisAgentControllerBase {
  constructor(protected readonly service: ContextAnalysisAgentService) {
    super(service);
  }
}
