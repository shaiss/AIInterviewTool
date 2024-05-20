import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GuidanceAgentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GuidanceAgents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="guidance" source="guidance" />
        <TextField label="ID" source="id" />
        <TextField label="keyTopics" source="keyTopics" />
        <TextField label="transcript" source="transcript" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
