import { Injectable } from "@nestjs/common";

@Injectable()
export class QuestionGenerationService {
  constructor() {}
  async GenerateQuestion(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
