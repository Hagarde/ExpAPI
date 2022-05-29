import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { EPIDEMIE_TITLE_FIELD } from "./EpidemieTitle";

export const EpidemieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DD" source="duree" />
        <TextField label="ID" source="id" />
        <TextField label="R" source="indiceIncidence" />
        <ReferenceManyField
          reference="Resume"
          target="EpidemieId"
          label="Resumes"
        >
          <Datagrid rowClick="show">
            <BooleanField label="acc" source="acc" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="epsilon " source="epsilon" />
            <TextField label="ID" source="id" />
            <TextField label="infecteInitiale" source="infecteInitiale" />
            <TextField label="I0" source="proportionInitiale" />
            <TextField label="situationInitiale" source="situationInitiale" />
            <ReferenceField
              label="virus"
              source="epidemie.id"
              reference="Epidemie"
            >
              <TextField source={EPIDEMIE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
