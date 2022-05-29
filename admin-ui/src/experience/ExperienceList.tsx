import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const ExperienceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
