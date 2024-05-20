import { Module } from "@nestjs/common";
import { GuidanceService } from "./guidance.service";
import { GuidanceController } from "./guidance.controller";
import { GuidanceResolver } from "./guidance.resolver";

@Module({
  controllers: [GuidanceController],
  providers: [GuidanceService, GuidanceResolver],
  exports: [GuidanceService],
})
export class GuidanceModule {}
