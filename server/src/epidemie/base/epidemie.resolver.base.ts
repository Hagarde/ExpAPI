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
import { CreateEpidemieArgs } from "./CreateEpidemieArgs";
import { UpdateEpidemieArgs } from "./UpdateEpidemieArgs";
import { DeleteEpidemieArgs } from "./DeleteEpidemieArgs";
import { EpidemieFindManyArgs } from "./EpidemieFindManyArgs";
import { EpidemieFindUniqueArgs } from "./EpidemieFindUniqueArgs";
import { Epidemie } from "./Epidemie";
import { ResumeFindManyArgs } from "../../resume/base/ResumeFindManyArgs";
import { Resume } from "../../resume/base/Resume";
import { EpidemieService } from "../epidemie.service";

@graphql.Resolver(() => Epidemie)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EpidemieResolverBase {
  constructor(
    protected readonly service: EpidemieService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "any",
  })
  async _epidemiesMeta(
    @graphql.Args() args: EpidemieFindManyArgs
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
  @graphql.Query(() => [Epidemie])
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "any",
  })
  async epidemies(
    @graphql.Args() args: EpidemieFindManyArgs
  ): Promise<Epidemie[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Epidemie, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "read",
    possession: "own",
  })
  async epidemie(
    @graphql.Args() args: EpidemieFindUniqueArgs
  ): Promise<Epidemie | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Epidemie)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "create",
    possession: "any",
  })
  async createEpidemie(
    @graphql.Args() args: CreateEpidemieArgs
  ): Promise<Epidemie> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Epidemie)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "update",
    possession: "any",
  })
  async updateEpidemie(
    @graphql.Args() args: UpdateEpidemieArgs
  ): Promise<Epidemie | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Epidemie)
  @nestAccessControl.UseRoles({
    resource: "Epidemie",
    action: "delete",
    possession: "any",
  })
  async deleteEpidemie(
    @graphql.Args() args: DeleteEpidemieArgs
  ): Promise<Epidemie | null> {
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
  @graphql.ResolveField(() => [Resume])
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async resumes(
    @graphql.Parent() parent: Epidemie,
    @graphql.Args() args: ResumeFindManyArgs
  ): Promise<Resume[]> {
    const results = await this.service.findResumes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
