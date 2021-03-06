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
import { ExperienceService } from "../experience.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ExperienceCreateInput } from "./ExperienceCreateInput";
import { ExperienceWhereInput } from "./ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "./ExperienceWhereUniqueInput";
import { ExperienceFindManyArgs } from "./ExperienceFindManyArgs";
import { ExperienceUpdateInput } from "./ExperienceUpdateInput";
import { Experience } from "./Experience";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ExperienceControllerBase {
  constructor(
    protected readonly service: ExperienceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Experience })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ExperienceCreateInput
  ): Promise<Experience> {
    return await this.service.create({
      data: {
        ...data,

        resume: data.resume
          ? {
              connect: data.resume,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Experience] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ExperienceFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Experience[]> {
    const args = plainToClass(ExperienceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ExperienceWhereUniqueInput,
    @common.Body() data: ExperienceUpdateInput
  ): Promise<Experience | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          resume: data.resume
            ? {
                connect: data.resume,
              }
            : undefined,
        },
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
    resource: "Experience",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
