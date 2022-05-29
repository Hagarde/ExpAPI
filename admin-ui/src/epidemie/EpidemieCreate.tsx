import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResumeTitle } from "../resume/ResumeTitle";

export const EpidemieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="DD" source="duree" />
        <NumberInput label="R" source="indiceIncidence" />
        <ReferenceArrayInput
          source="resumes"
          reference="Resume"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResumeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
