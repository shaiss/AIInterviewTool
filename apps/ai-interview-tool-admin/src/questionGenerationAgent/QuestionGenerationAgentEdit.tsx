import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const QuestionGenerationAgentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="generatedQuestion" source="generatedQuestion" />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Edit>
  );
};
