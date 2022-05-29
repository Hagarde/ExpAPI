/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { ExperienceCreateNestedManyWithoutResumesInput } from "./ExperienceCreateNestedManyWithoutResumesInput";
import { Type } from "class-transformer";
import { EnumResumeInfecteInitiale } from "./EnumResumeInfecteInitiale";
import { EnumResumeSituationInitiale } from "./EnumResumeSituationInitiale";
import { EpidemieWhereUniqueInput } from "../../epidemie/base/EpidemieWhereUniqueInput";
@InputType()
class ResumeCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  acc!: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  epsilon?: number | null;

  @ApiProperty({
    required: false,
    type: () => ExperienceCreateNestedManyWithoutResumesInput,
  })
  @ValidateNested()
  @Type(() => ExperienceCreateNestedManyWithoutResumesInput)
  @IsOptional()
  @Field(() => ExperienceCreateNestedManyWithoutResumesInput, {
    nullable: true,
  })
  experiences?: ExperienceCreateNestedManyWithoutResumesInput;

  @ApiProperty({
    required: false,
    enum: EnumResumeInfecteInitiale,
    isArray: true,
  })
  @IsEnum(EnumResumeInfecteInitiale, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumResumeInfecteInitiale], {
    nullable: true,
  })
  infecteInitiale?: Array<"Region1" | "Region2" | "Region3" | "Region4">;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  proportionInitiale!: number;

  @ApiProperty({
    required: false,
    enum: EnumResumeSituationInitiale,
  })
  @IsEnum(EnumResumeSituationInitiale)
  @IsOptional()
  @Field(() => EnumResumeSituationInitiale, {
    nullable: true,
  })
  situationInitiale?:
    | "Confinement"
    | "FluxGeo"
    | "FluxGenerationelle"
    | "Libre"
    | null;

  @ApiProperty({
    required: true,
    type: () => EpidemieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EpidemieWhereUniqueInput)
  @Field(() => EpidemieWhereUniqueInput)
  virus!: EpidemieWhereUniqueInput;
}
export { ResumeCreateInput };
