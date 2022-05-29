import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ResumeResolverBase } from "./base/resume.resolver.base";
import { Resume } from "./base/Resume";
import { ResumeService } from "./resume.service";

@graphql.Resolver(() => Resume)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ResumeResolver extends ResumeResolverBase {
  constructor(
    protected readonly service: ResumeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
