import { Experience as TExperience } from "../api/experience/Experience";

export const EXPERIENCE_TITLE_FIELD = "id";

export const ExperienceTitle = (record: TExperience): string => {
  return record.id || record.id;
};
