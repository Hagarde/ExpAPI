import { EpidemieWhereInput } from "./EpidemieWhereInput";
import { EpidemieOrderByInput } from "./EpidemieOrderByInput";

export type EpidemieFindManyArgs = {
  where?: EpidemieWhereInput;
  orderBy?: Array<EpidemieOrderByInput>;
  skip?: number;
  take?: number;
};
