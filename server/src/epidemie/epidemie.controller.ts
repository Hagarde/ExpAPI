import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EpidemieService } from "./epidemie.service";
import { EpidemieControllerBase } from "./base/epidemie.controller.base";

@swagger.ApiTags("epidemies")
@common.Controller("epidemies")
export class EpidemieController extends EpidemieControllerBase {
  constructor(
    protected readonly service: EpidemieService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
