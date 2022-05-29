import { SortOrder } from "../../util/SortOrder";

export type EpidemieOrderByInput = {
  createdAt?: SortOrder;
  duree?: SortOrder;
  id?: SortOrder;
  indiceIncidence?: SortOrder;
};
