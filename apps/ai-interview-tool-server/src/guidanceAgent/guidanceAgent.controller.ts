import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuidanceAgentService } from "./guidanceAgent.service";
import { GuidanceAgentControllerBase } from "./base/guidanceAgent.controller.base";

@swagger.ApiTags("guidanceAgents")
@common.Controller("guidanceAgents")
export class GuidanceAgentController extends GuidanceAgentControllerBase {
  constructor(protected readonly service: GuidanceAgentService) {
    super(service);
  }
}
