import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EpidemieServiceBase } from "./base/epidemie.service.base";

@Injectable()
export class EpidemieService extends EpidemieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
