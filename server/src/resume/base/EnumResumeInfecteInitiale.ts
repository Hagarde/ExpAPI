/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumResumeInfecteInitiale {
  Region1 = "Region1",
  Region2 = "Region2",
  Region3 = "Region3",
  Region4 = "Region4",
}

registerEnumType(EnumResumeInfecteInitiale, {
  name: "EnumResumeInfecteInitiale",
});
