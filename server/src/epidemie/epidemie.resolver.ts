import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EpidemieResolverBase } from "./base/epidemie.resolver.base";
import { Epidemie } from "./base/Epidemie";
import { EpidemieService } from "./epidemie.service";

@graphql.Resolver(() => Epidemie)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EpidemieResolver extends EpidemieResolverBase {
  constructor(
    protected readonly service: EpidemieService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
