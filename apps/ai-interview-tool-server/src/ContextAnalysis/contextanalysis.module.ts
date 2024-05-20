import { Module } from "@nestjs/common";
import { ContextAnalysisService } from "./contextanalysis.service";
import { ContextAnalysisController } from "./contextanalysis.controller";
import { ContextAnalysisResolver } from "./contextanalysis.resolver";

@Module({
  controllers: [ContextAnalysisController],
  providers: [ContextAnalysisService, ContextAnalysisResolver],
  exports: [ContextAnalysisService],
})
export class ContextAnalysisModule {}
