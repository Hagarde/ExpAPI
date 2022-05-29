import { ResumeUpdateManyWithoutEpidemiesInput } from "./ResumeUpdateManyWithoutEpidemiesInput";

export type EpidemieUpdateInput = {
  duree?: number | null;
  indiceIncidence?: number;
  resumes?: ResumeUpdateManyWithoutEpidemiesInput;
};
