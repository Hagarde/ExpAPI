import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ResumeTitle } from "../resume/ResumeTitle";

export const ExperienceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <div />
        <div />
        <ReferenceInput source="resume.id" reference="Resume" label="resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="T" source="t" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
