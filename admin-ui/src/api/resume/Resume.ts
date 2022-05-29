import { Experience } from "../experience/Experience";
import { Epidemie } from "../epidemie/Epidemie";

export type Resume = {
  acc: boolean;
  createdAt: Date;
  epsilon: number | null;
  experiences?: Array<Experience>;
  id: string;
  infecteInitiale?: Array<"Region1" | "Region2" | "Region3" | "Region4">;
  proportionInitiale: number;
  situationInitiale?:
    | "Confinement"
    | "FluxGeo"
    | "FluxGenerationelle"
    | "Libre"
    | null;
  virus?: Epidemie;
};
