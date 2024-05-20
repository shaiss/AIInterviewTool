import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SupervisoryAgentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backgroundInfo" multiline source="backgroundInfo" />
        <TextInput label="context" multiline source="context" />
        <div />
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Create>
  );
};
