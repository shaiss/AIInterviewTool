import { Module } from "@nestjs/common";
import { ContextAnalysisAgentModuleBase } from "./base/contextAnalysisAgent.module.base";
import { ContextAnalysisAgentService } from "./contextAnalysisAgent.service";
import { ContextAnalysisAgentController } from "./contextAnalysisAgent.controller";
import { ContextAnalysisAgentResolver } from "./contextAnalysisAgent.resolver";

@Module({
  imports: [ContextAnalysisAgentModuleBase],
  controllers: [ContextAnalysisAgentController],
  providers: [ContextAnalysisAgentService, ContextAnalysisAgentResolver],
  exports: [ContextAnalysisAgentService],
})
export class ContextAnalysisAgentModule {}
