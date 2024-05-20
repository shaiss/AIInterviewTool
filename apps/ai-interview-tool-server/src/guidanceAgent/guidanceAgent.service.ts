import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuidanceAgentServiceBase } from "./base/guidanceAgent.service.base";

@Injectable()
export class GuidanceAgentService extends GuidanceAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
