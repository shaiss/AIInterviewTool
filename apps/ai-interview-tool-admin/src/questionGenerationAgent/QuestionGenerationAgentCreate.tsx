import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const QuestionGenerationAgentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="generatedQuestion" source="generatedQuestion" />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Create>
  );
};
