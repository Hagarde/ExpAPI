/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResumeWhereInput } from "./ResumeWhereInput";
import { Type } from "class-transformer";
import { ResumeOrderByInput } from "./ResumeOrderByInput";

@ArgsType()
class ResumeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResumeWhereInput,
  })
  @Field(() => ResumeWhereInput, { nullable: true })
  @Type(() => ResumeWhereInput)
  where?: ResumeWhereInput;

  @ApiProperty({
    required: false,
    type: [ResumeOrderByInput],
  })
  @Field(() => [ResumeOrderByInput], { nullable: true })
  @Type(() => ResumeOrderByInput)
  orderBy?: Array<ResumeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ResumeFindManyArgs };