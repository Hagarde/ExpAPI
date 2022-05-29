import { ExperienceUpdateManyWithoutResumesInput } from "./ExperienceUpdateManyWithoutResumesInput";
import { EpidemieWhereUniqueInput } from "../epidemie/EpidemieWhereUniqueInput";

export type ResumeUpdateInput = {
  acc?: boolean;
  epsilon?: number | null;
  experiences?: ExperienceUpdateManyWithoutResumesInput;
  infecteInitiale?: Array<"Region1" | "Region2" | "Region3" | "Region4">;
  proportionInitiale?: number;
  situationInitiale?:
    | "Confinement"
    | "FluxGeo"
    | "FluxGenerationelle"
    | "Libre"
    | null;
  virus?: EpidemieWhereUniqueInput;
};
