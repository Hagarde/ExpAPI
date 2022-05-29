import { ExperienceCreateNestedManyWithoutResumesInput } from "./ExperienceCreateNestedManyWithoutResumesInput";
import { EpidemieWhereUniqueInput } from "../epidemie/EpidemieWhereUniqueInput";

export type ResumeCreateInput = {
  acc: boolean;
  epsilon?: number | null;
  experiences?: ExperienceCreateNestedManyWithoutResumesInput;
  infecteInitiale?: Array<"Region1" | "Region2" | "Region3" | "Region4">;
  proportionInitiale: number;
  situationInitiale?:
    | "Confinement"
    | "FluxGeo"
    | "FluxGenerationelle"
    | "Libre"
    | null;
  virus: EpidemieWhereUniqueInput;
};
