import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GuidanceAgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="guidance" multiline source="guidance" />
        <div />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Edit>
  );
};
