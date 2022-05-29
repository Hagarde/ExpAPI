import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResumeService } from "./resume.service";
import { ResumeControllerBase } from "./base/resume.controller.base";

@swagger.ApiTags("resumes")
@common.Controller("resumes")
export class ResumeController extends ResumeControllerBase {
  constructor(
    protected readonly service: ResumeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
