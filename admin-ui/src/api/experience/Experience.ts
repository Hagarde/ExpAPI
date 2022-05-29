import { JsonValue } from "type-fest";
import { Resume } from "../resume/Resume";

export type Experience = {
  createdAt: Date;
  id: string;
  region1: JsonValue;
  region2: JsonValue;
  region3: JsonValue;
  region4: JsonValue;
  resume?: Resume | null;
  t: number | null;
  tests: JsonValue;
};
