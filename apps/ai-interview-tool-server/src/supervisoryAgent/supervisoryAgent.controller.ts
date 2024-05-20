import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupervisoryAgentService } from "./supervisoryAgent.service";
import { SupervisoryAgentControllerBase } from "./base/supervisoryAgent.controller.base";

@swagger.ApiTags("supervisoryAgents")
@common.Controller("supervisoryAgents")
export class SupervisoryAgentController extends SupervisoryAgentControllerBase {
  constructor(protected readonly service: SupervisoryAgentService) {
    super(service);
  }
}
