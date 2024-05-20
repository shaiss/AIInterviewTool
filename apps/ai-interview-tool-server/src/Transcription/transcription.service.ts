import { Injectable } from "@nestjs/common";

@Injectable()
export class TranscriptionService {
  constructor() {}
  async TranscribeAudio(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
