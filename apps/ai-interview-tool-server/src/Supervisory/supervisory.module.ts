import { Module } from "@nestjs/common";
import { SupervisoryService } from "./supervisory.service";
import { SupervisoryController } from "./supervisory.controller";
import { SupervisoryResolver } from "./supervisory.resolver";

@Module({
  controllers: [SupervisoryController],
  providers: [SupervisoryService, SupervisoryResolver],
  exports: [SupervisoryService],
})
export class SupervisoryModule {}
