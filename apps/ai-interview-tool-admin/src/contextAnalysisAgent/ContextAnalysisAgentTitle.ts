import { ContextAnalysisAgent as TContextAnalysisAgent } from "../api/contextAnalysisAgent/ContextAnalysisAgent";

export const CONTEXTANALYSISAGENT_TITLE_FIELD = "id";

export const ContextAnalysisAgentTitle = (
  record: TContextAnalysisAgent
): string => {
  return record.id?.toString() || String(record.id);
};
