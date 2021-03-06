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
import { BooleanFilter } from "../../util/BooleanFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ExperienceListRelationFilter } from "../../experience/base/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { EnumResumeSituationInitiale } from "./EnumResumeSituationInitiale";
import { EpidemieWhereUniqueInput } from "../../epidemie/base/EpidemieWhereUniqueInput";
@InputType()
class ResumeWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  acc?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  epsilon?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExperienceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExperienceListRelationFilter)
  @IsOptional()
  @Field(() => ExperienceListRelationFilter, {
    nullable: true,
  })
  experiences?: ExperienceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  proportionInitiale?: FloatFilter;

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
    | "Libre";

  @ApiProperty({
    required: false,
    type: () => EpidemieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EpidemieWhereUniqueInput)
  @IsOptional()
  @Field(() => EpidemieWhereUniqueInput, {
    nullable: true,
  })
  virus?: EpidemieWhereUniqueInput;
}
export { ResumeWhereInput };
