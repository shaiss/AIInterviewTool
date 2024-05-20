import { Module } from "@nestjs/common";
import { TranscriptionService } from "./transcription.service";
import { TranscriptionController } from "./transcription.controller";
import { TranscriptionResolver } from "./transcription.resolver";

@Module({
  controllers: [TranscriptionController],
  providers: [TranscriptionService, TranscriptionResolver],
  exports: [TranscriptionService],
})
export class TranscriptionModule {}
