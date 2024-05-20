import { Module } from "@nestjs/common";
import { QuestionGenerationAgentModuleBase } from "./base/questionGenerationAgent.module.base";
import { QuestionGenerationAgentService } from "./questionGenerationAgent.service";
import { QuestionGenerationAgentController } from "./questionGenerationAgent.controller";
import { QuestionGenerationAgentResolver } from "./questionGenerationAgent.resolver";

@Module({
  imports: [QuestionGenerationAgentModuleBase],
  controllers: [QuestionGenerationAgentController],
  providers: [QuestionGenerationAgentService, QuestionGenerationAgentResolver],
  exports: [QuestionGenerationAgentService],
})
export class QuestionGenerationAgentModule {}
