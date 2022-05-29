import { ResumeCreateNestedManyWithoutEpidemiesInput } from "./ResumeCreateNestedManyWithoutEpidemiesInput";

export type EpidemieCreateInput = {
  duree?: number | null;
  indiceIncidence: number;
  resumes?: ResumeCreateNestedManyWithoutEpidemiesInput;
};
