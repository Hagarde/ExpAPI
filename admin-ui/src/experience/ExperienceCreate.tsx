import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ResumeTitle } from "../resume/ResumeTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
