import * as graphql from "@nestjs/graphql";
import { TranscriptionService } from "./transcription.service";

export class TranscriptionResolver {
  constructor(protected readonly service: TranscriptionService) {}

  @graphql.Mutation(() => String)
  async TranscribeAudio(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TranscribeAudio(args);
  }
}
