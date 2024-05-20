import { Module } from "@nestjs/common";
import { TranscriptionAgentModuleBase } from "./base/transcriptionAgent.module.base";
import { TranscriptionAgentService } from "./transcriptionAgent.service";
import { TranscriptionAgentController } from "./transcriptionAgent.controller";
import { TranscriptionAgentResolver } from "./transcriptionAgent.resolver";

@Module({
  imports: [TranscriptionAgentModuleBase],
  controllers: [TranscriptionAgentController],
  providers: [TranscriptionAgentService, TranscriptionAgentResolver],
  exports: [TranscriptionAgentService],
})
export class TranscriptionAgentModule {}
