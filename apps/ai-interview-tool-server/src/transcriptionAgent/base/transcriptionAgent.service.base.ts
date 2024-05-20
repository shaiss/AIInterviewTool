/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  TranscriptionAgent as PrismaTranscriptionAgent,
} from "@prisma/client";

export class TranscriptionAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TranscriptionAgentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.transcriptionAgent.count(args);
  }

  async transcriptionAgents<T extends Prisma.TranscriptionAgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranscriptionAgentFindManyArgs>
  ): Promise<PrismaTranscriptionAgent[]> {
    return this.prisma.transcriptionAgent.findMany<Prisma.TranscriptionAgentFindManyArgs>(
      args
    );
  }
  async transcriptionAgent<T extends Prisma.TranscriptionAgentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranscriptionAgentFindUniqueArgs>
  ): Promise<PrismaTranscriptionAgent | null> {
    return this.prisma.transcriptionAgent.findUnique(args);
  }
  async createTranscriptionAgent<T extends Prisma.TranscriptionAgentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranscriptionAgentCreateArgs>
  ): Promise<PrismaTranscriptionAgent> {
    return this.prisma.transcriptionAgent.create<T>(args);
  }
  async updateTranscriptionAgent<T extends Prisma.TranscriptionAgentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranscriptionAgentUpdateArgs>
  ): Promise<PrismaTranscriptionAgent> {
    return this.prisma.transcriptionAgent.update<T>(args);
  }
  async deleteTranscriptionAgent<T extends Prisma.TranscriptionAgentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranscriptionAgentDeleteArgs>
  ): Promise<PrismaTranscriptionAgent> {
    return this.prisma.transcriptionAgent.delete(args);
  }
}