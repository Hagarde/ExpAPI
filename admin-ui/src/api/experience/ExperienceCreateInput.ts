import { InputJsonValue } from "../../types";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ExperienceCreateInput = {
  region1?: InputJsonValue;
  region2?: InputJsonValue;
  region3?: InputJsonValue;
  region4?: InputJsonValue;
  resume?: ResumeWhereUniqueInput | null;
  t?: number | null;
  tests?: InputJsonValue;
};
