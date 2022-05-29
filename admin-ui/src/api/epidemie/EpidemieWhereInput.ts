import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ResumeListRelationFilter } from "../resume/ResumeListRelationFilter";

export type EpidemieWhereInput = {
  duree?: FloatNullableFilter;
  id?: StringFilter;
  indiceIncidence?: FloatFilter;
  resumes?: ResumeListRelationFilter;
};
