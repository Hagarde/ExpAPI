import { Module } from "@nestjs/common";
import { ResumeModuleBase } from "./base/resume.module.base";
import { ResumeService } from "./resume.service";
import { ResumeController } from "./resume.controller";
import { ResumeResolver } from "./resume.resolver";

@Module({
  imports: [ResumeModuleBase],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeResolver],
  exports: [ResumeService],
})
export class ResumeModule {}
