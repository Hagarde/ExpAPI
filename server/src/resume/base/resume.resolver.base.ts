/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateResumeArgs } from "./CreateResumeArgs";
import { UpdateResumeArgs } from "./UpdateResumeArgs";
import { DeleteResumeArgs } from "./DeleteResumeArgs";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeFindUniqueArgs } from "./ResumeFindUniqueArgs";
import { Resume } from "./Resume";
import { ExperienceFindManyArgs } from "../../experience/base/ExperienceFindManyArgs";
import { Experience } from "../../experience/base/Experience";
import { Epidemie } from "../../epidemie/base/Epidemie";
import { ResumeService } from "../resume.service";

@graphql.Resolver(() => Resume)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ResumeResolverBase {
  constructor(
    protected readonly service: ResumeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async _resumesMeta(
    @graphql.Args() args: ResumeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Resume])
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async resumes(@graphql.Args() args: ResumeFindManyArgs): Promise<Resume[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Resume, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "own",
  })
  async resume(
    @graphql.Args() args: ResumeFindUniqueArgs
  ): Promise<Resume | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "create",
    possession: "any",
  })
  async createResume(@graphql.Args() args: CreateResumeArgs): Promise<Resume> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        virus: {
          connect: args.data.virus,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  async updateResume(
    @graphql.Args() args: UpdateResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          virus: {
            connect: args.data.virus,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "delete",
    possession: "any",
  })
  async deleteResume(
    @graphql.Args() args: DeleteResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Experience])
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "any",
  })
  async experiences(
    @graphql.Parent() parent: Resume,
    @graphql.Args() args: ExperienceFindManyArgs
  ): Promise<Experience[]> {
    const results = await this.service.findExperiences(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Epidemie, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "any",
  })
  async virus(@graphql.Parent() parent: Resume): Promise<Epidemie | null> {
    const result = await this.service.getVirus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
