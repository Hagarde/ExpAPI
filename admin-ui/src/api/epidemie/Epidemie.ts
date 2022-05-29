import { Resume } from "../resume/Resume";

export type Epidemie = {
  createdAt: Date;
  duree: number | null;
  id: string;
  indiceIncidence: number;
  resumes?: Array<Resume>;
};
