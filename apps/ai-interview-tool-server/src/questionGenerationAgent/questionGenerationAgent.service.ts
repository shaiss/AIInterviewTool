import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestionGenerationAgentServiceBase } from "./base/questionGenerationAgent.service.base";

@Injectable()
export class QuestionGenerationAgentService extends QuestionGenerationAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
