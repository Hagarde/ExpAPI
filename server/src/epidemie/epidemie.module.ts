import { Module } from "@nestjs/common";
import { EpidemieModuleBase } from "./base/epidemie.module.base";
import { EpidemieService } from "./epidemie.service";
import { EpidemieController } from "./epidemie.controller";
import { EpidemieResolver } from "./epidemie.resolver";

@Module({
  imports: [EpidemieModuleBase],
  controllers: [EpidemieController],
  providers: [EpidemieService, EpidemieResolver],
  exports: [EpidemieService],
})
export class EpidemieModule {}
