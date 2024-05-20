import { Module } from "@nestjs/common";
import { SupervisoryAgentModuleBase } from "./base/supervisoryAgent.module.base";
import { SupervisoryAgentService } from "./supervisoryAgent.service";
import { SupervisoryAgentController } from "./supervisoryAgent.controller";
import { SupervisoryAgentResolver } from "./supervisoryAgent.resolver";

@Module({
  imports: [SupervisoryAgentModuleBase],
  controllers: [SupervisoryAgentController],
  providers: [SupervisoryAgentService, SupervisoryAgentResolver],
  exports: [SupervisoryAgentService],
})
export class SupervisoryAgentModule {}
