import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ExperienceWhereInput = {
  id?: StringFilter;
  region1?: JsonFilter;
  region2?: JsonFilter;
  region3?: JsonFilter;
  region4?: JsonFilter;
  resume?: ResumeWhereUniqueInput;
  t?: IntNullableFilter;
  tests?: JsonFilter;
};
