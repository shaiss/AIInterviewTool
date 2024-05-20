import { Injectable } from "@nestjs/common";
import { SupervisoryResultDto } from "../supervisory/SupervisoryResultDto";

@Injectable()
export class SupervisoryService {
  constructor() {}
  async Supervise(args: string): Promise<SupervisoryResultDto> {
    throw new Error("Not implemented");
  }
}
