import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "id";

export const ResumeTitle = (record: TResume): string => {
  return record.id || record.id;
};
