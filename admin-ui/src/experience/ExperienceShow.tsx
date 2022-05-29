import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="region1" source="region1" />
        <TextField label="region2" source="region2" />
        <TextField label="region3" source="region3" />
        <TextField label="region4" source="region4" />
        <ReferenceField label="resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="T" source="t" />
        <TextField label="tests" source="tests" />
      </SimpleShowLayout>
    </Show>
  );
};
