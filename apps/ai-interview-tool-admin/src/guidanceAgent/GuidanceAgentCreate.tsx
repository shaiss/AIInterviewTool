import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GuidanceAgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="guidance" multiline source="guidance" />
        <div />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Create>
  );
};
