import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupervisoryAgentServiceBase } from "./base/supervisoryAgent.service.base";

@Injectable()
export class SupervisoryAgentService extends SupervisoryAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
