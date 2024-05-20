import * as graphql from "@nestjs/graphql";
import { SupervisoryResultDto } from "../supervisory/SupervisoryResultDto";
import { SupervisoryService } from "./supervisory.service";

export class SupervisoryResolver {
  constructor(protected readonly service: SupervisoryService) {}

  @graphql.Mutation(() => SupervisoryResultDto)
  async Supervise(
    @graphql.Args()
    args: string
  ): Promise<SupervisoryResultDto> {
    return this.service.Supervise(args);
  }
}
