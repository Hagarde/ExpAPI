import { BooleanFilter } from "../../util/BooleanFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ExperienceListRelationFilter } from "../experience/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { EpidemieWhereUniqueInput } from "../epidemie/EpidemieWhereUniqueInput";

export type ResumeWhereInput = {
  acc?: BooleanFilter;
  epsilon?: FloatNullableFilter;
  experiences?: ExperienceListRelationFilter;
  id?: StringFilter;
  proportionInitiale?: FloatFilter;
  situationInitiale?:
    | "Confinement"
    | "FluxGeo"
    | "FluxGenerationelle"
    | "Libre";
  virus?: EpidemieWhereUniqueInput;
};
