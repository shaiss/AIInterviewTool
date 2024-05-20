import { Module } from "@nestjs/common";
import { GuidanceAgentModuleBase } from "./base/guidanceAgent.module.base";
import { GuidanceAgentService } from "./guidanceAgent.service";
import { GuidanceAgentController } from "./guidanceAgent.controller";
import { GuidanceAgentResolver } from "./guidanceAgent.resolver";

@Module({
  imports: [GuidanceAgentModuleBase],
  controllers: [GuidanceAgentController],
  providers: [GuidanceAgentService, GuidanceAgentResolver],
  exports: [GuidanceAgentService],
})
export class GuidanceAgentModule {}
