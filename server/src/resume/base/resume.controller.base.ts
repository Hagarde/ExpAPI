/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ResumeService } from "../resume.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ResumeCreateInput } from "./ResumeCreateInput";
import { ResumeWhereInput } from "./ResumeWhereInput";
import { ResumeWhereUniqueInput } from "./ResumeWhereUniqueInput";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeUpdateInput } from "./ResumeUpdateInput";
import { Resume } from "./Resume";
import { ExperienceFindManyArgs } from "../../experience/base/ExperienceFindManyArgs";
import { Experience } from "../../experience/base/Experience";
import { ExperienceWhereUniqueInput } from "../../experience/base/ExperienceWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ResumeControllerBase {
  constructor(
    protected readonly service: ResumeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resume })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ResumeCreateInput): Promise<Resume> {
    return await this.service.create({
      data: {
        ...data,

        virus: {
          connect: data.virus,
        },
      },
      select: {
        acc: true,
        createdAt: true,
        epsilon: true,
        id: true,
        infecteInitiale: true,
        proportionInitiale: true,
        situationInitiale: true,

        virus: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Resume] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ResumeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Resume[]> {
    const args = plainToClass(ResumeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        acc: true,
        createdAt: true,
        epsilon: true,
        id: true,
        infecteInitiale: true,
        proportionInitiale: true,
        situationInitiale: true,

        virus: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        acc: true,
        createdAt: true,
        epsilon: true,
        id: true,
        infecteInitiale: true,
        proportionInitiale: true,
        situationInitiale: true,

        virus: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() data: ResumeUpdateInput
  ): Promise<Resume | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          virus: {
            connect: data.virus,
          },
        },
        select: {
          acc: true,
          createdAt: true,
          epsilon: true,
          id: true,
          infecteInitiale: true,
          proportionInitiale: true,
          situationInitiale: true,

          virus: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          acc: true,
          createdAt: true,
          epsilon: true,
          id: true,
          infecteInitiale: true,
          proportionInitiale: true,
          situationInitiale: true,

          virus: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/experiences")
  @ApiNestedQuery(ExperienceFindManyArgs)
  async findManyExperiences(
    @common.Req() request: Request,
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Experience[]> {
    const query = plainToClass(ExperienceFindManyArgs, request.query);
    const results = await this.service.findExperiences(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        region1: true,
        region2: true,
        region3: true,
        region4: true,

        resume: {
          select: {
            id: true,
          },
        },

        t: true,
        tests: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/experiences")
  async connectExperiences(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ExperienceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      experiences: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/experiences")
  async updateExperiences(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ExperienceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      experiences: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/experiences")
  async disconnectExperiences(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ExperienceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      experiences: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}