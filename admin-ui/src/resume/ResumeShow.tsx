import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "./ResumeTitle";
import { EPIDEMIE_TITLE_FIELD } from "../epidemie/EpidemieTitle";

export const ResumeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="acc" source="acc" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="epsilon " source="epsilon" />
        <TextField label="ID" source="id" />
        <TextField label="infecteInitiale" source="infecteInitiale" />
        <TextField label="I0" source="proportionInitiale" />
        <TextField label="situationInitiale" source="situationInitiale" />
        <ReferenceField label="virus" source="epidemie.id" reference="Epidemie">
          <TextField source={EPIDEMIE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Experience"
          target="ResumeId"
          label="Experiences"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="region1" source="region1" />
            <TextField label="region2" source="region2" />
            <TextField label="region3" source="region3" />
            <TextField label="region4" source="region4" />
            <ReferenceField
              label="resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="T" source="t" />
            <TextField label="tests" source="tests" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
