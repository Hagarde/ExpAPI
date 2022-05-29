import { ExperienceWhereInput } from "./ExperienceWhereInput";
import { ExperienceOrderByInput } from "./ExperienceOrderByInput";

export type ExperienceFindManyArgs = {
  where?: ExperienceWhereInput;
  orderBy?: Array<ExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
