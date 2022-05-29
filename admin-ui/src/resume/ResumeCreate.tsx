import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ExperienceTitle } from "../experience/ExperienceTitle";
import { EpidemieTitle } from "../epidemie/EpidemieTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="acc" source="acc" />
        <NumberInput label="epsilon " source="epsilon" />
        <ReferenceArrayInput
          source="experiences"
          reference="Experience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperienceTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="infecteInitiale"
          source="infecteInitiale"
          choices={[
            { label: "Region1", value: "Region1" },
            { label: "Region2", value: "Region2" },
            { label: "Region3", value: "Region3" },
            { label: "Region4", value: "Region4" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="I0" source="proportionInitiale" />
        <SelectInput
          source="situationInitiale"
          label="situationInitiale"
          choices={[
            { label: "confinement", value: "Confinement" },
            { label: "fluxGeo", value: "FluxGeo" },
            { label: "fluxGenerationelle", value: "FluxGenerationelle" },
            { label: "Libre", value: "Libre" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="epidemie.id" reference="Epidemie" label="virus">
          <SelectInput optionText={EpidemieTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
