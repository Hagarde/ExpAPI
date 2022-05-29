import { Epidemie as TEpidemie } from "../api/epidemie/Epidemie";

export const EPIDEMIE_TITLE_FIELD = "id";

export const EpidemieTitle = (record: TEpidemie): string => {
  return record.id || record.id;
};
