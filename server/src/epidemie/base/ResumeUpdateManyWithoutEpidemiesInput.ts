/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ResumeWhereUniqueInput } from "../../resume/base/ResumeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ResumeUpdateManyWithoutEpidemiesInput {
  @Field(() => [ResumeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResumeWhereUniqueInput],
  })
  connect?: Array<ResumeWhereUniqueInput>;

  @Field(() => [ResumeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResumeWhereUniqueInput],
  })
  disconnect?: Array<ResumeWhereUniqueInput>;

  @Field(() => [ResumeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResumeWhereUniqueInput],
  })
  set?: Array<ResumeWhereUniqueInput>;
}
export { ResumeUpdateManyWithoutEpidemiesInput };