import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TranscriptionAgentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audioFilePath" source="audioFilePath" />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Create>
  );
};
