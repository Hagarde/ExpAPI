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
import { EpidemieService } from "../epidemie.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EpidemieCreateInput } from "./EpidemieCreateInput";
import { EpidemieWhereInput } from "./EpidemieWhereInput";
import { EpidemieWhereUniqueInput } from "./EpidemieWhereUniqueInput";
import { EpidemieFindManyArgs } from "./EpidemieFindManyArgs";
import { EpidemieUpdateInput } from "./EpidemieUpdateInput";
import { Epidemie } from "./Epidemie";
import { ResumeFindManyArgs } from "../../resume/base/ResumeFindManyArgs";
import { Resume } from "../../resume/base/Resume";
import { ResumeWhereUniqueInput } from "../../resume/base/ResumeWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EpidemieControllerBase {
  constructor(
    protected readonly service: EpidemieService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Epidemie })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: EpidemieCreateInput): Promise<Epidemie> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        duree: true,
        id: true,
        indiceIncidence: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Epidemie] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(EpidemieFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Epidemie[]> {
    const args = plainToClass(EpidemieFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        duree: true,
        id: true,
        indiceIncidence: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Epidemie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: EpidemieWhereUniqueInput
  ): Promise<Epidemie | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        duree: true,
        id: true,
        indiceIncidence: true,
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
    resource: "Epidemie",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Epidemie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: EpidemieWhereUniqueInput,
    @common.Body() data: EpidemieUpdateInput
  ): Promise<Epidemie | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          duree: true,
          id: true,
          indiceIncidence: true,
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
    resource: "Epidemie",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Epidemie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: EpidemieWhereUniqueInput
  ): Promise<Epidemie | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          duree: true,
          id: true,
          indiceIncidence: true,
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
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/resumes")
  @ApiNestedQuery(ResumeFindManyArgs)
  async findManyResumes(
    @common.Req() request: Request,
    @common.Param() params: EpidemieWhereUniqueInput
  ): Promise<Resume[]> {
    const query = plainToClass(ResumeFindManyArgs, request.query);
    const results = await this.service.findResumes(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/resumes")
  async connectResumes(
    @common.Param() params: EpidemieWhereUniqueInput,
    @common.Body() body: ResumeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resumes: {
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
    resource: "Epidemie",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/resumes")
  async updateResumes(
    @common.Param() params: EpidemieWhereUniqueInput,
    @common.Body() body: ResumeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resumes: {
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
    resource: "Epidemie",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/resumes")
  async disconnectResumes(
    @common.Param() params: EpidemieWhereUniqueInput,
    @common.Body() body: ResumeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resumes: {
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
