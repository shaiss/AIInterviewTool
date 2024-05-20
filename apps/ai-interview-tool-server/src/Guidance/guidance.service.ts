import { Injectable } from "@nestjs/common";

@Injectable()
export class GuidanceService {
  constructor() {}
  async Guide(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitText(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
