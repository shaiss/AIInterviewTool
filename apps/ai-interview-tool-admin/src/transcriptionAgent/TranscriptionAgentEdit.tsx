import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TranscriptionAgentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="audioFilePath" source="audioFilePath" />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Edit>
  );
};
