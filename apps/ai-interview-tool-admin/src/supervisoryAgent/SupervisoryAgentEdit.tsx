import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SupervisoryAgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backgroundInfo" multiline source="backgroundInfo" />
        <TextInput label="context" multiline source="context" />
        <div />
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Edit>
  );
};
