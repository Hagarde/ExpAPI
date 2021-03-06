/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Epidemie, Resume } from "@prisma/client";

export class EpidemieServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EpidemieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieFindManyArgs>
  ): Promise<number> {
    return this.prisma.epidemie.count(args);
  }

  async findMany<T extends Prisma.EpidemieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieFindManyArgs>
  ): Promise<Epidemie[]> {
    return this.prisma.epidemie.findMany(args);
  }
  async findOne<T extends Prisma.EpidemieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieFindUniqueArgs>
  ): Promise<Epidemie | null> {
    return this.prisma.epidemie.findUnique(args);
  }
  async create<T extends Prisma.EpidemieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieCreateArgs>
  ): Promise<Epidemie> {
    return this.prisma.epidemie.create<T>(args);
  }
  async update<T extends Prisma.EpidemieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieUpdateArgs>
  ): Promise<Epidemie> {
    return this.prisma.epidemie.update<T>(args);
  }
  async delete<T extends Prisma.EpidemieDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EpidemieDeleteArgs>
  ): Promise<Epidemie> {
    return this.prisma.epidemie.delete(args);
  }

  async findResumes(
    parentId: string,
    args: Prisma.ResumeFindManyArgs
  ): Promise<Resume[]> {
    return this.prisma.epidemie
      .findUnique({
        where: { id: parentId },
      })
      .resumes(args);
  }
}
