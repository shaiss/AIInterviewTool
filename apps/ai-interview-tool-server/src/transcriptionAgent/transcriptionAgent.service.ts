import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranscriptionAgentServiceBase } from "./base/transcriptionAgent.service.base";

@Injectable()
export class TranscriptionAgentService extends TranscriptionAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
