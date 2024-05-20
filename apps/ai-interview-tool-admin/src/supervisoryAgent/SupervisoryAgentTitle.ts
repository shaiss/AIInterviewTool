import { SupervisoryAgent as TSupervisoryAgent } from "../api/supervisoryAgent/SupervisoryAgent";

export const SUPERVISORYAGENT_TITLE_FIELD = "id";

export const SupervisoryAgentTitle = (record: TSupervisoryAgent): string => {
  return record.id?.toString() || String(record.id);
};
