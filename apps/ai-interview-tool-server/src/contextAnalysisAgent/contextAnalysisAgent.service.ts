import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContextAnalysisAgentServiceBase } from "./base/contextAnalysisAgent.service.base";

@Injectable()
export class ContextAnalysisAgentService extends ContextAnalysisAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
