import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EPIDEMIE_TITLE_FIELD } from "../epidemie/EpidemieTitle";

export const ResumeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Resumes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
