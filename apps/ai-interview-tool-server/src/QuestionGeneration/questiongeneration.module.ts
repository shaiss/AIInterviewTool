import { Module } from "@nestjs/common";
import { QuestionGenerationService } from "./questiongeneration.service";
import { QuestionGenerationController } from "./questiongeneration.controller";
import { QuestionGenerationResolver } from "./questiongeneration.resolver";

@Module({
  controllers: [QuestionGenerationController],
  providers: [QuestionGenerationService, QuestionGenerationResolver],
  exports: [QuestionGenerationService],
})
export class QuestionGenerationModule {}
