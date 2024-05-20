import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuestionGenerationAgentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QuestionGenerationAgents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="apiKey" source="apiKey" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="generatedQuestion" source="generatedQuestion" />
        <TextField label="ID" source="id" />
        <TextField label="transcript" source="transcript" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
