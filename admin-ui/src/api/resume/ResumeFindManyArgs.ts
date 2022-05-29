import { ResumeWhereInput } from "./ResumeWhereInput";
import { ResumeOrderByInput } from "./ResumeOrderByInput";

export type ResumeFindManyArgs = {
  where?: ResumeWhereInput;
  orderBy?: Array<ResumeOrderByInput>;
  skip?: number;
  take?: number;
};
