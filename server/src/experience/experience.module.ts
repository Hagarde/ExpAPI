import { Module } from "@nestjs/common";
import { ExperienceModuleBase } from "./base/experience.module.base";
import { ExperienceService } from "./experience.service";
import { ExperienceController } from "./experience.controller";
import { ExperienceResolver } from "./experience.resolver";

@Module({
  imports: [ExperienceModuleBase],
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceResolver],
  exports: [ExperienceService],
})
export class ExperienceModule {}
